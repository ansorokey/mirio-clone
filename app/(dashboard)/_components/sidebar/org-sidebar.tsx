"use client";
// a client component allows us to use hooks, useEffects, onCL=licks, other interactive elements

export const OrgSidebar = () => {
    return (
        // hidden on small screen
        <div className="hidden lg:flex flex-col space-y-6 w-[206px] pl-5 pt-5">
            Org Sidebar
        </div>
    );
}
