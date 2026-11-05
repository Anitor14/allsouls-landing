import type { Metadata } from "next";
import { Cormorant_Garamond, Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "All Souls' Church, Lekki | All souls are welcome here",
  description:
    "An Anglican parish in Lekki Phase 1, Lagos. Plan your visit to All Souls' Church, and stay connected through our member app, kiosk and online giving.",
  openGraph: {
    title: "All Souls' Church, Lekki",
    description:
      "An Anglican parish in Lekki Phase 1, Lagos. All souls are welcome here.",
    images: ["/images/sanctuary-wide.jpg"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${cormorant.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
