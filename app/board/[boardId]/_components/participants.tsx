"use client";

import { currentUser } from "@clerk/nextjs";
import { UserAvatar } from "./user-avatar";
import { useOthers, useSelf } from "@/liveblocks.config";

// The number of users to show in addition to current user
const MAX_SHOWN_USERS = 2;

export const Participants = () => {
    const users = useOthers();
    const currentUser = useSelf();
    const hasMoreUsers = users.length > MAX_SHOWN_USERS;

    return (
        <div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md">
            <div className="flex gap-x-2">
                {/* Users other than current user */}
                {users.slice(0, MAX_SHOWN_USERS).map(({ connectionId, info}) => {
                    return (
                        <UserAvatar
                            key={connectionId}
                            src={info?.picture}
                            name={info?.name}
                            fallback={info?.name?.[0] || "A"}
                        />
                    );
                })}

                {/* This user's name and avatar */}
                {currentUser && (
                    <UserAvatar
                        src={currentUser.info?.picture}
                        name={`${currentUser.info?.name} (You)`}
                        fallback={currentUser.info?.name?.[0]}
                    />
                )}

                {/* If there are more other users than given max,
                show avatar with number as that says 'X more' */}
                {hasMoreUsers && (
                    <UserAvatar
                        name={`${users.length - MAX_SHOWN_USERS} more`}
                        fallback={`${+users.length + MAX_SHOWN_USERS}`}
                    />
                )}
            </div>
        </div>
    );
};


export const ParticipantsSkeleton = () => {
    return (
        <div className="absolute h-12 top-2 right-2 bg-white rounded-md
        p-3 flex items-center shadow-md w-[100px]" />
    );
}
