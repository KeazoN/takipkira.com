"use client";

import { Input } from "@/components/Input";
import { TbUserCircle } from "react-icons/tb";
import { useForm } from "react-hook-form";

export default function RegisterPage() {
  const {
    register,
    formState: { errors },
  } = useForm();
  return (
    <section className="relative h-screen">
      <div className="container max-w-[1280px] mx-auto py-8">
        <div className="flex flex-col gap-10">
          <div className="flex  flex-col gap-3">
            <h2 className="text-3xl font-semibold flex items-center gap-2">
              <TbUserCircle className="w-9 h-9" /> Müşterimiz Olun
            </h2>
            <p className="text-gray-500">
              Müşterimiz olmak için lütfen aşağıdaki bilgileri doldurunuz.
            </p>
          </div>

          <div className="flex w-[40%] flex-col gap-6 h-full">
            <div className="flex items-stretch flex-col gap-4 h-full">
              <div className="flex items-center gap-4 relative h-full">
                <div className="w-8 h-8 flex items-center font-bold justify-center bg-primary text-white rounded-full">
                  1
                </div>
                <h3 className="text-xl font-medium">Genel Bilgiler</h3>
                <div className="absolute left-4 top-8 w-0.5 h-[calc(100vh-55vh)] bg-gray-200 transition-colors duration-300"></div>
              </div>
              <form className="flex flex-col gap-4 pl-12">
                <div className="grid grid-cols-2 gap-4">
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
                </div>
                <Input
                  error={errors.email}
                  type="email"
                  name="email"
                  label="E-Posta Adresiniz"
                  placeholder="E-Posta Adresiniz"
                  register={register}
                />
                <Input
                  error={errors.identity}
                  type="identity"
                  name="identity"
                  label="T.C. Kimlik Numaranız"
                  placeholder="T.C. Kimlik Numaranız"
                  register={register}
                />
              </form>
            </div>
            <div className="flex items-center gap-4 mt-6 relative">
              <div className="w-8 h-8 flex items-center font-bold justify-center bg-gray-200 text-gray-600 rounded-full">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-600">
                Kişisel Bilgiler
              </h3>
              <div className="absolute left-4 top-8 w-0.5 h-full bg-gray-200 transition-colors duration-300"></div>
            </div>
            <div className="flex items-center gap-4 mt-6 relative">
              <div className="w-8 h-8 flex items-center font-bold justify-center bg-gray-200 text-gray-600 rounded-full">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-600">Onayla</h3>
              <div className="absolute left-4 bottom-8 w-0.5 h-full bg-gray-200 transition-colors duration-300"></div>
            </div>
            <button className="w-full bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors mt-6">
              İleri
            </button>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-[100px] h-full bg-primary"></div>
    </section>
  );
}
