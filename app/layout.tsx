import type {Metadata} from "next";
import {Anek_Telugu, Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {GeistSans} from "geist/font/sans";
import React from "react";

const AnekTelugu = Anek_Telugu({
    subsets: ["latin"],
    variable: "--font-caption"
});

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Darryl-win Logossou . Software Engineer",
    description: "Flutter Fullstack Developer",
};

// app/layout.tsx
export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en"
              className={`${GeistSans.variable} ${AnekTelugu.variable} font-sans h-full`}>
        <body className="bg-background text-foreground">
        {children}
        </body>
        </html>
    );
}