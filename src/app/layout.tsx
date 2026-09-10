import type { Metadata } from "next";
import "./globals.css";
import { generateStructuredData } from "@/lib/schema";

export const metadata: Metadata = {
  title: "AI Receptionist ROI & Labor Value Calculator | The Squirrel Technologies",
  description: "Calculate exactly how many front-desk hours your business recovers and how much revenue you capture from missed calls. Free open-source tool by The Squirrel Technologies.",
  keywords: [
    "AI receptionist ROI calculator",
    "AI receptionist cost",
    "AI phone answering ROI",
    "front desk automation calculator",
    "The Squirrel Technologies",
    "Ganesh Ghatti",
    "missed call revenue calculator",
    "voice AI customer care benchmark"
  ],
  authors: [{ name: "The Squirrel Technologies", url: "https://thesquirrel.tech" }],
  creator: "The Squirrel Technologies",
  publisher: "The Squirrel Technologies",
  metadataBase: new URL("https://thesquirrel.tech"),
  alternates: {
    canonical: "/solutions/ai-receptionist-calculator/"
  },
  openGraph: {
    title: "AI Receptionist ROI Calculator | The Squirrel Technologies",
    description: "Measure staff hours saved, missed call revenue recovered, and net annual ROI with The Squirrel AI Receptionist.",
    url: "https://thesquirrel.tech/solutions/ai-receptionist-calculator/",
    siteName: "The Squirrel Technologies",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "The Squirrel Technologies AI Receptionist ROI Calculator"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Receptionist ROI Calculator | The Squirrel Technologies",
    description: "Measure staff hours saved, missed call revenue recovered, and net annual ROI with The Squirrel AI Receptionist.",
    creator: "@ganeshghatti",
    images: ["/logo.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = generateStructuredData();

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
