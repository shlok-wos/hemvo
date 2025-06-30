"use client";
import { ReactNode } from "react";
import { Button, Card, Sidebar } from "@/components";
import { ArrowRight } from "@phosphor-icons/react";
import styles from "./page.module.css";
import { List } from "@phosphor-icons/react";
import { useDashboardLayout } from "@/hooks/user/dashboardLayout.hook";
import Image from "next/image";
import { HemvoColored } from "@/assets/images";

export default function Layout({ children }: { children: ReactNode }) {
  const {
    sidebarOpen,
    setSidebarOpen,
    subscriptionPage,
    isLoader,
    isActivate,
  } = useDashboardLayout();

  return (
    <div className={styles.dashboard}>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      {/* <div className="m-2 m-sm-3 ms-lg-0"> */}
      <main className={styles.content}>
        {sidebarOpen && (
          <div
            className={styles.overlay}
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}
        <header className="d-lg-none ">
          <Card
            className="p-3"
            contentClassName="d-flex align-items-center  justify-content-between gap-4"
          >
            <Button
              title="Öppna sidofältet"
              onClick={() => setSidebarOpen(true)}
              shape={"round"}
              className="d-lg-none p-1"
              icon={<List size={32} weight="duotone" />}
            />
            <Image src={HemvoColored} height={48} width={115} alt="logo" />
          </Card>
        </header>

        {!isActivate && !subscriptionPage && !isLoader && (
          <Card
            contentClassName="d-flex flex-wrap gap-3 align-items-center justify-content-sm-between justify-content-center"
            className="header-space"
          >
            <h5 className="text-lg fw-medium">Ditt konto är inte aktivt.</h5>
            <Button
              href="/dashboard/subscription"
              icon={<ArrowRight weight="duotone" className="ms-2" />}
              iconPosition="end"
              className="flex-fill flex-sm-grow-0"
            >
              Aktivera konto
            </Button>
          </Card>
        )}

        {children}
      </main>
      {/* </div> */}
    </div>
  );
}
