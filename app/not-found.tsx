"use client";

import { useEffect } from "react";
import { TbArrowLeft, TbHome } from "react-icons/tb";

export default function NotFound() {
  useEffect(() => {
    document.title = "Takip Kira - 404";
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br p-4 relative bg-sky-50/90 overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-8 max-w-2xl w-full relative">
        <div className="relative">
          <h1 className="text-[150px] font-black bg-gradient-to-br from-primary to-sky-600 bg-clip-text text-transparent leading-none">
            404
          </h1>
          <div className="absolute -bottom-4 w-full h-4 bg-gradient-to-t from-sky-100/50 to-transparent blur-sm" />
        </div>

        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">
            Oops! Sayfa Bulunamadı
          </h2>
          <p className="text-gray-500 max-w-md">
            Aradığınız sayfa mevcut değil veya taşınmış olabilir. Ana sayfaya
            dönüp tekrar deneyebilirsiniz.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-6 py-3 bg-white rounded-full text-primary border border-primary hover:bg-primary hover:text-white transition duration-300"
          >
            <TbArrowLeft className="w-5 h-5" />
            Geri Dön
          </button>
          <button
            onClick={() => (window.location.href = "/")}
            className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full hover:brightness-110 transition duration-300"
          >
            <TbHome className="w-5 h-5" />
            Ana Sayfa
          </button>
        </div>
      </div>

      <div
        className="absolute inset-0 bg-grid-primary/[0.02] -z-10"
        style={{
          backgroundImage: `linear-gradient(to right, #0ea5e9 1px, transparent 1px),
          linear-gradient(to bottom, #0ea5e9 1px, transparent 1px)`,
          backgroundSize: "4rem 4rem",
        }}
      />
    </div>
  );
}
