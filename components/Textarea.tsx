"use client";

import "@/lib/zodErrorMap";
import { useMemo } from "react";
import { FieldError, FieldPath, UseFormRegister } from "react-hook-form";

export type FormFieldProps<T extends Object> = {
  name: FieldPath<T>;
  label?: string;
  placeholder?: string;
  className?: string;
  rows?: number;
  disabled?: boolean;
  register: UseFormRegister<T>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
};

export const Textarea = <T extends Object>({
  label,
  className,
  placeholder,
  rows = 3,
  name,
  disabled,
  register,
  error,
  valueAsNumber,
}: FormFieldProps<T>) => {
  const _className = useMemo(() => {
    if (className) {
      return className;
    }
    let defaultClassName =
      "py-3 rounded-xl resize-none bg-softWhite border px-6 outline-none h-[150px] transition focus:ring focus:ring-primary w-full disabled:bg-gray-200 disabled:text-gray-500";
    if (error) {
      defaultClassName +=
        " border-red-500 animate-shake bg-red-500/15 text-red-500";
    } else {
      defaultClassName += " border-gray-200";
    }
    return defaultClassName;
  }, [className, error]);
  return (
    <div className="flex flex-col items-start gap-3 w-full">
      {label && <label className="px-4">{label}</label>}
      <div className="relative w-full">
        <textarea
          placeholder={placeholder}
          className={_className}
          {...register(name, { valueAsNumber, disabled })}
          rows={rows}
        />

        {/* <div className="w-7 h-7 flex items-center absolute left-4">{icon}</div> */}
      </div>
      {error && (
        <span className="error-message text-red-400 text-sm px-4">
          {error.message}
        </span>
      )}
    </div>
  );
};
