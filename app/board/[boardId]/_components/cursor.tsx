"use client";

import { memo } from "react";
import { connectionIdToColor } from "@/lib/utils";
import { MousePointer2 } from "lucide-react";
import { useOther } from "@/liveblocks.config";

interface CursorProps {
    connectionId: number;
}

export const Cursor = memo(({
    connectionId
}: CursorProps) => {
    const info = useOther(connectionId, (user) => user?.info);
    const cursor = useOther(connectionId, (user) => user.presence.cursor);

    const name = info?.name || "Anonymous";

    if(!cursor) {
        return null;
    }

    const { x, y } = cursor;

    return (
        <p></p>
    );
});
