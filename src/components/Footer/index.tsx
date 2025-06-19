import Link from "next/link";
import {
  FacebookLogo,
  InstagramLogo,
  XLogo,
} from "@phosphor-icons/react/dist/ssr";
import { cx } from "class-variance-authority";
import styles from "./Footer.module.css";

export const Footer: React.FC<any> = () => {
  return (
    <footer className="bg-accent">
      <div className="container">
        <div
          className={cx(
            styles.footerGtrid,
            "d-grid space-top-sm space-bottom-sm w-100"
          )}
        >
          <div className="w-100">
            <h4 className="text-lg mb-4">Produkt</h4>

            <div>
              <Link
                href={"/"}
                className="d-flex text-gray fw-medium text-decoration-none text-md mb-3 link"
              >
                Hitta lägenhet
              </Link>
              <Link
                href={"/"}
                className="d-flex text-gray fw-medium text-decoration-none text-md mb-3 link"
              >
                Prissättning
              </Link>
              <Link
                href={"/"}
                className="d-flex text-gray fw-medium text-decoration-none text-md mb-3 link"
              >
                Hyra ut en lägenhet
              </Link>
            </div>
          </div>
          <div className="w-100">
            <h4 className="text-lg mb-4">Företag</h4>

            <div>
              <Link
                href={"/#reviews"}
                className="d-flex text-gray fw-medium text-decoration-none text-md mb-3 link"
              >
                Kundomdömen
              </Link>
              <Link
                href={"/#faq"}
                className="d-flex text-gray fw-medium text-decoration-none text-md mb-3 link"
              >
                Vanliga frågor
              </Link>
              <Link
                href={"/"}
                className="d-flex text-gray fw-medium text-decoration-none text-md mb-3 link"
              >
                Support
              </Link>
              <Link
                href={"/contact"}
                className="d-flex text-gray fw-medium text-decoration-none text-md mb-3 link"
              >
                Kontakt
              </Link>
            </div>
          </div>
          <div className="w-100">
            <h4 className="text-lg mb-4">Information</h4>

            <div>
              <Link
                href={"/#assistance"}
                className="d-flex text-gray fw-medium text-decoration-none text-md mb-3 link"
              >
                Hyreshjälpen
              </Link>
            </div>
          </div>
          <div className="w-100">
            <h4 className="text-lg mb-4">Villkor</h4>

            <div>
              <Link
                href={"/terms-and-conditions"}
                className="d-flex text-gray fw-medium text-decoration-none text-md mb-3 link"
              >
                Användarvillkor
              </Link>
              <Link
                href={"/privacy-policy"}
                className="d-flex text-gray fw-medium text-decoration-none text-md mb-3 link"
              >
                Integritetspolicy
              </Link>
              <Link
                href={"/cookies"}
                className="d-flex text-gray fw-medium text-decoration-none text-md mb-3 link"
              >
                Cookies
              </Link>
            </div>
          </div>
          <div className="w-100">
            <h4 className="text-lg mb-4">Sociala medier</h4>

            <div>
              <Link
                href={"https://www.facebook.com/profile.php?id=61563910765707"}
                target="_blank"
                className="d-flex align-items-center text-gray fw-medium text-decoration-none text-md mb-3 link"
              >
                <FacebookLogo
                  color="currentcolor"
                  size={24}
                  className="me-2"
                  weight="duotone"
                />
                &nbsp; Facebook
              </Link>
              <Link
                href={"https://www.instagram.com/flatquest.se"}
                target="_blank"
                className="d-flex align-items-center text-gray fw-medium text-decoration-none text-md mb-3 link"
              >
                <InstagramLogo
                  color="currentcolor"
                  size={24}
                  className="me-2"
                  weight="duotone"
                />
                &nbsp; Instagram
              </Link>
              <Link
                href={"https://x.com/FlatQuestSE"}
                target="_blank"
                className="d-flex align-items-center text-gray fw-medium text-decoration-none text-md mb-3 link"
              >
                <XLogo
                  color="currentcolor"
                  size={24}
                  className="me-2"
                  weight="duotone"
                />
                &nbsp; Twitter
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          <p className="fw-medium justify-content-center d-flex">
            <strong className="font-primary text-dark mx-1">Hemvo.se</strong>
             All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
