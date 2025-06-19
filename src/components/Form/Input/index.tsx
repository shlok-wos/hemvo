"use client";
import {
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
  useState,
} from "react";
import { cx } from "class-variance-authority";
import { Eye, EyeClosed } from "@phosphor-icons/react";
import styles from "../Form.module.css";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      icon,
      name,
      type = "text",
      label,
      onChange,
      className,
      placeholder,
      labelClassName,
      parentClassName,
      iconClassCommon,
      errorMessage = false,
      ...rest
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    const inputType =
      type === "password" ? (showPassword ? "text" : "password") : type;

    const parentClass = cx(parentClassName);
    const inputClass = cx(styles.input, className, {
      [styles.hasIcon]: icon,
      [styles.hasPasswordIcon]: type === "password",
    });
    const labelClass = cx(styles.label);
    const iconClass = cx(styles.icon);

    return (
      <div className={parentClass}>
        {label && (
          <label htmlFor={id} className={labelClass}>
            {label}
          </label>
        )}
        <div className={"position-relative"}>
          {icon && <div className={cx(iconClass, iconClassCommon)}>{icon}</div>}
          <input
            id={id}
            name={name}
            type={inputType}
            className={inputClass}
            onChange={onChange}
            placeholder={placeholder}
            ref={ref}
            {...rest}
          />
          {type === "password" && (
            <button
              type="button"
              className={cx(styles.icon, styles.passwordToggle)}
              onClick={togglePasswordVisibility}
              title={showPassword ? "Dölj lösenord" : "Visa lösenord"}
            >
              {showPassword ? (
                <Eye size={20} weight="duotone" />
              ) : (
                <EyeClosed size={20} weight="duotone" />
              )}
            </button>
          )}
        </div>

        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
      </div>
    );
  }
);

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  name?: string;
  icon?: ReactNode;
  label?: ReactNode;
  className?: string;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  errorMessage?: string;
  labelClassName?: string;
  parentClassName?: string;
  iconClassCommon?: string;
  type?: HTMLInputTypeAttribute;
}
