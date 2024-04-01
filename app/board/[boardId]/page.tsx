import { Canvas } from "./_components/canvas";
import { Room } from "@/components/room";

interface BoardIdPageProps {
    params: {
        boardId: string,
    }

}

const BoardIdPage = ({
    params
}: BoardIdPageProps) => {
    return (
        <div className="h-full">
            <Room roomId={params.boardId}>
                <Canvas boardId={params.boardId} />
            </Room>
        </div>
    );
}

export default BoardIdPage;
