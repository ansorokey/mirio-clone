"use client";

import {
    Dialog,
    DialogDescription,
    DialogContent,
    DialogHeader,
    DialogClose,
    DialogFooter,
    DialogTitle
} from "@/components/ui/dialog";
import { useRenameModal } from "@/store/use-rename-modal";

export const RenameModal = () => {
    // TODO: title useState

    const {
        isOpen,
        onClose,
        initialValues
    } = useRenameModal();

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Edit board title
                    </DialogTitle>
                </DialogHeader>

                <DialogDescription>
                    Enter a new title for this board
                </DialogDescription>
            </DialogContent>
        </Dialog>
    );
}
