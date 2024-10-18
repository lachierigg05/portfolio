import type { Metadata } from "next";
import "./globals.css";

// Define metadata for the application
export const metadata: Metadata = {
  title: "Lachie Rigg",
  description: "Web Development Portfolio",
};

// RootLayout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
