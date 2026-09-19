import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { generateStructuredData } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#a74911",
  width: "device-width",
  initialScale: 1,
};

const title = "AI Receptionist ROI Calculator | The Squirrel Technologies";
const description =
  "Free calculator: estimate the staff hours an AI receptionist frees up and the revenue it recovers from missed calls, with year-1 ROI. Open source.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  authors: [{ name: "The Squirrel Technologies", url: "https://www.thesquirrel.tech" }],
  creator: "The Squirrel Technologies",
  publisher: "The Squirrel Technologies",
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "The Squirrel Technologies",
    images: [{ url: "/logo.png", width: 500, height: 500, alt: "The Squirrel Technologies logo" }],
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary", title, description, images: ["/logo.png"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  icons: { icon: [{ url: "/favicon.ico", sizes: "any" }, { url: "/logo.png", type: "image/png" }], apple: "/logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateStructuredData()) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
