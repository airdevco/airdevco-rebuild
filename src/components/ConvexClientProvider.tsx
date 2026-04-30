"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import { ReactNode } from "react";

/** `undefined` = not yet read env; `null` = no URL (Convex disabled); otherwise client instance. */
let convexSingleton: ConvexReactClient | null | undefined;

function getConvexClient(): ConvexReactClient | null {
  if (convexSingleton !== undefined) {
    return convexSingleton;
  }
  const url = process.env.NEXT_PUBLIC_CONVEX_URL;
  if (!url?.trim()) {
    convexSingleton = null;
    if (process.env.NODE_ENV === "development") {
      console.warn(
        "[Convex] NEXT_PUBLIC_CONVEX_URL is not set. Set it in .env.local (and in Vercel → Environment Variables) for Convex to work."
      );
    }
    return null;
  }
  convexSingleton = new ConvexReactClient(url);
  return convexSingleton;
}

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  const convex = getConvexClient();
  if (!convex) {
    return <>{children}</>;
  }
  return <ConvexProvider client={convex}>{children}</ConvexProvider>;
}
