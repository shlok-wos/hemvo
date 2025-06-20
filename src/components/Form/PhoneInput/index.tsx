"use client";
import { Select, Input, SelectOption } from "@/components";
import { useCountries } from "use-react-countries";
import formStyles from "../Form.module.css";
import styles from "./PhoneInput.module.css";

export const PhoneInput: React.FC<any> = ({
  id,
  type,
  label,
  name,
  onChange,
  value,
  errorMessage,
  selectedCountry,
  onCountryChange,
  ...rest
}: PhoneInputProps) => {
  const { countries } = useCountries();
  const sortedCountries = countries.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const defaultCountry = sortedCountries?.find((country) => {
    return country?.countryCallingCode === selectedCountry;
  });

  const defaultSelectedItem = defaultCountry
    ? {
        id: defaultCountry.name,
        value: defaultCountry.countryCallingCode,
        label: (
          <div className="d-flex text-sm text-nowrap fw-medium clamp align-items-center">
            <img
              src={defaultCountry.flags.png}
              alt={defaultCountry.name}
              width={20}
              height={20}
              className={
                "d-inline-block rounded-circle object-fit-cover flex-shrink-0"
              }
            />
            <span className="mx-2">({defaultCountry.countryCallingCode})</span>
          </div>
        ),
      }
    : null;

  return (
    <>
      {label && (
        <label htmlFor={id} className={formStyles.label}>
          {label}
        </label>
      )}

      <div className="position-relative">
        <Select
          defaultSelectedItem={defaultSelectedItem}
          parentClassName={styles.countryCode}
          triggerClassName={styles.countryCodeTrigger}
          menuClassName={styles.countryList}
          onChange={onCountryChange}
          selectedItem={
            selectedCountry
              ? countries?.find((country: any) => {
                  return country?.countryCallingCode == selectedCountry;
                })
              : undefined
          }
          options={sortedCountries.map(
            ({ name, flags, countryCallingCode }: any) => {
              return {
                id: name,
                value: countryCallingCode,
                label: (
                  <div className="d-flex text-sm text-nowrap fw-medium clamp align-items-center">
                    <img
                      src={flags.png}
                      alt={name}
                      width={20}
                      height={20}
                      className={
                        "d-inline-block rounded-circle object-fit-cover flex-shrink-0"
                      }
                    />
                    <span className="mx-2">({countryCallingCode})</span>
                    <span className={styles.countryName}>{name}</span>
                  </div>
                ),
              };
            }
          )}
        />
        <Input
          type={type}
          id={id}
          onChange={onChange}
          className={styles.phoneInput}
          value={value}
          name={name}
          {...rest}
        />
      </div>

      {errorMessage && <div className={formStyles.error}>{errorMessage}</div>}
    </>
  );
};

interface PhoneInputProps {
  type?: string;
  id?: string;
  label?: string;
  name?: string;
  value?: string;
  onChange?: any;
  errorMessage?: string;
  selectedCountry?: string;
  onCountryChange?: (selectedItem?: SelectOption) => void;
}
