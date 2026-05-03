import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dearchon | We Build It. You Run It.",
  description:
    "Dearchon is an all-in-one digital partner for companies, handling technology consulting, design, development, and maintenance."
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
