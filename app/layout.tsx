import type {Metadata} from "next";
import {Anek_Telugu} from "next/font/google";
import "./globals.css";
import {GeistSans} from "geist/font/sans";
import React from "react";
import {cn} from "@/lib/utils";

const AnekTelugu = Anek_Telugu({
    subsets: ['latin'],
    variable: '--font-caption',
    display: 'swap',
});

// const geistSans = Geist({
//     variable: "--font-geist-sans",
//     subsets: ["latin"],
// });
//
// const geistMono = Geist_Mono({
//     variable: "--font-geist-mono",
//     subsets: ["latin"],
// });

export const metadata: Metadata = {
    title: "Darryl-win Logossou . Software Engineer",
    description: "Flutter Fullstack Developer",
};

// app/layout.tsx
export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className='h-full'>
        <body className={cn(
            GeistSans.variable,
            AnekTelugu.variable,
            "font-sans h-full bg-background text-foreground"
        )}>
        {children}
        </body>
        </html>
    );
}