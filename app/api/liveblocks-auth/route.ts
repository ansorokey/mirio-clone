import { Liveblocks } from "@liveblocks/node";
import { ConvexHttpClient } from "convex/browser";
import { api } from "@/convex/_generated/api";
import { auth, currentUser } from "@clerk/nextjs";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

const liveblocks = new Liveblocks({
  secret: "sk_dev_Wz8vl9Sw5TjQSteNwpnjvDVlIIcaUHTSzYbvmzFYQzcOI0niuVx1dZZEl5gNiE5l",
});

export async function POST(request: Request) {
    const authorization = await auth();
    const user = await currentUser();

    console.log("AUTH_INFO", {
        authorization,
        user
    })

    if(!authorization || !user) {
        return new Response("Unauthorized", { status: 403});
    }

    const { room } = await request.json();
    const board = await convex.query(api.board.get, { id: room});

    console.log("ROOM_INFO", {
        room,
        board,
        boardOrgId: board?.orgId,
        userOrgId: authorization.orgId
    });

    if(board?.orgId !== authorization.orgId) {
        return new Response("Unauthorized");
    }

    const userInfo = {
        name: user.firstName || "Anonymous",
        picture: user.imageUrl!
    }

    console.log("USER_INFO", { userInfo})

    const session = liveblocks.prepareSession(user.id, { userInfo })

    if(room) {
        session.allow(room, session.FULL_ACCESS);
    }

    const { status, body } = await session.authorize();

    console.log("ALLOWED", { status, body})

    return new Response(body, { status })
}