import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dearchon.com";
const title = "Dearchon | We Build It. You Run It.";
const description =
  "Dearchon is an all-in-one digital partner for companies, handling technology consulting, design, development, and maintenance.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  icons: {
    icon: "/images/dearchon_favicon.png"
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Dearchon",
    images: [
      {
        url: "/images/dearchon_preview.png",
        width: 1372,
        height: 946,
        alt: "Dearchon preview"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/dearchon_preview.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
