/*
 If another user has a much larger screen,
 their mouse movements may cause a scroll on current user's screen.
 This is a custom hook to prevent that.
*/

import { useEffect } from "react";

export const useDisableScrollBounce = () => {
    useEffect(() => {
        // Add class names on mount
        document.body.classList.add("overflow-hidden", "overscroll-none");

        // Remove on dismount
        return () => {
            document.body.classList.remove("overflow-hidden", "overscroll-none");
        }
    }, [])
}
