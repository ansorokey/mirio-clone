"use client";

export const Info = () => {
    return (
        <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md">
           TODO: Information about the board
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
