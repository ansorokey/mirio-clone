"use client";
// a client component allows us to use hooks, useEffects, onCL=licks, other interactive elements

import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { OrganizationSwitcher } from "@clerk/nextjs";

const font = Poppins({
    subsets: ["latin"],
    weight: ["600"]
});

export const OrgSidebar = () => {
    return (
        // hidden on small screen
        <div className="hidden lg:flex flex-col space-y-6 w-[206px] pl-5 pt-5">
            <Link href="">
                <div className="flex items-center gap-x-2">
                    <Image
                        src="/logo.svg"
                        alt="Logo"
                        height={60}
                        width={60}
                    />
                    <span className={cn(
                        "font-semibold text-2xl",
                        font.className
                    )}>
                        Board
                    </span>
                </div>
            </Link>
            <OrganizationSwitcher

            />
        </div>
    );
}
