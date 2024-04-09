"use client";

import { Color } from "@/types/canvas";

interface ColorPickerProps {
    onChange: (color: Color) => void;
}

export const ColorPicker = ({
    onChange
}: ColorPickerProps) => {
    return (
        <div>
            Color Picker!
        </div>
    );
}

interface ColorButtonProps {
    onClick: (color: Color) => void;
    color: Color;
}

const ColorButton = ({
    onClick,
    color
}: ColorButtonProps) => {
    return (
        <div>
            Color buton
        </div>
    );
}
