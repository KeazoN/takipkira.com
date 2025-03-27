"use client";

import { TbInfoCircle } from "react-icons/tb";

const rateData = [
  { month: "Mart 2024", rate: 53.83 },
  { month: "Şubat 2024", rate: 51.32 },
  { month: "Ocak 2024", rate: 49.12 },
  { month: "Aralık 2023", rate: 46.89 },
  { month: "Kasım 2023", rate: 45.23 },
  { month: "Ekim 2023", rate: 43.91 },
  { month: "Eylül 2023", rate: 42.15 },
  { month: "Ağustos 2023", rate: 40.77 },
  { month: "Temmuz 2023", rate: 38.92 },
  { month: "Haziran 2023", rate: 37.45 },
  { month: "Mayıs 2023", rate: 35.88 },
  { month: "Nisan 2023", rate: 34.21 },
];

const Table = () => {
  return (
    <div className="container max-w-[1255px] mt-10">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Aylık Kira Artış Oranları</h2>
        <p className="text-gray-600 mt-1">
          Son 12 aya ait TÜFE bazlı kira artış oranları
        </p>
        <div className="flex items-center gap-2 p-2 rounded-lg mt-2 bg-sky-50 text-sky-700 border border-sky-100">
          <TbInfoCircle className="w-4 h-4" />
          <p className="text-sm">
            Kira artış oranları, TÜİK tarafından açıklanan TÜFE verilerine göre
            hesaplanmaktadır.
          </p>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-gray-200">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="text-left py-4 px-6 font-semibold">Dönem</th>
              <th className="text-right py-4 px-6 font-semibold">
                Artış Oranı
              </th>
            </tr>
          </thead>
          <tbody>
            {rateData.map((item, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 last:border-0 hover:bg-gray-50 transition-colors"
              >
                <td className="py-4 px-6">{item.month}</td>
                <td className="py-4 px-6 text-right">
                  <span className="bg-primary/5 text-primary font-semibold px-3 py-1 rounded-full">
                    %{item.rate}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
