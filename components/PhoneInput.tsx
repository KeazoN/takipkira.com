"use client";

import { InputHTMLAttributes, useState } from "react";
import PhoneInput from "react-phone-number-input";
//@ts-ignore
import type { E164Number, CountryCode } from "react-phone-number-input/core";
import "react-phone-number-input/style.css";
import {
  FieldError,
  FieldPath,
  UseFormRegister,
  UseFormSetError,
  UseFormClearErrors,
} from "react-hook-form";

interface IPhoneInputProps<T extends Object> {
  name?: FieldPath<T>;
  register?: UseFormRegister<T>;
  error?: FieldError;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (value: string | undefined) => void;
  defaultCountry?: string;
  setError?: UseFormSetError<T>;
  clearErrors?: UseFormClearErrors<T>;
  value?: string;
  className?: string;
}

export const PhoneNumberInput = <T extends Object>({
  name,
  register,
  error,
  label,
  placeholder,
  disabled,
  onChange,
  defaultCountry,
  className,
}: IPhoneInputProps<T>) => {
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>("");
  const [countryCode, setCountryCode] = useState<CountryCode | undefined>(
    defaultCountry as CountryCode
  );

  const registerProps = register && name ? register(name) : undefined;
  const { onChange: registerOnChange, ...rest } = registerProps || {};

  return (
    <div className="flex flex-col items-start gap-1">
      {label && <label className="px-4 text-sm font-medium">{label}</label>}
      <PhoneInput
        {...rest}
        value={phoneNumber}
        onChange={(value) => {
          setPhoneNumber(value);
          if (registerOnChange) {
            registerOnChange({ target: { value } });
          }
          if (onChange) {
            onChange(value);
          }
        }}
        placeholder={placeholder}
        onCountryChange={(country) => {
          setCountryCode(country as CountryCode);

          // Yeni ülke kodunu başa ekle
          if (phoneNumber && !phoneNumber.startsWith(`+${country}`)) {
            const newNumber = `+${country} ${phoneNumber}`;
            setPhoneNumber(newNumber);
            if (onChange) {
              onChange(newNumber);
            }
          }
        }}
        disabled={disabled}
        className={`rounded-full [&>input]:outline-none border px-6 outline-none transition focus:ring focus:ring-primary w-full disabled:bg-gray-200 disabled:text-gray-500 h-[50px] ${className}`}
        autoComplete="off"
        defaultCountry={defaultCountry as CountryCode}
      />
      {error && (
        <span className="error-message text-red-400 text-sm px-4">
          {error.message}
        </span>
      )}
    </div>
  );
};
