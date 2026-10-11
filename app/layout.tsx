import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CloudNest | Secure Temporary Workspaces",
  description:
    "Create secure temporary cloud workspaces for file sharing, team collaboration, and controlled project access.",
};

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
