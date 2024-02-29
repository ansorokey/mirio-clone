import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-4">
      <p>
        This is the authentication screen
      </p>

      <div>
        <UserButton />
      </div>
    </div>
  );
}
