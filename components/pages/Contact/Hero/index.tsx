"use client";

import Button from "@/components/Button";
import { PhoneNumberInput } from "@/components/PhoneInput";
import { TbSend } from "react-icons/tb";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const formSchema = z.object({
  phone: z.string().min(1, "Telefon numarası gereklidir"),
});

type FormValues = z.infer<typeof formSchema>;

const Hero = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues, event: any) => {
    setLoading(true);
    event.preventDefault();
    try {
      await emailjs.send(
        process.env.EMAILJS_SERVICE_ID as string,
        process.env.EMAILJS_TEMPLATE_ID as string,
        {
          phoneNumber: data.phone,
        },
        process.env.EMAILJS_PUBLIC_KEY as string
      );
      toast.success("Mesajınız gönderildi");
      reset();
    } catch (error) {
      toast.error("Bir hata oluştu");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container mt-4 flex items-center justify-center max-w-[1450px] relative overflow-hidden w-full gap-20 rounded-3xl h-[500px] max-lg:h-fit max-lg:py-16 bg-gradient-to-bl from-sky-50 to-sky-100">
      <div className="flex flex-col items-center justify-center mt-16 max-lg:mt-0 gap-6 w-[40%] max-lg:w-[90%] max-sm:w-full max-sm:px-4 max-md:relative max-md:top-10">
        <h1 className="flex flex-col text-nowrap max-lg:text-wrap text-5xl max-lg:text-4xl max-sm:text-3xl text-center items-center justify-center transition-all duration-300 font-extrabold gap-2">
          Sorularınız Mı Var?
          <span className="rounded-lg bg-primary text-center text-white px-4 py-2 max-sm:px-3 max-sm:py-1.5">
            Hemen Bize Ulaşın!
          </span>
        </h1>
        <p className="text-lg max-lg:text-base opacity-70 text-center leading-relaxed max-sm:text-sm">
          Takip Kira ile ilgili veya mülk yönetimi ile ilgili sorularınızı
          direkt sorun.
        </p>
        <div className="flex flex-col gap-3 w-full">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-3 max-sm:grid-cols-1 gap-2"
          >
            <div className="col-span-2 max-sm:col-span-1">
              <PhoneNumberInput
                placeholder="Telefon Numaranızı Giriniz"
                className="!bg-white"
                defaultCountry="TR"
                register={register}
                name="phone"
              />
              {errors.phone && (
                <span className="text-red-500 text-sm">
                  {errors.phone.message}
                </span>
              )}
            </div>
            <Button
              type="submit"
              loading={loading}
              className="h-full max-sm:h-12"
              leftIcon={<TbSend className="w-5 h-5" />}
            >
              Sizi Arayalım
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
