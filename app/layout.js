import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


 // app/layout.js (Next.js 13+)
// import './globals.css'
import Head from 'next/head'

export const metadata = {
  title: 'Your Portfolio',
  description: 'Created by Vijay',
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en">
      <head>
        <title>Vijay&apos;s Portfolio</title>
        <meta name="description" content="Vijay's Personal Portfolio" />

        {/* ✅ Font Awesome CDN Link */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          integrity="sha512-dQAZr4YmZkC1YmWyOc7fA9M2w8I2R/kGwXW4Zr6rNj6ZBGHZyXEvQZTzT5BmnUtP0MbTqEVHXYcYlYzCkN0Ykg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}




