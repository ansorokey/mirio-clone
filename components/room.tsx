"use client";

import { ReactNode } from "react";
import { RoomProvider } from "@/liveblocks.config";
import { ClientSideSuspense } from "@liveblocks/react";

interface RoomProps {
    children: ReactNode;
    roomId: string;
}


export const Room = ({
    children,
    roomId
}: RoomProps) => {
    return (
        <RoomProvider id={roomId} initialPresence={{}}>
            <ClientSideSuspense fallback={<div>Loading...</div>}>
                {() => children}
            </ClientSideSuspense>
        </RoomProvider>
    );
}
