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
        href="https://e47b698e59208764aee00d1d8e14313c.cdn.bubble.io/f1765238405098x558032232358736100/Colfax-Regular.woff"
        as="font"
        type="font/woff"
        crossOrigin="anonymous"
      />
      {children}
    </>
  );
}
