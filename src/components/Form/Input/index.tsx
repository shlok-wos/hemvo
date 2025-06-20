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
import { Eye, EyeClosed, Minus, Plus } from "@phosphor-icons/react";
import styles from "../Form.module.css";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      icon,
      postIcon,
      postText,
      name,
      type = "text",
      label,
      onChange,
      className,
      placeholder,
      labelClassName,
      parentClassName,
      iconClassCommon,
      postIconClassCommon,
      secInput,
      errorMessage = false,
      counter = false,
      ...rest
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const [counterValue, setCounterValue] = useState(0);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    const inputType =
      type === "password" ? (showPassword ? "text" : "password") : type;

    const handleIncrement = () => {
      setCounterValue((prev) => prev + 1);
      onChange?.({ target: { value: String(counterValue + 1) } } as any);
    };

    const handleDecrement = () => {
      setCounterValue((prev) => {
        const newVal = Math.max(0, prev - 1);
        onChange?.({ target: { value: String(newVal) } } as any);
        return newVal;
      });
    };

    const parentClass = cx(parentClassName);
    const inputClass = cx(styles.input, className, {
      [styles.hasIcon]: icon || counter,
      [styles.haspostIcon]: postIcon || counter,
      [styles.hasPasswordIcon]: type === "password",
      [styles.secondaryInput]: secInput,
    });
    const labelClass = cx(styles.label);
    const iconClass = cx(styles.icon);
    const postIconClass = cx(styles.postIcon);

    return (
      <div className={parentClass}>
        {label && (
          <label htmlFor={id} className={labelClass}>
            {label}
          </label>
        )}
        <div className={"position-relative d-flex align-items-center"}>
          {(icon || counter) && (
            <button
              type="button"
              onClick={counter ? handleDecrement : undefined}
              className={cx(iconClass, iconClassCommon, "me-2")}
              disabled={counter && counterValue <= 0}
            >
              {counter ? <Minus weight="regular" size={22} /> : icon}
            </button>
          )}

          <input
            id={id}
            name={name}
            type={inputType}
            className={inputClass}
            onChange={onChange}
            placeholder={placeholder}
            ref={ref}
            value={counter ? counterValue : undefined}
            readOnly={counter}
            {...rest}
          />

          {(postIcon || counter) && (
            <button
              type="button"
              onClick={counter ? handleIncrement : undefined}
              className={cx(
                postIconClass,
                postIconClassCommon,
                "d-flex align-items-center"
              )}
            >
              {counter ? <Plus weight="regular" size={22} /> : postIcon}
              {postText}
            </button>
          )}

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
  secInput?: boolean;
  name?: string;
  icon?: ReactNode;
  postIcon?: ReactNode;
  postText?: string;
  label?: ReactNode;
  className?: string;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  errorMessage?: string;
  labelClassName?: string;
  parentClassName?: string;
  iconClassCommon?: string;
  postIconClassCommon?: string;
  type?: HTMLInputTypeAttribute;
  counter?: boolean;
}
