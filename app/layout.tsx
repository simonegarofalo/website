import type { Metadata } from "next";
import "./globals.css";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Simone Garofalo",
  url: "https://www.simonegarofalo.xyz",
  jobTitle: "Web Developer",
  description: "Sviluppo e manutenzione siti web e e-commerce",
  knowsAbout: ["WordPress", "Shopify", "React", "Next.js", "SEO"],
  sameAs: [
    "https://www.linkedin.com/in/simone-garofalo/",
    "https://github.com/simonegarofalo",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.simonegarofalo.xyz"),
  title: "Simone Garofalo | Sviluppo e manutenzione di siti web e e-commerce",
  description: "Sviluppo e ottimizzo siti web e e-commerce con WordPress, Shopify e React. Interventi mirati, risultati misurabili. Senza agenzie, senza intermediari.",
  alternates: {
    canonical: "https://www.simonegarofalo.xyz",
  },
  openGraph: {
    title: "Simone Garofalo | Sviluppo e manutenzione web",
    description: "Interventi mirati, risultati misurabili. Senza agenzie, senza intermediari.",
    url: "https://www.simonegarofalo.xyz",
    siteName: "Simone Garofalo",
    locale: "it_IT",
    type: "website",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Simone Garofalo — Sviluppo web e e-commerce",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className="min-h-full flex flex-col">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}