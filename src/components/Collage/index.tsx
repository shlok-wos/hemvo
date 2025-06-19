import { cx } from "class-variance-authority";
import {
  Collage2,
  Collage3,
  Collage4,
  Collage5,
  Collage6,
} from "@/assets/images";
import styles from "./Collage.module.css";

export const Collage: React.FC<any> = () => {
  return (
    <div
      className={cx(
        [styles.collage],
        "justify-content-center justify-content-sm-end"
      )}
    >
      <div className={cx(styles.collageItem, "d-none d-sm-block")}></div>
      <img
        className={cx(styles.collageItem, "radius-md object-fit-cover")}
        src={Collage2.src}
        alt="Hemvo"
        width={230}
        height={100}
      />
      <img
        className={cx(
          styles.collageItem,
          styles.collageItemFull,
          "radius-md object-fit-cover"
        )}
        src={Collage3.src}
        alt="Hemvo"
        width={230}
        height={100}
      />
      <img
        className={cx(styles.collageItem, "radius-md object-fit-cover")}
        src={Collage4.src}
        alt="Hemvo"
        width={230}
        height={100}
      />
      <img
        className={cx(
          styles.collageItem,
          styles.collageItemFull,
          "radius-md object-fit-cover"
        )}
        src={Collage5.src}
        alt="Hemvo"
        width={230}
        height={100}
      />
      <img
        className={cx(styles.collageItem, "radius-md object-fit-cover")}
        src={Collage6.src}
        alt="Hemvo"
        width={230}
        height={100}
      />
    </div>
  );
};

