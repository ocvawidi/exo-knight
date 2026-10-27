import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Exo Knight — Personal Roleplay System",
  description: "A private space to continue the Exo Knight chronicles.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}