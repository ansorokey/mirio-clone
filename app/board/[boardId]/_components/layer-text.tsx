import { Kalam } from "next/font/google";
import CntentEditable, { ContentEditableEvent } from "react-contenteditable";
import { cn, colorToCss} from "@/lib/utils";
import { TextLayer } from "@/types/canvas";
import { useMutation } from "@/liveblocks.config";
import React from "react";
import ContentEditable from "react-contenteditable";

const font = Kalam({
    subsets: ["latin"],
    weight: ["400"]
});

interface TextProps {
    id: string;
    layer: TextLayer;
    onPointerDown: (e: React.PointerEvent, id: string) => void;
    selectionColor?: string;
}

export const Text = ({
    id,
    layer,
    onPointerDown,
    selectionColor
}: TextProps) => {
    const {
        x, y,
        width, height,
        fill, value
    } = layer;

    return (
        <foreignObject
            x={x}
            y={y}
            width={width}
            height={height}
            onPointerDown={(e) => onPointerDown(e, id)}
            style={{
                outline: selectionColor ? `1px solid ${selectionColor}` : "none"
            }}
        >
            <ContentEditable
                html={"Text"}
                onChange={() => {}}
            />
        </foreignObject>
    );
}
