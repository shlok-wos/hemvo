"use client";
import { useState } from "react";
import Link from "next/link";
import { Hemvo } from "@/assets/images";
import { Button } from "@/components";
import { House } from "@phosphor-icons/react";
import { cx } from "class-variance-authority";
import { SignIn } from "@phosphor-icons/react";
import { usePathname, useRouter } from "next/navigation";
import styles from "./Header.module.css";
import clsx from "clsx";

export const Header: React.FC<any> = () => {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleClickDashboard = () => {
    router.push("/dashboard");
  };
  return (
    <>
      <header className={cx(styles.header)}>
        <div className="container">
          <div className="d-flex align-items-center justify-content-between gap-xs">
            <Link href={"/"} className="" onClick={() => setShow(false)}>
              <img
                src={Hemvo.src}
                alt="Hemvo"
                className={cx(styles.headerLogo)}
              />
            </Link>

            <div
              className={cx(
                styles.headerMenu,
                "d-flex align-items-center gap-4 bg-dark  ",
                {
                  [styles.headerMenuShow]: show,
                }
              )}
            >
              <Link
                href={"/"}
                className={cx("link p-2 text-decoration-none fw-bold", {
                  "link-highlight": pathname === "/",
                })}
                onClick={() => setShow(false)}
              >
                Hem
              </Link>
              <Link
                href={"/about-us"}
                className={cx("link p-2 text-decoration-none fw-bold", {
                  "link-highlight": pathname === "/about-us",
                })}
                onClick={() => setShow(false)}
              >
                Om oss
              </Link>
              <Link
                href={"/blog"}
                className={cx("link p-2 text-decoration-none fw-bold", {
                  "link-highlight": pathname === "/blog",
                })}
                onClick={() => setShow(false)}
              >
                Blogg
              </Link>

              <Link
                href={"/queues"}
                className={cx("link p-2 text-decoration-none fw-bold", {
                  "link-highlight": pathname === "/queues",
                })}
                onClick={() => setShow(false)}
              >
                Köer
              </Link>
              <Link
                href={"/faq"}
                className={cx("link p-2 text-decoration-none fw-bold", {
                  "link-highlight": pathname === "/faq",
                })}
                onClick={() => setShow(false)}
              >
                Vanliga frågor
              </Link>
              <Link
                href={"/"}
                className={cx("link p-2 text-decoration-none fw-bold", {
                  "link-highlight": pathname === "/family-account",
                })}
                onClick={() => setShow(false)}
              >
                Hyr ut med hemvo
              </Link>
              {/* <Link
              href={"/plans"}
              className={cx("link p-2 text-decoration-none fw-bold", {
                "link-highlight": pathname === "/plans",
              })}
              onClick={() => setShow(false)}
            >
              Medlemskap
            </Link> */}
              <Button
                href="/login"
                variant={"accent"}
                icon={<SignIn size={20} weight="duotone" />}
                className={clsx(styles.loginBtn, "d-lg-none")}
                onClick={() => setShow(false)}
              >
                Logga in
              </Button>
              <Button
                href="/create-account"
                icon={<House size={20} weight="duotone" />}
                className={clsx(styles.becomeMember, "d-lg-none")}
                onClick={() => setShow(false)}
              >
                Bli medlem
              </Button>
            </div>

            <div className="d-lg-flex align-items-center gap-3 d-none ">
              <Button
                href="/login"
                variant={"accent"}
                className={clsx(styles.fillBtn)}
                icon={<SignIn size={20} weight="duotone" />}
                onClick={() => setShow(false)}
              >
                Logga in
              </Button>
              <Button
                href="/create-account"
                icon={<House size={20} weight="duotone" />}
                className={clsx(styles.transparentBtn)}
                // onClick={() => setShow(false)}
                onClick={() => handleClickDashboard()}
              >
                Bli medlem
              </Button>
            </div>
            <button
              className={cx(
                styles.toggleIconWrap,
                "d-flex flex-column justify-content-center bg-transparent d-lg-none",
                {
                  [styles.activeIcon]: show,
                }
              )}
              onClick={() => setShow(!show)}
            >
              <span className="d-block"></span>
              <span className="d-block"></span>
              <span className="d-block"></span>
            </button>
          </div>
        </div>
      </header>
      <div
        className={cx(
          styles.HeaderBottom,
          "bg-theme d-flex justify-content-center align-items-center text-white"
        )}
      >
        <p className="text-md fw-medium text-center p-2">
          Anlita ett team som söker din lägenhet från 25 kr samtidigt som du får
          tillgång till våra bostadsköer.
        </p>
      </div>
    </>
  );
};
