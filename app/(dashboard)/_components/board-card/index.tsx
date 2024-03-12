"use client";

import Link from "next/link";
import Image from "next/image";

interface BoardCardProps {
    id: string;
    title: string;
    imageUrl: string;
    authorName: string;
    createdAt: number;
    orgId: string;
    isFavorite: boolean;
};

const BoardCard = ({
    id,
    title,
    imageUrl,
    authorName,
    createdAt,
    orgId,
    isFavorite
}: BoardCardProps) => {
    return (
        <Link href={`/board/${id}`}>
            <div className="group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden">
                <div className="relative flex-1 bg-amber-50">
                    <Image
                        src={imageUrl}
                        alt="Doodle"
                        fill
                        className="object-fit"
                    />
                </div>
            </div>
        </Link>
    );
}

export default BoardCard;
