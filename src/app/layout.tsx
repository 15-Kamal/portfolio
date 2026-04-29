import type { Metadata } from "next";
import { ReactLenis } from "lenis/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "KAMAL P - Portfolio",
  description: "Personal portfolio of KAMAL P, a full-stack software engineer.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ReactLenis root options={{ lerp: 0.1, duration: 1.4, smoothWheel: true }}>
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}