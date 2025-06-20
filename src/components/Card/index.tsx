"use client";
import { useState, ReactNode } from "react";
import { cx } from "class-variance-authority";
import styles from "./Card.module.css";

interface CardProps {
  active?: boolean;
  className?: string;
  interactive?: boolean;
  contentClassName?: string;
  children: ReactNode;
  collapsCard?: boolean;
  title?: ReactNode; // Optional header
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  active = false,
  interactive = false,
  contentClassName,
  collapsCard = false,
  title,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(collapsCard);

  const handleToggle = () => {
    if (collapsCard) setIsCollapsed((prev) => !prev);
  };

  return (
    <div
      className={cx(styles.card, className, {
        [styles.active]: active,
        [styles.interactive]: interactive || collapsCard,
      })}
    >
      {collapsCard && (
        <div
          className={cx(styles.header, "cursor-pointer")}
          onClick={handleToggle}
        >
          {title ?? <strong>Toggle Card</strong>}
        </div>
      )}

      {!isCollapsed && (
        <div className={cx(styles.content, contentClassName)}>{children}</div>
      )}
    </div>
  );
};
