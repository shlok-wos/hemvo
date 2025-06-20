import React from "react";
import styles from "./CheckBox.module.css";
import clsx from "clsx";

type CustomCheckboxProps = {
  id: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  backgroundColor?: string;
  tickColor?: string;
  size?: number;
  label?: string;
};

export const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  id,
  checked,
  onChange,
  backgroundColor = "#007bff",
  tickColor = "#fff",
  size = 20,
  label = "",
}) => {
  const customStyle = {
    "--checkbox-bg": backgroundColor,
    "--checkbox-tick": tickColor,
    "--checkbox-size": `${size}px`,
  } as React.CSSProperties;

  return (
    <label
      htmlFor={id}
      className={clsx(styles.checkboxWrapper, "text-md fw-medium text-gray")}
      style={customStyle}
    >
      <input
        type="checkbox"
        id={id}
        className={styles.hiddenCheckbox}
        checked={checked}
        onChange={onChange}
      />
      <span className={styles.customCheckbox}></span>
      {label && <span className={styles.labelText}>{label}</span>}
    </label>
  );
};
