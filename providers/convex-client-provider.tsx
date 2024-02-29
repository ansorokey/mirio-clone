"use client";

import { ClerkProvider, useAuth } from '@clerk/nextjs';
import { ConvexProviderWithClerk } from 'convex/react-clerk';
import {
    AuthLoading,
    Authenticated,
    ConvexReactClient
} from "convex/react";
import React from 'react';

interface ConvexClientProviderProps {
    children: React.ReactNode;
}

// a ! at the end in TS means this variable cannot be undefined or null
const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;

const convex = new ConvexReactClient(convexUrl);

export const ConvexClientProvider = ({
    children
}: ConvexClientProviderProps) => {
    return (
        <ClerkProvider>
            <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
                {children}
            </ConvexProviderWithClerk>
        </ClerkProvider>
    );
}
