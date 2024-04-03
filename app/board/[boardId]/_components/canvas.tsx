"use client";

import React, { useCallback, useState } from "react";
import { CanvasState, CanvasMode, Camera } from "@/types/canvas";
import { Info } from "./info";
import { Participants } from "./participants";
import { Toolbar } from "./toolbar";
import { useCanRedo, useCanUndo, useHistory, useMutation } from "@/liveblocks.config";
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

    const [camera, setCamera] = useState<Camera>({x:0, y:0});
    const [canvasState, setCanvasState] = useState<CanvasState>({
        mode: CanvasMode.None,
    });

    const history = useHistory();
    const canUndo = useCanUndo();
    const canRedo = useCanRedo();
    const onWheel = useCallback((e: React.WheelEvent) => {
        setCamera((camera) => {
            return {
                x: camera.x - e.deltaX,
                y: camera.y - e.deltaY
            }
        })
    }, []);

    const onPointerMove = useMutation(({ setMyPresence }, e: React.PointerEvent) => {
        e.preventDefault();

        const current = { x: 0, y: 0};

        setMyPresence({ cursor: current});
    }, [])

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
                onWheel={onWheel}
                onPointerMove={onPointerMove}
            >
                <g>
                    <CursorsPresence />
                </g>
            </svg>
       </main>
    );
}
