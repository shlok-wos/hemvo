import { ArrowsClockwise } from "@phosphor-icons/react/dist/ssr";
import styles from "./Loader.module.css";

export const Loader: React.FC<any> = ({ size = 80, show = false }: { size?: number; show?: boolean }) => {
  return (
    <>
      {show && (
        <div className={styles.loader}>
          <ArrowsClockwise size={size} weight="bold" color="white" />
        </div>
      )}
    </>
  );
};
