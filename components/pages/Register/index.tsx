"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/Input";
import { Textarea } from "@/components/Textarea";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { TbArrowLeft, TbBell, TbCash, TbStorm } from "react-icons/tb";

const formSchema = z.object({
  fullName: z.string().min(3, "Ad soyad en az 3 karakter olmalıdır"),
  phone: z.string().min(11, "Telefon numarası en az 11 karakter olmalıdır"),
  email: z.string().email("Geçerli bir e-posta adresi giriniz"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const Register = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStep, setFormStep] = useState(0);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isValid },
    watch,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    setIsSubmitting(false);
  };

  const nextStep = async () => {
    const fields = formStep === 0 ? ["fullName", "phone"] : ["email"];

    const output = await trigger(fields as any);
    if (output) setFormStep(formStep + 1);
  };

  const prevStep = () => {
    setFormStep(formStep - 1);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
      <Link
        href="/"
        className="fixed top-4 left-4 p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
      >
        <TbArrowLeft className="w-6 h-6 text-gray-600" />
      </Link>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-7xl mx-auto bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100"
      >
        <div className="grid grid-cols-1 lg:grid-cols-5">
          <div className="col-span-3 p-6 sm:p-10">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center space-x-3 mb-8"
            >
              <Link href="/">
                <img
                  src="/assets/img/logo/logoPrimary.png"
                  alt="Logo"
                  className="h-12 w-auto cursor-pointer hover:opacity-80 transition-opacity"
                />
              </Link>
              <div className="h-8 w-px bg-gray-300"></div>
              <h2 className="text-2xl font-bold text-gray-800">Üyelik</h2>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            >
              Ailemize{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Katılın
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-600 text-lg mb-10"
            >
              Özel avantajlar, indirimler ve çok daha fazlası için hemen üye
              olun.
            </motion.p>

            {/* Form Steps */}
            <form onSubmit={handleSubmit(onSubmit)}>
              {formStep === 0 && (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-6"
                >
                  <motion.div variants={itemVariants}>
                    <Input
                      name="fullName"
                      register={register}
                      type="text"
                      label="Ad Soyad"
                      placeholder="Adınız ve Soyadınız"
                      error={errors.fullName}
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Input
                      name="phone"
                      register={register}
                      type="tel"
                      label="Telefon Numarası"
                      placeholder="0(5XX) XXX XX XX"
                      error={errors.phone}
                    />
                  </motion.div>

                  <motion.div variants={itemVariants} className="pt-4">
                    <button
                      type="button"
                      onClick={nextStep}
                      className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold text-lg hover:from-primary/80 hover:to-secondary/80 transition-all shadow-lg hover:shadow-primary/30 focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      Devam Et
                    </button>
                  </motion.div>
                </motion.div>
              )}

              {formStep === 1 && (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-6"
                >
                  <motion.div variants={itemVariants}>
                    <Input
                      name="email"
                      type="email"
                      register={register}
                      label="E-posta Adresiniz"
                      placeholder="ornek@email.com"
                      error={errors.email}
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Textarea
                      name="message"
                      register={register}
                      label="Eklemek İstedikleriniz (Opsiyonel)"
                      rows={4}
                      placeholder="Eklemek istediğiniz notları buraya yazabilirsiniz..."
                      error={errors.message}
                    />
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="flex space-x-4 pt-4"
                  >
                    <button
                      type="button"
                      onClick={prevStep}
                      className="flex-1 py-4 px-6 rounded-xl bg-gray-200 text-gray-700 font-semibold text-lg hover:bg-gray-300 transition-all focus:outline-none focus:ring-2 focus:ring-gray-500"
                    >
                      Geri
                    </button>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 py-4 px-6 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold text-lg hover:from-primary/80 hover:to-secondary/80 transition-all shadow-lg hover:shadow-primary/30 focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-70 disabled:cursor-not-allowed relative"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="opacity-0">Üye Ol</span>
                          <motion.div
                            className="absolute inset-0 flex items-center justify-center"
                            initial={{ rotate: 0 }}
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          >
                            <svg
                              className="w-6 h-6 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                          </motion.div>
                        </>
                      ) : (
                        "Üye Ol"
                      )}
                    </button>
                  </motion.div>
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-8 text-center text-gray-500 text-sm"
              >
                Üye olarak{" "}
                <Link
                  href="/sozlesme/gizlilik-politikasi"
                  className="text-primary hover:text-secondary underline"
                >
                  gizlilik politikamızı
                </Link>{" "}
                ve{" "}
                <Link
                  href="/sozlesme/kullanim-sartlari"
                  className="text-primary hover:text-secondary underline"
                >
                  kullanım şartlarımızı
                </Link>{" "}
                kabul etmiş olursunuz.
              </motion.div>
            </form>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-2 bg-gradient-to-br from-primary to-secondary p-6 sm:p-10 hidden lg:block"
          >
            <div className="h-full flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-8">
                Üyelik Ayrıcalıkları
              </h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-8"
              >
                <motion.div
                  variants={itemVariants}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center flex-shrink-0">
                    <TbCash className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-1">
                      Özel İndirimler
                    </h4>
                    <p className="text-white/80">
                      Sadece üyelere özel kampanyalar, sezon indirimleri ve
                      fırsatlardan ilk siz yararlanın.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center flex-shrink-0">
                    <TbStorm className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-1">
                      Hızlı Erişim
                    </h4>
                    <p className="text-white/80">
                      Öncelikli müşteri desteği ve teknik yardım hizmetlerine
                      anında erişim sağlayın.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center flex-shrink-0">
                    <TbBell className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-1">
                      Özel Etkinlikler
                    </h4>
                    <p className="text-white/80">
                      Üyelere özel organizasyonlar, eğitimler ve özel davetlere
                      katılım imkanı.
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-auto"
              >
                <div className="bg-white/10 backdrop-blur-md mt-8 p-6 rounded-2xl">
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt="Üye"
                      className="w-14 h-14 rounded-full border-2 border-white/30"
                    />
                    <div>
                      <h4 className="text-white font-semibold">Ayşe Yılmaz</h4>
                      <p className="text-white/70 text-sm">Üye - 2 yıldır</p>
                    </div>
                  </div>
                  <p className="text-white/80 italic">
                    "Üyeliğim sayesinde birçok fırsattan yararlandım ve harika
                    insanlarla tanışma fırsatı buldum. Kesinlikle tavsiye
                    ediyorum!"
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
