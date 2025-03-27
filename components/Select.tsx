"use client";

import "@/lib/zodErrorMap";
import { TbChevronDown } from "react-icons/tb";
import { FieldError, FieldPath, UseFormRegister } from "react-hook-form";
import { Merge, FieldErrorsImpl } from "react-hook-form";

type Option = {
  value: string | number;
  label: string;
  disabled?: boolean;
};

export type FormFieldProps<T extends Object> = {
  name: FieldPath<T>;
  options: Option[];
  disabled?: boolean;
  label?: string;
  placeholder?: string;
  className?: string;
  register: UseFormRegister<T>;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
};

export const Select = <T extends Object>({
  name,
  label,
  className,
  placeholder,
  options,
  disabled,
  register,
  error,
}: FormFieldProps<T>) => {
  return (
    <div className="flex flex-col items-start gap-1 relative w-full">
      {label && <label className="px-4 text-sm font-medium">{label}</label>}
      <div className="relative w-full">
        <select
          className={`py-3 rounded-full bg-softWhite border px-6 outline-none transition focus:ring focus:ring-primary w-full appearance-none ${className}`}
          disabled={disabled}
          {...register(name, {
            setValueAs: (value) =>
              isNaN(Number(value)) ? value : Number(value),
          })}
        >
          {placeholder && (
            <option value="" disabled defaultChecked hidden>
              {placeholder}
            </option>
          )}
          {options.map((option, index) => (
            <option key={index} disabled={option.disabled} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
          <TbChevronDown className="h-5 w-5 text-gray-500" />
        </div>
      </div>
      {error && (
        <span className="error-message text-red-400 text-sm px-4">
          {error?.message?.toString()}
        </span>
      )}
    </div>
  );
};
