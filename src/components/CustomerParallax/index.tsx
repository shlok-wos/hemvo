import { customerBubbles } from "@/static";
import { cx } from "class-variance-authority";
import styles from "./CustomerParallax.module.css";

export const CustomerParallax: React.FC<any> = () => {
  return (
    <>
      <div
        id="reviews"
        className="d-flex d-lg-block flex-wrap justify-content-center gap-3 gap-sm-4 gap-lg-0"
      >
        {customerBubbles.map((b: any, idx: number) => {
          return (
            <img
              src={b.image.src}
              alt="Hemvo"
              className={cx(
                styles[`bubble-${idx + 1}`],
                styles.bubblesImg,
                "flex-fill"
              )}
              key={`imas-${idx}`}
            />
          );
        })}
      </div>
    </>
  );
};
