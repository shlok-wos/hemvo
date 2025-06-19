"use client";
import { ReactNode } from "react";
import { useSelect } from "downshift";
import { cx } from "class-variance-authority";
import { CaretDown } from "@phosphor-icons/react";
import styles from "./Select.module.css";

export const Select: React.FC<any> = ({
  options,
  label,
  onChange,
  placeholder,
  errorMessage,
  itemClassName,
  menuClassName,
  labelClassName,
  parentClassName,
  triggerClassName,
  defaultSelectedItem,
  selectedItem,
  customItemToString,
}: SelectProps) => {
  function itemToString(item: SelectOption | null) {
    return item ? item.value : "";
  }

  const { isOpen, getItemProps, getMenuProps, getLabelProps, highlightedIndex, getToggleButtonProps } = useSelect({
    items: options,
    defaultSelectedItem,
    itemToString: customItemToString ? customItemToString : itemToString,
    onSelectedItemChange: ({ selectedItem }) => {
      onChange && onChange(selectedItem);
    },
  });
  return (
    <div className={cx(parentClassName)}>
      {label && (
        <label className={cx(styles.label, labelClassName)} {...getLabelProps()}>
          {label}
        </label>
      )}
      <div className={"position-relative"}>
        <div className={cx(styles.select, triggerClassName)} {...getToggleButtonProps()}>
          {!selectedItem?.hasOwnProperty("countryCallingCode") ? (
            <div className="d-flex align-items-center gap-2">
              <span>{selectedItem ? selectedItem.label ?? selectedItem.value : placeholder}</span>
            </div>
          ) : (
            <div className="d-flex align-items-center gap-2">
              <img
                src={selectedItem.flags.png}
                alt={`Flag of ${selectedItem.name}`}
                width={20}
                height={20}
                className={"d-inline-block rounded-circle object-fit-cover flex-shrink-0"}
              />
              <span>
                {selectedItem ? selectedItem.countryCallingCode ?? selectedItem.countryCallingCode : placeholder}
              </span>
            </div>
          )}

          <CaretDown
            size={22}
            weight="duotone"
            className="ms-auto flex-shrink-0"
            style={{
              transition: ".3s transform",
              transform: isOpen ? "rotate(180deg)" : "rotate(0)",
            }}
          />
        </div>
        <ul
          className={cx(styles.menu, menuClassName, {
            [styles.open]: isOpen,
          })}
          {...getMenuProps()}
        >
          {options.map((item: any, index: number) => (
            <li
              key={`tra-${item.id}${index}`}
              {...getItemProps({
                item: item,
                index: index,
                className: cx(styles.item, itemClassName, {
                  [styles.highlighted]: highlightedIndex === index,
                  [styles.selected]: selectedItem?.hasOwnProperty("countryCallingCode")
                    ? selectedItem?.countryCallingCode === item.id
                    : selectedItem?.id === item.id,
                }),
              })}
            >
              {item.label ?? item.value}
            </li>
          ))}
        </ul>
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
      </div>
    </div>
  );
};

interface SelectProps {
  options: SelectOption[];
  label?: string;
  onChange?: (selectedItem?: SelectOption) => void;
  placeholder?: string;
  errorMessage?: string;
  itemClassName?: string;
  menuClassName?: string;
  labelClassName?: string;
  parentClassName?: string;
  triggerClassName?: string;
  defaultSelectedItem?: any;
  selectedItem?: any;
  customItemToString?: (item: SelectOption | null) => string;
}

export interface SelectOption {
  id: string;
  value: string;
  label?: any;
}
