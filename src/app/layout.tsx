import type { Metadata } from "next";
import "@/index.css";
import { UsersnapScript } from "./usersnap-script";

export const metadata: Metadata = {
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
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=DM+Sans:wght@400;500;700&family=Manrope:wght@400;500;600;700;800&family=Instrument+Sans:wght@400;500;600;700&family=Roboto+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
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
        <UsersnapScript />
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
