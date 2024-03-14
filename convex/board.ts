import { v } from "convex/values";
import { mutation } from './_generated/server';

const images = [
    "/placeholders/1 (1).svg",
    "/placeholders/2 (1).svg",
    "/placeholders/3 (1).svg",
    "/placeholders/4 (1).svg",
    "/placeholders/5 (1).svg",
    "/placeholders/6 (1).svg",
    "/placeholders/7 (1).svg",
    "/placeholders/8 (1).svg",
    "/placeholders/9 (1).svg",
    "/placeholders/10 (1).svg",
]

export const create = mutation({
    args: {
        orgId: v.string(),
        title: v.string(),
    },
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity();

        if (!identity) {
            throw new Error("Unauthorized");
        }

        const randomImage = images[Math.floor(Math.random() * images.length)]

        const board = await ctx.db.insert("boards", {
            title: args.title,
            orgId: args.orgId,
            authorId: identity.subject,
            authorName: identity.name!,
            imageUrl: randomImage,
        });

        return board;
    }

});

export const remove = mutation({
    args: { id: v.id("boards")},
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity();

        if(!identity) {
            throw new Error("Unauthorized")
        }

        // TODO: Later, check to cascade delete favorite relations as well

        await ctx.db.delete(args.id);
    }
});
