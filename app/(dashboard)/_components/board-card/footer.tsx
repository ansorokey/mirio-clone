import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Tracing } from "trace_events";

interface FooterProps {
    title: Tracing;
    authorLabel: string;
    createdAtLabel: string;
    isFavorite: boolean;
    onClick: () => void;
    disabled: boolean;
}

export const Footer = ({
    title,
    authorLabel,
    createdAtLabel,
    isFavorite,
    onClick,
    disabled
}: FooterProps) => {
    return (
        <div>
            Footer
        </div>
    );
}
