import { ClassAttributes, ReactNode } from "react";
import { cx } from "class-variance-authority";
import styles from "./Card.module.css";

interface CardProps {
  active?: boolean;
  className?: string;
  interactive?: boolean;
  contentClassName?: string;
  children: ReactNode;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  active = false,
  interactive = false,
  contentClassName,
  ...rest
}: CardProps) => {
  return (
    <div
      className={cx(styles.card, className, {
        [styles.active]: active,
        [styles.interactive]: interactive,
      })}
      {...rest}
    >
      <div className={cx(styles.content, contentClassName)}>{children}</div>
    </div>
  );
};
