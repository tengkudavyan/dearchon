import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dearchon.com";
const title = "Dearchon | Digital Product Development Partner";
const description =
  "Dearchon helps growing companies plan, design, build, launch, and maintain websites, web applications, mobile apps, CRM, HRM, POS, e-commerce, and custom digital products.";
const previewImage = "/images/dearchon_preview.png";
const keywords = [
  "Dearchon",
  "digital product development",
  "website development",
  "web application development",
  "mobile app development",
  "UI UX design",
  "technology consulting",
  "software maintenance",
  "CRM development",
  "HRM system",
  "POS system",
  "e-commerce development",
  "Indonesia software house"
];
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Dearchon",
  url: siteUrl,
  logo: `${siteUrl}/images/dearchon_logo_dark.png`,
  image: `${siteUrl}${previewImage}`,
  email: "davyan@dearchon.com",
  slogan: "We Build It. You Run It.",
  description,
  sameAs: [],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "davyan@dearchon.com",
      url: `${siteUrl}/#contact`,
      availableLanguage: ["English", "Indonesian"]
    }
  ],
  makesOffer: [
    "Technology consulting",
    "Website development",
    "Web application development",
    "Mobile app development",
    "UI/UX design",
    "Maintenance and support",
    "CRM development",
    "HRM system development",
    "POS system development",
    "E-commerce development"
  ].map((name) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name
    }
  }))
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Dearchon"
  },
  description,
  applicationName: "Dearchon",
  authors: [{ name: "Dearchon", url: siteUrl }],
  creator: "Dearchon",
  publisher: "Dearchon",
  keywords,
  category: "technology",
  icons: {
    icon: "/images/dearchon_favicon.png"
  },
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Dearchon",
    locale: "en_US",
    alternateLocale: ["id_ID"],
    images: [
      {
        url: previewImage,
        width: 1372,
        height: 946,
        alt: "Dearchon digital product development services preview"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [previewImage]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
