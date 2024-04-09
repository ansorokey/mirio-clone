"use client";

import { Camera, Color } from "@/types/canvas";
import { memo } from "react";

interface SelectionToolsProps {
    camera: Camera;
    setLastUsedColor: (color: Color) => void;
}

export const SelectionTools = memo(({
    camera, setLastUsedColor
}: SelectionToolsProps) => {
    return (
        <div>
            tools
        </div>
    );
})

SelectionTools.displayName = "SelectionTools";
