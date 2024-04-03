"use client";

import { useState } from "react";
import { CanvasState, CanvasMode } from "@/types/canvas";
import { Info } from "./info";
import { Participants } from "./participants";
import { Toolbar } from "./toolbar";
import { useCanRedo, useCanUndo, useHistory } from "@/liveblocks.config";
import { CursorsPresence } from "./cursors-presence";
// import { useSelf } from "@/liveblocks.config";


interface CanvasProps {
    boardId: string;
}

export const Canvas = ({
    boardId
}: CanvasProps) => {
    // View user metadata
    // const info = useSelf((me) => me.info);

    const [canvasState, setCanvasState] = useState<CanvasState>({
        mode: CanvasMode.None,
    });

    const history = useHistory();
    const canUndo = useCanUndo();
    const canRedo = useCanRedo();

    return (
        <main className="h-full w-full relative bg-neutral-100 touch-none">
            <Info boardId={boardId} />
            <Participants />
            <Toolbar
                canvasState={canvasState}
                setCanvasState={setCanvasState}
                canRedo={canRedo}
                canUndo={canUndo}
                undo={history.undo}
                redo={history.redo}
            />

            <svg
                className="h-[100vh] w-[100vw]"
            >
                <g>
                    <CursorsPresence />
                </g>
            </svg>
       </main>
    );
}
