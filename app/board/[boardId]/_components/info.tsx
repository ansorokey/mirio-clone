"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";


interface InfoProps {
    boardId: string;
}

const font = Poppins({
    subsets: ["latin"],
    weight: ["600"]
});

export const Info = ({
    boardId
}: InfoProps) => {
    const data = useQuery(api.board.get, {
        id: boardId as Id<"boards">
    });

    if(!data) {
        return <InfoSkeleton />
    }

    return (
        <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md">
            <Button asChild className="px-2" variant="board">
                <Link href="/">
                    <Image
                        src="/logo.svg"
                        alt="Site Logo"
                        height={40}
                        width={40}
                    />

                    <span className={cn(
                        "font-semibold text-xl ml-2 text-black",
                        font.className
                    )}>
                        Board
                    </span>
                </Link>
            </Button>
        </div>
    );
};

// The parent component that uses this either has to be marked as use client
// OR instead of adding this skeleton as a property, export it as its own sub-component
export const InfoSkeleton = () => {
    return (
        <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12
        flex items-center shadow-md w-[300px]" />
    );
}
