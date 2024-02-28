import React from "react";

interface LayoutProps {
    children: React.ReactNode;
}

export default function ExampleLayout({
    children
}: LayoutProps) {
    return (
        <div className="flex flex-col gap-y-4">
            <nav>I am a nav bar</nav>
            {children}
        </div>
    );
}
