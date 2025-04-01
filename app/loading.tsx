import React from "react";

export default function Loading() {
  return (
    <div className="relative flex items-center justify-center w-full h-full min-h-screen">
      <div className="absolute inset-0 bg-white/80 backdrop-blur-md"></div>

      <div className="z-10 flex flex-col items-center space-y-4">
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 border-4 border-t-blue-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-1 border-4 border-t-transparent border-r-blue-400 border-b-transparent border-l-transparent rounded-full animate-spin animate-delay-150"></div>
          <div className="absolute inset-2 border-4 border-t-transparent border-r-transparent border-b-blue-300 border-l-transparent rounded-full animate-spin animate-delay-300"></div>
          <div className="absolute inset-3 border-4 border-t-transparent border-r-transparent border-b-transparent border-l-blue-200 rounded-full animate-spin animate-delay-500"></div>
        </div>

        <div className="text-center">
          <p className="text-lg font-medium text-gray-700">Yükleniyor</p>
          <p className="text-sm text-gray-500">Lütfen bekleyin...</p>
        </div>
      </div>
    </div>
  );
}
