"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { cx } from "class-variance-authority";
import { ReactNode } from "react";
import { XCircle } from "@phosphor-icons/react/dist/ssr";
import styles from "./Modal.module.css";
import { Icons } from "@/Const/Icons";

export const Modal: React.FC<ModalProps> = ({
  title,
  showClose = false,
  size = "medium",
  trigger,
  open,
  closeOnOverlayClick = true,
  onOpenChange,
  children,
}: ModalProps) => {
  const containerClass = cx(styles.modalContainer, {
    [styles.sizeSmall]: size === "small",
    [styles.sizeMedium]: size === "medium",
  });

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <div className={containerClass}>
          <Dialog.Content
            className={styles.content}
            onInteractOutside={(e) => {
              !closeOnOverlayClick && e.preventDefault();
            }}
          >
            {title && (
              <Dialog.Title className={cx(styles.title, "text-xl")}>
                {title}
              </Dialog.Title>
            )}

            {showClose && (
              <Dialog.Close className={styles.close}>
                {Icons.iconClose}
              </Dialog.Close>
            )}

            <Dialog.Description />

            {children}
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

interface ModalProps {
  title?: string;
  showClose?: boolean;
  size?: "small" | "medium" | "large";
  trigger: ReactNode;
  open?: boolean;
  closeOnOverlayClick?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: ReactNode;
}
