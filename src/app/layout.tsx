import type { Metadata } from "next";
import "./globals.css"
import { inter } from './fonts/fonts';

export const metadata: Metadata = {
  title: "Mon portfolio NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
    <head>
      <meta charSet="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <link rel="stylesheet" type="text/css" href="./globals.css"/>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <title>Mon portfolio NextJS</title>
    </head>
    <body className={`${inter.className} antialiased`}>
    {children}
    </body>
    </html>
  );
}
