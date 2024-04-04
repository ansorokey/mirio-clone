"use client";

import { memo } from "react";

interface SelectionBoxProps {
    onResizeHandlePointerDown: () => void;
}

export const SelectionBox = memo(({
    onResizeHandlePointerDown
}: SelectionBoxProps) => {
    return (
        <div>
            Box
        </div>
    );
});

SelectionBox.displayName = "SelectionBox";
