/*
Creating multiuple modals to render on the root layout can cause hydration errors.
Here, we will create a single provider that manages modals.
*/

"use client";
    // Rendering starts on server side, but this cannot be seen on the server
    // use client does not prevent this from being rendered on the server
    //it just means its not a server component, and loses access to things only server components can do

import { useEffect, useState } from "react";
import { RenameModal } from "@/components/modals/rename-modal";

export const ModalProvider = () => {
    // isMounted makes it visisble on the client side, and prevents hydration errors
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    });

    if(!isMounted) {
        return null;
    }

    return (
        <>
            <RenameModal />
        </>
    );
}
