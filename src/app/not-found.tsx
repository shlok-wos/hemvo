import { Header } from "@/components";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Header />
      <div
        className="text-center bg-accent d-flex items-center justify-content-center flex-column"
        style={{
          minHeight: "calc(100dvh - var(--header-height))",
        }}
      >
        <div className="container">
          <h2 className="text-2xl mb-2">Kommer snart</h2>
          <p className="text-lg mb-3">Vi jobbar hårt för att ge dig något fantastiskt. Håll ögonen öppna!</p>

          <Link href={"/"} className="link-highlight fw-bold">
            Gå tillbaka till hemmet
          </Link>
        </div>
      </div>
    </>
  );
}
