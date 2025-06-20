"use client";
import { ReactNode } from "react";
import { AuthBanner, Hemvo, womanOnGrass } from "@/assets/images";
import { cx } from "class-variance-authority";
import { usePathname } from "next/navigation";
import styles from "./layout.module.css";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

export default function Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const pathsNoBanner = ["/login", "/reset-password"];

  return (
    <div
      className={cx(styles.auth, {
        [styles.noBanner]: pathsNoBanner.includes(pathname),
      })}
    >
      <main
        className={cx(
          styles.content,
          styles.authCard,
          " w-100 d-flex  ",
          pathsNoBanner.includes(pathname) && ""
        )}
      >
        <div
          className={cx(
            "d-flex justify-content-center justify-content-lg-between  w-100",
            pathsNoBanner.includes(pathname) && ""
          )}
        >
          <div
            className={cx(
              styles.authContent,
              " bg-white d-flex  align-items-center justify-content-center ",
              pathsNoBanner.includes(pathname) &&
                styles.authContentBeforeRegister
            )}
          >
            <div className={clsx(styles.logInForm)}>
              {!pathsNoBanner.includes(pathname) && (
                <Link
                  href={"/"}
                  className={cx(styles.authLogo, "d-block mb-3 mb-xl-4")}
                >
                  <img
                    src={Hemvo.src}
                    alt="Hemvo"
                    className="d-inline-block object-fit-contain"
                  />
                </Link>
              )}
              {children}
            </div>
          </div>
          <div
            className={clsx(styles.authPageLayout, "w-50 d-none d-lg-block")}
          >
            <Image
              className={"object-fit-cover h-100 w-100"}
              src={womanOnGrass}
              height={1030}
              width={920}
              alt="login-poster"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
