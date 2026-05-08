import type { Metadata } from "next";
import fs from "node:fs";
import path from "node:path";
import "@/index.css";
import { ConvexClientProvider } from "@/components/ConvexClientProvider";
import { resolveSiteOrigin } from "@/lib/case-study-seo";

const siteOrigin = resolveSiteOrigin();

/**
 * At production build time, Next emits hashed CSS under `.next/static/css`.
 * Preload the largest chunk so the browser can fetch it in parallel with HTML.
 * Skipped in development (no stable path until compile settles).
 */
function getMainStylesheetPreloadHref(): string | null {
  if (process.env.NODE_ENV !== "production") {
    return null;
  }
  try {
    const cssDir = path.join(process.cwd(), ".next/static/css");
    const files = fs.readdirSync(cssDir).filter((n) => n.endsWith(".css"));
    if (files.length === 0) {
      return null;
    }
    let best = files[0];
    let bestSize = -1;
    for (const name of files) {
      const size = fs.statSync(path.join(cssDir, name)).size;
      if (size > bestSize) {
        bestSize = size;
        best = name;
      }
    }
    return `/_next/static/css/${best}`;
  } catch {
    return null;
  }
}

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: "Airdev | The leading no-code and Bubble app development agency",
  description:
    "Airdev is the leader in no-code & Bubble app development. We help businesses launch software products in a fraction of the time & cost of traditional developers.",
  authors: [{ name: "Airdev" }],
  openGraph: {
    type: "website",
    title: "Airdev | The leading no-code and Bubble app development agency",
    description:
      "Airdev is the leader in no-code & Bubble app development. We help businesses launch software products in a fraction of the time & cost of traditional developers.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Airdev | The leading no-code and Bubble app development agency",
    description:
      "Airdev is the leader in no-code & Bubble app development. We help businesses launch software products in a fraction of the time & cost of traditional developers.",
    images: [
      "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const mainCssHref = getMainStylesheetPreloadHref();

  return (
    <html lang="en">
      <head>
        {mainCssHref ? (
          <link rel="preload" href={mainCssHref} as="style" />
        ) : null}
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/62aa5d924f451675971558b1_airdev%20favicon.png"
        />
        <link
          rel="apple-touch-icon"
          href="https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/62aa5d924f451604f11558ab_airdev%20web%20clip.png"
        />
      </head>
      <body>
        <ConvexClientProvider>
          <div id="root">{children}</div>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
