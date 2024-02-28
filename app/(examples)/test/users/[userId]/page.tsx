// What is an interface?
// An interface is
interface UserIdProps {
    params: {
        userId: string;
    };
}

export default function UserPage({
    params
}: UserIdProps) {
    return (
        <h1>Hello {params.userId}</h1>
    );
}
