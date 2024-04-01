import { Canvas } from "./_components/canvas";
import { Room } from "@/components/room";
import { Loading } from "./_components/loading";

interface BoardIdPageProps {
    params: {
        boardId: string,
    }
};

const BoardIdPage = ({
    params
}: BoardIdPageProps) => {
    return (
        <div className="h-full">
            {/* Opening a board triggers a new room on liveblocks */}
            <Room roomId={params.boardId} fallback={<Loading />}>
                <Canvas boardId={params.boardId} />
            </Room>
        </div>
    );
};

export default BoardIdPage;
