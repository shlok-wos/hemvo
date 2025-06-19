"use client";
import { useState } from "react";
import * as Slider from "@radix-ui/react-slider";
import { cx } from "class-variance-authority";
import styles from "./Range.module.css";

export const Range: React.FC<any> = ({
  value,
  min,
  max,
  step,
  valuePrefix = "",
  valueSuffix = "",
  className,
  onChange,
  ...rest
}: RangeProps) => {
  // const [value, setValue] = useState<[number, number]>(
  //   controlledValue || [0, 0]
  // );

  // function handleValueChange(newValue: number[]) {
  //   setValue(newValue as [number, number]);
  //   onChange?.(newValue as [number, number]);
  // }
  return (
    <Slider.Root
      min={min}
      max={max}
      step={step}
      value={value}
      onValueChange={onChange}
      className={cx(styles.slider, className)}
      {...rest}
    >
      <Slider.Track className={styles.track}>
        <Slider.Range className={styles.selectedRange} />
      </Slider.Track>
      <Slider.Thumb className={styles.thumb}>
        <div className={styles.valuePopup}>
          {valuePrefix} {value && value[0]} {valueSuffix}
        </div>
      </Slider.Thumb>
      <Slider.Thumb className={styles.thumb}>
        <div className={styles.valuePopup}>
          {valuePrefix} {value && value[1]} {valueSuffix}
        </div>
      </Slider.Thumb>
    </Slider.Root>
  );
};

interface RangeProps {
  min?: number | undefined;
  max?: number | undefined;
  value?: [number, number];
  className?: string;
  onChange?: (value: [number, number]) => void;
  valueSuffix?: string;
  valuePrefix?: string;
  step?: number;
}
