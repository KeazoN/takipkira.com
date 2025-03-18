"use client";

import {
  CSSProperties,
  HTMLInputTypeAttribute,
  ReactNode,
  useCallback,
  useMemo,
} from "react";
import {
  FieldError,
  FieldPath,
  Path,
  RegisterOptions,
  UseFormClearErrors,
  useFormContext,
  UseFormRegister,
  UseFormSetError,
  UseFormSetValue,
} from "react-hook-form";
import { useMask } from "@react-input/mask";
import { IMaskInput } from "react-imask";
import { validateTcKimlik } from "@/utils/validateTcKimlik";

export type FormFieldProps<T extends Object> = {
  label?: string | ReactNode;
  icon?: ReactNode;
  type: HTMLInputTypeAttribute | "currency" | "identity" | "switch" | "iban";
  prefix?: string;
  className?: string;
  placeholder?: string;
  name: FieldPath<T>;
  readOnly?: boolean;
  minLength?: number;
  maxLength?: number;
  rows?: number;
  min?: number | string;
  max?: number;
  disabled?: boolean;
  layout?: "vertical" | "horizontal";
  style?: CSSProperties;
  options?: RegisterOptions<T, Path<T>>;
  register: UseFormRegister<T>;
  error?: any;
  valueAsNumber?: boolean;
  setValue?: UseFormSetValue<T>;
  setError?: UseFormSetError<T>;
  clearErrors?: UseFormClearErrors<T>;
};

export const Input = <T extends Object>({
  icon,
  label,
  type,
  className,
  placeholder,
  name,
  min,
  max,
  style,
  readOnly,
  register,
  layout,
  error,
  options,
  disabled,
  setError,
  setValue,
  clearErrors,
}: FormFieldProps<T>) => {
  const _className = useMemo(() => {
    if (className) {
      return className;
    }
    let defaultClassName =
      "py-3 rounded-full bg-softWhite border px-6 outline-none transition focus:ring focus:ring-primary w-full disabled:bg-gray-200 disabled:text-gray-500";
    if (error) {
      defaultClassName +=
        " border-red-500 animate-shake bg-red-500/15 text-red-500";
    } else {
      defaultClassName += " border-gray-200";
    }
    if (type === "currency") {
      defaultClassName += " pl-8 pr-4";
    }
    return defaultClassName;
  }, [className, error, type]);

  const { ref, ...rest } = useMemo(
    () => register(name, options),
    [register, name, options]
  );

  const InputContent = useCallback(() => {
    const _register = register(name, options);
    switch (type) {
      case "currency":
        return (
          <div className="relative w-full">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
              ₺
            </span>
            <IMaskInput
              mask={Number}
              scale={2}
              thousandsSeparator="."
              radix=","
              padFractionalZeros={true}
              normalizeZeros={true}
              className={`${_className} pl-8`}
              placeholder={placeholder}
              style={style}
              disabled={disabled}
              // {..._register}
              onAccept={(value) => {
                setValue && setValue(name, parseFloat(value) as any);
              }}
              max={max}
              min={undefined}
              unmask={true}
            />
          </div>
        );
      case "identity":
        const identityRef = useMask({
          mask: "___________",
          replacement: { _: /\d/ },
        });
        return (
          <input
            type="text"
            style={style}
            placeholder={placeholder}
            className={_className}
            disabled={disabled}
            ref={(el) => {
              if (el) {
                identityRef.current = el;
                ref(el);
              }
            }}
            {...rest}
            onChange={(e) => {
              e.target.value = e.target.value.replace(/[^0-9]/g, "");

              rest.onChange(e);

              if (!validateTcKimlik(e.target.value)) {
                setError?.(name, {
                  type: "manual",
                  message: "Geçersiz TC Kimlik Numarası",
                });
              } else {
                clearErrors?.(name);
              }
            }}
          />
        );
      case "switch":
        return (
          <>
            <input
              id={`input-${name}`}
              type="checkbox"
              className="sr-only  peer"
              style={style}
              placeholder={placeholder}
              disabled={disabled}
              readOnly={readOnly}
              {..._register}
            />
            <div className="relative w-10 h-6 bg-gray-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
          </>
        );
      case "iban":
        const ibanRef = useMask({
          mask: "TR__ ____ ____ ____ ____ ____ __",
          replacement: { _: /\d/ },
        });
        return (
          <input
            type="text"
            prefix="TR"
            style={style}
            ref={(el) => {
              if (el) {
                ibanRef.current = el;
                ref(el);
              }
            }}
            placeholder={placeholder}
            disabled={disabled}
            className={_className}
            {...rest}
          />
        );
      case "number":
        return (
          <input
            style={style}
            type={type}
            placeholder={placeholder}
            className={_className}
            readOnly={readOnly}
            disabled={disabled}
            {..._register}
            onChange={(e) => {
              register(name, {
                setValueAs(value) {
                  return Number(value);
                },
              });
            }}
          />
        );

      default:
        return (
          <input
            style={style}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            className={_className}
            min={min}
            max={max}
            // readOnly={readOnly}
            {..._register}
          />
        );
    }
  }, [options, style, placeholder]);

  return (
    <div className="flex flex-col gap-1 w-full">
      <label
        htmlFor={`input-${name}`}
        className={`relative flex gap-1 ${
          layout === "horizontal" ? "flex-row items-center" : "flex-col"
        } w-full`}
      >
        {label && <p className="px-4 text-sm font-medium">{label}</p>}
        <InputContent />
        <div className="w-7 h-7 flex items-center absolute left-4">{icon}</div>
      </label>
      {error && (
        <span className="error-message text-red-400 text-sm px-4">
          {error.message}
        </span>
      )}
    </div>
  );
};

// interface ICurrencyIconProps {
//   className?: string;
// }
// const CurrencyInput: React.FC<ICurrencyIconProps> = () => {

//   const formatCurrency = (value: string) => {
//     // Sayısal olmayan karakterleri temizle (sadece rakam ve virgül/kesir işareti bırak)
//     const numericValue = value.replace(/[^0-9,]/g, "").replace(",", ".");

//     // Geçerli bir sayı olup olmadığını kontrol et
//     if (numericValue === "" || isNaN(Number(numericValue))) return "";

//     // Sayıyı iki ondalık basamağa yuvarla ve Türk formatına uygun hale getir
//     return new Intl.NumberFormat("tr-TR", {
//       style: "decimal",
//       minimumFractionDigits: 2,
//       maximumFractionDigits: 2,
//     }).format(Number(numericValue));
//   };

//   return (
//     <Input
//       label="Amount"
//       type="currency"
//       name="amount"
//       placeholder="0.00"
//       register={register}
//       error={errors.amount}
//     />
//   );
// }
