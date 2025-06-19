"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import localFont from "next/font/local";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "@/store";

const Manrope = localFont({
  src: [
    {
      path: "../../assets/fonts/Manrope-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Manrope-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Manrope-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Manrope-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Manrope-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Manrope-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Manrope-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Manrope-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Manrope-ExtraBold.woff",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Manrope-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  fallback: ["Arial"],
});

export const RootProvider = ({
  children,
  ...rest
}: {
  children: ReactNode;
}) => {
  return (
    <>
      <body className={Manrope.className} id="root">
        <Toaster position="top-right" />
        <Provider store={store} {...rest}>
          {children}
        </Provider>
      </body>
      <GoogleAnalytics gaId="G-8BSWN632R1" />
    </>
  );
};
