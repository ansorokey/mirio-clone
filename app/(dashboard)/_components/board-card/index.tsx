"use client";

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
        <div>
            Board card!
        </div>
    );
}

export default BoardCard;
