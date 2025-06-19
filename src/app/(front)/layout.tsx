import { Header, Footer } from "@/components";
import type { Metadata } from "next";

// export const metadata: Metadata = {
//   description:
//     "Discover your ideal flat with Hemvo! Browse a wide selection of flats for rent and sale. Explore listings, neighborhood insights, and expert buying guides to make your search easier.",
//   metadataBase: new URL("https://Hemvo.se"),
//   keywords:
//     "flats for rent, flats for sale, apartment listings, real estate, property rental, home buying, Hemvo, find a flat, rental guide, buying guide",
//   authors: [{ name: "Hemvo", url: "https://Hemvo.se" }],
//   twitter: {
//     title: "Hemvo | Find Your Perfect Flat to Rent or Buy",
//     description:
//       "Discover your ideal flat with Hemvo! Browse a wide selection of flats for rent and sale.",
//     images: "https://Hemvo.se/_next/static/media/opengraph-image.jpg",
//   },
//   openGraph: {
//     title: "Hemvo | Find Your Perfect Flat to Rent or Buy",
//     description:
//       "Explore a diverse range of flats for rent and sale. Get expert advice, neighborhood insights, and more with Hemvo.",
//     url: "https://Hemvo.se",
//     type: "website",
//     images: "https://Hemvo.se/_next/static/media/opengraph-image.jpg",
//   },
// };

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
