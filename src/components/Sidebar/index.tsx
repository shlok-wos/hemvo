"use client";
import Link from "next/link";
import { HemvoColored } from "@/assets/images";
import { Card } from "../Card";
import {
  GearSix,
  GitFork,
  HandCoins,
  House,
  Notebook,
  Play,
  PlusSquare,
  Question,
  Queue,
  SignOut,
} from "@phosphor-icons/react";
import styles from "./Sidebar.module.css";
import { cx } from "class-variance-authority";
import { usePathname, useRouter } from "next/navigation";
import { Fragment } from "react";
import { Button } from "../Button";
import { X } from "@phosphor-icons/react";
import { deleteCookie } from "cookies-next";
import { resetData } from "@/reducers/staticData.reducer";
import { useAppDispatch } from "@/store";
import { PlayCircle } from "@phosphor-icons/react/dist/ssr";

export function Sidebar({ open, onClose }: SidebarProps) {
  const dispatch = useAppDispatch();

  const pathname = usePathname();
  const router = useRouter();
  const dashboardNavlinks = [
    // {
    //   id: 1,
    //   name: "Hem",
    //   icon: <House weight="duotone" size={22} className="me-2 flex-shrink-0" />,
    //   path: "/dashboard",
    // },
    {
      id: 1,
      name: "Hur funkar det?",
      icon: (
        <PlayCircle weight="duotone" size={22} className="me-2 flex-shrink-0" />
      ),
      path: "/dashboard/how-work",
    },
    {
      id: 2,
      name: "Bostadsprofil",
      icon: (
        <PlusSquare weight="duotone" size={22} className="me-2 flex-shrink-0" />
      ),
      path: "/dashboard/add-queue",
    },
    {
      id: 3,
      name: "Bostadspoäng",
      icon: (
        <PlusSquare weight="duotone" size={22} className="me-2 flex-shrink-0" />
      ),
      path: "/dashboard/overview",
    },
    {
      id: 4,
      name: "Bostadsköer",
      icon: <Queue weight="duotone" size={22} className="me-2 flex-shrink-0" />,
      path: "/dashboard/housing-queue",
    },
    {
      id: 5,
      name: "Kontrollpanel",
      icon: (
        <GitFork weight="duotone" size={22} className="me-2 flex-shrink-0" />
      ),
      path: "/dashboard/housing-control-panel",
    },
    {
      id: 6,
      name: "Medlemskap",
      icon: (
        <HandCoins size={22} weight="duotone" className="me-2 flex-shrink-0" />
      ),
      path: "/dashboard/subscription",
    },
    {
      id: 7,
      name: "Frågor och svar",
      icon: (
        <Question weight="duotone" size={22} className="me-2 flex-shrink-0" />
      ),
      path: "/dashboard/faq",
    },
    {
      id: 8,
      name: "Blogg",
      icon: (
        <Notebook weight="duotone" size={22} className="me-2 flex-shrink-0" />
      ),
      path: "/dashboard/blogspot",
    },
    {
      id: 9,
      name: "Inställningar",
      icon: (
        <GearSix weight="duotone" size={22} className="me-2 flex-shrink-0" />
      ),
      path: "/dashboard/settings",
    },
  ];
  const handleOnLogout = (event: any) => {
    event?.preventDefault;
    dispatch(resetData());
    deleteCookie("_token");
    router.push("/login");
  };

  return (
    <aside
      className={cx(styles.sidebar, {
        [styles.open]: open,
      })}
    >
      <Card
        className="h-100"
        contentClassName={"h-100 d-flex flex-column justify-content-between"}
      >
        <div className="d-flex align-items-center justify-content-between gap-2 mb-4">
          <Link href={"/dashboard"} onClick={onClose}>
            <img src={HemvoColored.src} alt="Hemvo" />
          </Link>

          <Button
            title="Stäng sidofältet"
            onClick={onClose}
            shape={"round"}
            className="d-lg-none p-1"
            icon={<X size={32} weight="duotone" />}
          />
        </div>

        <nav className={styles.nav}>
          <ul className="ps-0">
            {dashboardNavlinks.map((link: any, index: number) => {
              return (
                <Fragment key={`linkd-${index}`}>
                  <li>
                    <Link
                      href={link.path}
                      onClick={onClose}
                      className={cx(styles.navlink, {
                        [styles.active]: link.path === pathname,
                      })}
                    >
                      {link.icon} {link.name}
                    </Link>
                  </li>

                  {/* {link.id === 5 && (
                    <hr
                      style={{
                        border: "1px solid var(--lightgray)",
                      }}
                      className="mb-xl-4 mb-3"
                    />
                  )} */}
                </Fragment>
              );
            })}
          </ul>
        </nav>

        <Button
          variant={"danger"}
          onClick={handleOnLogout}
          className="text-center mt-auto d-flex justify-content-center bg-transparent border-0 align-items-center text-danger d-block mt-4"
        >
          <SignOut weight="duotone" size={22} className="me-2" />
          Logga ut
        </Button>
      </Card>
    </aside>
  );
}

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}
