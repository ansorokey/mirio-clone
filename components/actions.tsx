"use client";

import { DropdownMenuProps } from "@radix-ui/react-dropdown-menu";

interface ActionsProps {
    children: React.ReactNode;
    side?: DropdownMenuProps["side"];
    sideOffset?: DropdownMenuProps["sideOffset"];
    id: string;
    title: string;
}

export const Actions = ({
    children,
    side,
    sideOffset,
    id,
    title
}: ActionsProps) => {
    return (
        <div>
            Actions
        </div>
    );
}
