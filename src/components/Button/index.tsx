import { VariantProps, cva, cx } from "class-variance-authority";
import { ReactNode, Ref, forwardRef } from "react";
import styles from "./Button.module.css";
import Link, { LinkProps } from "next/link";

const btn = cva([styles.btn], {
  variants: {
    variant: {
      primary: [styles.primary],
      accent: [styles.accent],
      danger: [styles.danger],
    },
    full: {
      true: [styles.full],
    },
    shape: {
      round: [styles.round],
    },
    size: {
      small: [styles.small],
      large: [styles.large],
    },
  },
  compoundVariants: [
    {
      shape: "round",
      className: [styles.shape],
    },
  ],
  defaultVariants: {
    full: false,
    size: "large",
    variant: "primary",
  },
});

type ButtonProps = Omit<React.ComponentPropsWithoutRef<"button">, "onToggle"> & {
  href?: string;
  target?: string,
  disabled?: boolean;
  icon?: ReactNode;
  children?: ReactNode;
  iconPosition?: "start" | "end";
} & VariantProps<typeof btn>;

export const Button = forwardRef(
  (
    {
      className,
      href,
      variant,
      full,
      shape,
      iconPosition = "start",
      icon,
      size,
      target,
      children,
      onClick,
      ...props
    }: ButtonProps,
    ref: Ref<HTMLElement>
  ) => {
    const classes = cx(btn({ variant, full, shape, size }), className);

    if (href) {
      const elementRef = ref as Ref<HTMLAnchorElement>;

      const linkProps: LinkProps = {
        href,
        target,
        ...props,
      } as LinkProps;

      return (
        <Link {...linkProps} className={classes} ref={elementRef}>
          {icon && iconPosition === "start" && (
            <span
              className={cx(styles.icon, {
                "me-2": !shape,
              })}
            >
              {icon}
            </span>
          )}
          {children}
          {icon && iconPosition === "end" && (
            <span
              className={cx(styles.icon, {
                "ms-2": !shape,
              })}
            >
              {icon}
            </span>
          )}
        </Link>
      );
    }

    const elementRef = ref as Ref<HTMLButtonElement>;

    return (
      <button className={classes} onClick={onClick} ref={elementRef} {...props}>
        {icon && iconPosition === "start" && (
          <span
            className={cx(styles.icon, {
              "me-2": !shape,
            })}
          >
            {icon}
          </span>
        )}
        {children}
        {icon && iconPosition === "end" && (
          <span
            className={cx(styles.icon, {
              "ms-2": !shape,
            })}
          >
            {icon}
          </span>
        )}
      </button>
    );
  }
);
