"use client";

import { Input } from "@/components/Input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  TbBuildingStore,
  TbCalculator,
  TbCurrencyLira,
  TbHome,
  TbInfoCircle,
} from "react-icons/tb";
import { Select } from "@/components/Select";
import Button from "@/components/Button";
import CountUp from "@/components/animations/CountUp";
import { useState } from "react";
import tufeData from "@/models/tufe.json";

const schema = z.object({
  rentPrice: z.string().min(1, "Kira alanı zorunludur"),
  rentIncreaseMonth: z.string().min(1, "Kira artış ayı zorunludur"),
  rentIncreaseYear: z.coerce.number().min(2024, "Geçerli bir yıl seçiniz"),
  rentIncreaseType: z.string().min(1, "Kira artış tercihi zorunludur"),
  customRate: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const Calc = () => {
  const [calculatedRent, setCalculatedRent] = useState({
    newRent: 0,
    increase: 0,
    rate: 0,
  });

  const [activeTab, setActiveTab] = useState<"konut" | "isyeri">("konut");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      rentIncreaseYear: 2025,
      rentIncreaseMonth: "nisan",
    },
  });

  const rentIncreaseType = watch("rentIncreaseType");

  const onSubmit = (data: FormValues) => {
    try {
      const currentRent = parseFloat(data.rentPrice.replace(/[^0-9.]/g, ""));

      if (isNaN(currentRent)) {
        throw new Error("Geçerli bir kira tutarı giriniz");
      }

      let rate = 0;
      if (data.rentIncreaseType === "özelOran") {
        rate = parseFloat(data.customRate?.replace(/[^0-9.]/g, "") || "0");
        if (isNaN(rate)) {
          throw new Error("Geçerli bir artış oranı giriniz");
        }
      } else {
        const year = data.rentIncreaseYear.toString();
        const month = data.rentIncreaseMonth;
        rate =
          tufeData[year as keyof typeof tufeData]?.[
            month as keyof (typeof tufeData)[keyof typeof tufeData]
          ] || 0;
      }

      const increase = currentRent * (rate / 100);
      const newRent = currentRent + increase;

      setCalculatedRent({
        newRent: Math.round(newRent * 100) / 100,
        increase: Math.round(increase * 100) / 100,
        rate: Math.round(rate * 100) / 100,
      });
    } catch (error) {
      console.error("Hesaplama hatası:", error);
      alert(
        error instanceof Error
          ? error.message
          : "Hesaplama yapılırken bir hata oluştu"
      );
    }
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 3 }, (_, i) => currentYear - i).sort(
    (a, b) => b - a
  );

  const monthLabels = {
    ocak: "Ocak",
    subat: "Şubat",
    mart: "Mart",
    nisan: "Nisan",
    mayis: "Mayıs",
    haziran: "Haziran",
    temmuz: "Temmuz",
    agustos: "Ağustos",
    eylul: "Eylül",
    ekim: "Ekim",
    kasim: "Kasım",
    aralik: "Aralık",
  };

  const getAvailableMonths = () => {
    const selectedYear = watch("rentIncreaseYear")?.toString();
    if (!selectedYear || !tufeData[selectedYear as keyof typeof tufeData])
      return [];

    return Object.keys(tufeData[selectedYear as keyof typeof tufeData]).map(
      (month) => ({
        label: monthLabels[month as keyof typeof monthLabels],
        value: month,
      })
    );
  };

  return (
    <section className="container mt-4 max-w-[1255px] flex flex-col gap-4 px-4 md:px-6 lg:px-8">
      <ul className="flex items-center justify-center gap-2 flex-wrap">
        <li
          onClick={() => setActiveTab("konut")}
          className={`px-6 py-2 rounded-full cursor-pointer transition font-medium flex items-center gap-2 ${
            activeTab === "konut"
              ? "bg-primary text-white"
              : "border border-gray-200 hover:bg-gray-100"
          }`}
        >
          <TbHome className="w-5 h-5" /> Konut
        </li>
        <li
          onClick={() => setActiveTab("isyeri")}
          className={`px-6 py-2 rounded-full cursor-pointer transition font-medium flex items-center gap-2 ${
            activeTab === "isyeri"
              ? "bg-primary text-white"
              : "border border-gray-200 hover:bg-gray-100"
          }`}
        >
          <TbBuildingStore className="w-5 h-5" /> İş Yeri
        </li>
      </ul>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="lg:col-span-3 p-4 md:p-6 flex flex-col gap-4 rounded-3xl border border-gray-200"
        >
          <div className="mb-4">
            <h2 className="text-xl md:text-2xl font-bold">
              Kira Artış Hesaplama
            </h2>
            <p className="text-gray-600 mt-1 text-sm md:text-base">
              Kira artış oranınızı hesaplamak için aşağıdaki formu doldurun.
            </p>
            <div className="flex items-center gap-2 p-2 rounded-lg mt-2 bg-sky-50 text-sky-700 border border-sky-100">
              <TbInfoCircle className="w-3 h-3 text-primary flex-shrink-0" />
              <p className="text-xs md:text-sm">
                Mart 2025 kira artışı için açıklanan yüzde %
                {tufeData["2025"].mart} olmuştur.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Input
                type="text"
                name="rentPrice"
                label="Mevcut Kira Tutarı"
                placeholder="25.000"
                register={register}
                error={errors.rentPrice}
              />
              <span className="absolute right-2 text-sm font-bold w-8 h-8 rounded-full bg-white border border-gray-200 top-12 -translate-y-1/2 flex items-center justify-center">
                <TbCurrencyLira />
              </span>
            </div>
            <Select
              name="rentIncreaseYear"
              label="Kira Artış Yılı"
              options={years.map((year) => ({
                label: year.toString(),
                value: year,
              }))}
              placeholder="Kira Artış Yılı"
              register={register}
              error={errors.rentIncreaseYear}
            />
            <Select
              name="rentIncreaseMonth"
              label="Kira Artış Ayı"
              options={getAvailableMonths()}
              placeholder="Kira Artış Ayı"
              register={register}
              error={errors.rentIncreaseMonth}
            />
          </div>
          <Select
            name="rentIncreaseType"
            label="Kira Artış Tercihi"
            options={[
              {
                label: "Tüketici Fiyat Endeksi",
                value: "tüketiciFiyatEndeksi",
              },
              { label: "Özel Oran", value: "özelOran" },
            ]}
            placeholder="Kira Artış Tercihi"
            register={register}
          />
          {rentIncreaseType === "özelOran" && (
            <div className="relative">
              <Input
                type="text"
                name="customRate"
                label="Özel Artış Oranı (%)"
                placeholder="25"
                register={register}
                error={errors.customRate}
              />
              <span className="absolute right-2 text-sm font-bold w-8 h-8 rounded-full bg-white border border-gray-200 top-12 -translate-y-1/2 flex items-center justify-center">
                %
              </span>
            </div>
          )}
          <Button
            type="submit"
            className="w-full"
            leftIcon={<TbCalculator className="w-5 h-5" />}
          >
            Hesapla
          </Button>
        </form>
        <div className="lg:col-span-2 p-4 md:p-6 flex flex-col gap-4 rounded-3xl border border-gray-200">
          <div className="mb-4">
            <h2 className="text-xl md:text-2xl font-bold">Kira Artış Sonucu</h2>
            <p className="text-gray-600 mt-1 text-sm md:text-base">
              Kira artış sonucunuzu buradan görebilirsiniz.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
              <div className="bg-white p-4 rounded-2xl h-full shadow-sm border border-gray-200 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                <h3 className="text-base md:text-lg font-semibold mb-3 text-gray-700">
                  Yeni Kira Tutarı
                </h3>
                <div className="flex items-center gap-2 bg-primary/5 px-4 py-3 rounded-xl">
                  <span className="text-xl md:text-2xl font-bold text-primary">
                    <CountUp
                      to={calculatedRent.newRent}
                      separator="."
                      duration={0.1}
                    />
                  </span>
                  <span className="text-lg md:text-xl font-semibold text-primary/80">
                    ₺
                  </span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl h-full shadow-sm border border-gray-200 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                <h3 className="text-base md:text-lg font-semibold mb-3 text-gray-700">
                  Artış Miktarı
                </h3>
                <div className="flex items-center gap-2 bg-primary/5 px-4 py-3 rounded-xl">
                  <span className="text-xl md:text-2xl font-bold text-primary">
                    <CountUp
                      to={calculatedRent.increase}
                      separator="."
                      duration={0.1}
                    />
                  </span>
                  <span className="text-lg md:text-xl font-semibold text-primary/80">
                    ₺
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl h-full shadow-sm border border-gray-200 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between">
                <h3 className="text-base md:text-lg font-semibold text-gray-700">
                  Kira Artış Oranı
                </h3>
                <div className="flex items-center gap-2 bg-primary/5 px-4 py-3 rounded-xl">
                  <span className="text-xl md:text-2xl font-bold text-primary">
                    <CountUp to={calculatedRent.rate} duration={0.1} />
                  </span>
                  <span className="text-lg md:text-xl font-semibold text-primary/80">
                    %
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calc;
