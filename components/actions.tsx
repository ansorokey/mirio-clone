"use client";

import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
    DropdownMenuItem
} from "@/components/ui/dropdown-menu";
import { Link2, Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";
import { ConfirmModal } from "./confirm-modal";
import { Button } from "./ui/button";
import { useRenameModal } from "@/store/use-rename-modal";

interface ActionsProps {
    children: React.ReactNode;
    side?: DropdownMenuContentProps["side"];
    sideOffset?: DropdownMenuContentProps["sideOffset"];
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
    const { mutate, pending } = useApiMutation(api.board.remove);
    const { onOpen } = useRenameModal();

    const onCopyLink = () => {
        navigator.clipboard.writeText(`${window.location.origin}/board/${id}`)
            .then(() => toast.success("Link copied"))
            .catch(() => toast.error("Failed to copy link"))
    }

    const onDelete = () => {
        mutate({id})
            .then(() => toast.success("Board deleted"))
            .catch(() => toast.error("Failed to delete board"))
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                {children}
            </DropdownMenuTrigger>

            <DropdownMenuContent
                // prevents the link beneath the options from redirecting
                onClick={(e) => e.stopPropagation()}
                side={side}
                sideOffset={sideOffset}
                className="w-60"
            >
                <DropdownMenuItem
                    className="p-3 cursor-pointer"
                    onClick={onCopyLink}
                >
                    <Link2
                        className="h-4 w-4 mr-2"
                    />
                    Copy board link
                </DropdownMenuItem>

                <DropdownMenuItem
                    className="p-3 cursor-pointer"
                    onClick={() => onOpen(id, title)}
                >
                    <Pencil
                        className="h-4 w-4 mr-2"
                    />
                    Rename
                </DropdownMenuItem>

                {/* We use a button down below instead of a dropdown menu item.
                A button will not close the options menu when clicked on, but this does not matter since the modal and menu wil disappear on deletion.
                This does mean that the menu wont close after we cancel tho, so that's something we may want to address later on.*/}
                <ConfirmModal
                    header="Delete board?"
                    description="This will delete theboard and all of its contents."
                    disabled={pending}
                    onConfirm={onDelete}
                >
                    <Button
                        className="p-3 cursor-pointer text-sm w-full justify-start font-normal"
                        variant="ghost"
                    >
                        <Trash2
                            className="h-4 w-4 mr-2"
                        />
                        Delete
                    </Button>
                </ConfirmModal>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
