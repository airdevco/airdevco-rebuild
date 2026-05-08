import type { ReactNode } from "react";

/**
 * Preconnect + font preload for Bubble Development landing.
 */
export default function BubbleDevelopmentLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <link rel="preconnect" href="https://cdn.prod.website-files.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io" crossOrigin="anonymous" />
      <link
        rel="preload"
        href="/fonts/Colfax-Regular.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      {children}
    </>
  );
}
