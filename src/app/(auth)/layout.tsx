"use client";
import { ReactNode } from "react";
import { AuthBanner, Hemvo } from "@/assets/images";
import { cx } from "class-variance-authority";
import { usePathname } from "next/navigation";
import styles from "./layout.module.css";
import Link from "next/link";

export default function Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const pathsNoBanner = ["/login", "/reset-password"];

  return (
    <div
      className={cx(styles.auth, {
        [styles.noBanner]: pathsNoBanner.includes(pathname),
      })}
    >
      {!pathsNoBanner.includes(pathname) && (
        <div
          className={cx(
            styles.banner,
            styles.authCard,
            "d-flex bg-accent w-100 flex-column justify-content-center justify-content-xl-start"
          )}
        >
          <div className={cx(styles.bannerContent, "m-auto")}>
            <div className="ratio ratio-4x3 mb-4 d-xl-block">
              <img src={AuthBanner.src} alt="Couple using phone and smiling" className="radius-lg object-fit-cover" />
            </div>

            <div className={styles.bannerText}>
              <h1 className="text-2xl fw-bold mb-3">
                Vi hittar lägenheter som matchar dina önskemål. Hyresrätter på dina villkor.
              </h1>
              <p className="text-gray text-md">
                Hemvo bevakar Sveriges bostadsmarknad åt dig, så att du slipper. Få notiser så fort vi har ordnat en
                bostadsvisning enligt din hyresprofil.
              </p>
            </div>
          </div>
        </div>
      )}

      <main
        className={cx(
          styles.content,
          styles.authCard,
          "py-3 w-100 flex-column",
          pathsNoBanner.includes(pathname) && "px-3"
        )}
      >
        <div className={cx("m-xl-auto w-100", pathsNoBanner.includes(pathname) && "m-auto")}>
          {pathsNoBanner.includes(pathname) && (
            <Link
              href={"/"}
              className={cx(styles.authLogo, "d-block mb-3 mb-lg-0 top-0 z-1 text-center text-lg-start", {
                [styles.fixedLogo]: pathsNoBanner.includes(pathname),
                "d-none": pathname === "/login",
              })}
            >
              <img src={Hemvo.src} alt="Hemvo" className="d-inline-block object-fit-contain" />
            </Link>
          )}
          <div
            className={cx(
              styles.authContent,
              "mx-auto bg-white",
              pathsNoBanner.includes(pathname) && styles.authContentBeforeRegister
            )}
          >
            {!pathsNoBanner.includes(pathname) && (
              <Link href={"/"} className={cx(styles.authLogo, "d-block mb-3 mb-xl-4")}>
                <img src={Hemvo.src} alt="Hemvo" className="d-inline-block object-fit-contain" />
              </Link>
            )}
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
