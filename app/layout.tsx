import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Simone Garofalo | Sviluppo siti web e e-commerce",
  description: "Sviluppo e ottimizzo siti web e e-commerce con WordPress, Shopify e  React. Interventi mirati, risultati misurabili. Senza agenzie, senza  intermediari.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
