import * as ToggleSwitch from "@radix-ui/react-switch";
import styles from "./Switch.module.css";

export const Switch: React.FC<any> = ({
  id,
  name,
  label,
  checked,
  onChange,
  ...rest
}: SwitchProps) => {
  return (
    <div className="d-flex align-items-center">
      <ToggleSwitch.Root
        id={id}
        name={name}
        checked={checked}
        className={styles.switch}
        onCheckedChange={onChange}
        {...rest}
      >
        <ToggleSwitch.Thumb className={styles.thumb} />
      </ToggleSwitch.Root>
      {label && (
        <label htmlFor={id} className="fw-medium text-base ms-3">
          {label}
        </label>
      )}
    </div>
  );
};

interface SwitchProps {
  id?: string;
  name?: string;
  checked?: boolean;
  label?: string;
  onChange?: (checked: boolean) => void;
}
