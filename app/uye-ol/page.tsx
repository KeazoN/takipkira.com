"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Input } from "@/components/Input";
import { TbUserCircle } from "react-icons/tb";
import { motion } from "framer-motion";
import { Select } from "@/components/Select";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const onSubmit = (data: any) => {
    alert("Helal olsun emmioglu");
  };

  const watchedValues = watch();

  return (
    <motion.section
      className="relative h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container max-w-[1280px] mx-auto py-8">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-semibold flex items-center gap-2">
              <TbUserCircle className="w-9 h-9" /> Müşterimiz Olun
            </h2>
            <p className="text-gray-500">
              Müşterimiz olmak için lütfen aşağıdaki bilgileri doldurunuz.
            </p>
          </div>

          <form
            className="flex w-[40%] flex-col gap-6 h-full"
            key={currentStep}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Step
              number={1}
              title="Genel Bilgiler"
              isActive={currentStep === 1}
            >
              {currentStep === 1 && (
                <>
                  <Input
                    error={errors.name}
                    type="text"
                    name="name"
                    label="Adınız"
                    placeholder="Adınız"
                    register={register}
                  />
                  <Input
                    error={errors.surname}
                    type="text"
                    name="surname"
                    label="Soyadınız"
                    placeholder="Soyadınız"
                    register={register}
                  />
                  <Input
                    error={errors.email}
                    type="email"
                    name="email"
                    label="E-Posta Adresiniz"
                    placeholder="E-Posta Adresiniz"
                    register={register}
                  />
                </>
              )}
            </Step>

            <Step
              number={2}
              title="Kişisel Bilgiler"
              isActive={currentStep === 2}
            >
              {currentStep === 2 && (
                <>
                  <Select
                    name="city"
                    label="Hangi Şehirde Yaşıyorsunuz?"
                    options={[
                      { label: "Şehir Seçiniz", value: "", disabled: true },
                      { label: "Ankara", value: "Ankara" },
                      { label: "İstanbul", value: "İstanbul" },
                    ]}
                    register={register}
                    error={errors.city}
                  />
                  <Input
                    error={errors.phone}
                    type="tel"
                    name="phone"
                    label="Telefon Numaranız"
                    placeholder="Telefon Numaranız"
                    register={register}
                  />
                </>
              )}
            </Step>

            <Step number={3} title="Onayla" isActive={currentStep === 3}>
              {currentStep === 3 && (
                <>
                  <p>
                    <strong>Adınız:</strong> {watchedValues.name}
                  </p>
                  <p>
                    <strong>Soyadınız:</strong> {watchedValues.surname}
                  </p>
                  <p>
                    <strong>E-Posta Adresiniz:</strong> {watchedValues.email}
                  </p>
                  <p>
                    <strong>Şehir:</strong> {watchedValues.city}
                  </p>
                  <p>
                    <strong>Telefon Numaranız:</strong> {watchedValues.phone}
                  </p>
                </>
              )}
            </Step>

            <div className="mt-6">
              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="w-full bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  İleri
                </button>
              ) : (
                <button
                  type="submit"
                  className="w-full bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Onayla
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-[100px] h-full bg-primary"></div>
    </motion.section>
  );
}

function Step({
  number,
  title,
  children,
  isActive,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
  isActive: boolean;
}) {
  return (
    <motion.div
      className="flex items-stretch flex-col gap-4 h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-4 relative h-full">
        <div
          className={`w-8 h-8 flex items-center font-bold justify-center ${
            isActive ? "bg-primary text-white" : "bg-gray-200 text-gray-600"
          } rounded-full`}
        >
          {number}
        </div>
        <h3
          className={`text-xl font-medium ${!isActive ? "text-gray-600" : ""}`}
        >
          {title}
        </h3>
        {/* <div
          className={`absolute left-4 ${
            isActive ? "top-8 !h-[calc(100vh-65vh)]" : "top-8"
          } w-0.5 h-full bg-gray-200 transition-colors duration-300`}
        ></div> */}
      </div>
      {children}
    </motion.div>
  );
}
