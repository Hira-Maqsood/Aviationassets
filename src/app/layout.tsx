import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Aviation Assets — Aviation Training & Courses",
  description:
    "Discover 1000+ aviation training courses and professional development programs. Aviation Assets is your gateway to the best pilot training, cabin crew certification, and aerospace education worldwide.",
  keywords: [
    "aviation training",
    "pilot courses",
    "cabin crew certification",
    "aerospace education",
  ],
  openGraph: {
    title: "Aviation Assets — Aviation Training & Courses",
    description:
      "Discover 1000+ aviation training courses and professional development programs.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
