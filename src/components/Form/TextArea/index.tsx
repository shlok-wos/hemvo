import { ChangeEventHandler, ReactNode } from "react";
import { cx } from "class-variance-authority";
import styles from "../Form.module.css";

export const TextArea: React.FC<any> = ({
  parentClassName,
  labelClassName,
  className,
  label,
  id,
  name,
  rows,
  cols,
  errorMessage,
  value,
  ...rest
}: TextAreaProps) => {
  const labelClass = cx(styles.label);
  const parentClass = cx(parentClassName);
  const inputClass = cx(styles.input, className);

  return (
    <div className={parentClass}>
      {label && (
        <label htmlFor={id} className={labelClass}>
          {label}
        </label>
      )}
      <textarea
        rows={rows}
        cols={cols}
        name={name}
        id={id}
        className={inputClass}
        value={value}
        {...rest}
      ></textarea>
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
    </div>
  );
};

interface TextAreaProps {
  id?: string;
  name?: string;
  label?: ReactNode;
  className?: string;
  placeholder?: string;
  rows?: number;
  cols?: number;
  value?: any;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  errorMessage?: string;
  labelClassName?: string;
  parentClassName?: string;
}
