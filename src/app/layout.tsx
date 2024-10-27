import type { Metadata } from "next";
import "./globals.css"
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
      <link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css"/>
      <link href="https://cdn.jsdelivr.net/npm/remixicon@3.7.0/fonts/remixicon.css" rel="stylesheet"/>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Oswald:wght@400;500;600;700&display=swap" rel="stylesheet"/>
      <title>Mon portfolio NextJS</title>
    </head>
    <body>
    {children}
    </body>
    </html>
  );
}
