// app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";
import "./responsive.css";
import { RootProvider } from "@/components";
import TiktokPixel from "@/components/TiktokPixel"; // ✅ keep this import

export const metadata: Metadata = {
  title: "Hemvo | Find Your Perfect Flat to Rent or Buy",
  description:
    "Discover your ideal flat with Hemvo! Browse a wide selection of flats for rent and sale. Explore listings, neighborhood insights, and expert buying guides to make your search easier.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* FAV ICONS ` */}
        <link
          rel="icon"
          type="image/png"
          href="favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="favicon.svg" />
        <link rel="shortcut icon" href="favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="apple-touch-icon.png"
        />
        <link rel="manifest" href="site.webmanifest" />

        {/* SEO + meta */}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="author" content="hemvo" />
        <meta
          name="keywords"
          content="flats for rent, flats for sale, apartment listings, real estate, property rental, home buying, Hemvo, find a flat, rental guide, buying guide"
        />
        <meta
          name="description"
          content="Discover your ideal flat with Hemvo! Browse a wide selection of flats for rent and sale. Explore listings, neighborhood insights, and expert buying guides to make your search easier."
        />

        {/* OG + Twitter meta */}
        <meta
          property="og:title"
          content="Hemvo | Find Your Perfect Flat to Rent or Buy"
        />
        <meta
          property="og:description"
          content="Discover your ideal flat with Hemvo! Browse a wide selection of flats for rent and sale. Explore listings, neighborhood insights, and expert buying guides to make your search easier."
        />
        <meta
          property="og:image"
          content="https://hemvo-frontend.vercel.app/_next/static/media/opengraph-image.13fcec95.jpg"
        />
        <meta property="og:url" content="https://hemvo-frontend.vercel.app/" />
        <meta property="og:site_name" content="hemvo" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Hemvo | Find Your Perfect Flat to Rent or Buy"
        />
        <meta
          name="twitter:description"
          content="Discover your ideal flat with Hemvo! Browse a wide selection of flats for rent and sale. Explore listings, neighborhood insights, and expert buying guides to make your search easier."
        />
        <meta
          name="twitter:image"
          content="https://hemvo-frontend.vercel.app/_next/static/media/opengraph-image.13fcec95.jpg"
        />

        {/* Other scripts */}
        <script src="https://app.ilonsi.com/script/main.min.js"></script>
        <script src="https://app.ilonsi.com/script/purchase.min.js"></script>
      </head>

      {/* <body> */}
        <RootProvider>{children}</RootProvider>
      {/* </body> */}
    </html>
  );
}
