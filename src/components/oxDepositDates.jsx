import React, { useState } from "react";
import jalaali from "jalaali-js";

const data = [
  {
    id: 1,
    name: "aslamjaneh",
    platform: "android",
    time: "1402-10-01",
    price: "99000",
    account: "username: oxyd0117372037637 and password: oxyd0117372037637",
  },
  {
    id: 2,
    name: "سعیده نوروزی",
    platform: "android",
    time: "1402-10-01",
    price: "99000",
    account: "username: oxyd11013250750431 and password: oxyd11013250750431",
  },
  {
    id: 3,
    name: "حامد رمضانی",
    platform: "iphone",
    time: "1402-10-03",
    price: "18000",
    account: "username: sil1819730252430 and password: sil1819730252430",
  },
  // داده‌های بیشتر...
];

export default function OxDepositDates() {
  const [selectedDay, setSelectedDay] = useState("1");
  const [filteredData, setFilteredData] = useState([]);
  const [noResults, setNoResults] = useState(false);

  // تاریخ امروز به شمسی
  const today = new Date();
  const todayJalaali = jalaali.toJalaali(today);
  const todayFormatted = `${todayJalaali.jy}/${todayJalaali.jm
    .toString()
    .padStart(2, "0")}/${todayJalaali.jd.toString().padStart(2, "0")}`;

  // جستجو بر اساس روز انتخاب‌شده
  const handleSearch = () => {
    const result = data.filter((item) => {
      const itemDay = parseInt(item.time.split("-")[2], 10); // استخراج روز از تاریخ
      return itemDay === parseInt(selectedDay, 10); // تطابق با روز انتخاب‌شده
    });
    setFilteredData(result);
    setNoResults(result.length === 0);
  };

  // محاسبه تعداد اندروید و آیفون
  const androidCount = filteredData.filter(
    (item) => item.platform === "android"
  ).length;
  const iphoneCount = filteredData.filter(
    (item) => item.platform === "iphone"
  ).length;

  return (
    <div className="min-h-screen  flex flex-col items-center py-10">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-2">
          تاریخ واریزی ها رو در سایت انتخاب کنید
        </h1>
        <p className="text-center text-gray-600 mb-6">
          تاریخ امروز: <span className="font-bold">{todayFormatted}</span>
        </p>
        <div className="flex flex-col items-center gap-4 mb-6">
          <label className="text-gray-600">روز وارد کنید:</label>
          <select
            value={selectedDay}
            onChange={(e) => setSelectedDay(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {Array.from({ length: 31 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
          >
            جستجو
          </button>
        </div>
        {noResults ? (
          <p className="text-red-500 text-center">موردی یافت نشد.</p>
        ) : (
          <>
            <p className="text-center text-gray-700 mb-4">
              تعداد اندروید:{" "}
              <span className="font-bold text-blue-500">{androidCount}</span> |
              تعداد آیفون:{" "}
              <span className="font-bold text-green-500">{iphoneCount}</span>
            </p>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-blue-500 text-white">
                  <th className="border border-gray-300 p-2">id</th>
                  <th className="border border-gray-300 p-2">نام کاربری</th>
                  <th className="border border-gray-300 p-2">پلتفرم</th>
                  <th className="border border-gray-300 p-2">زمان</th>
                  <th className="border border-gray-300 p-2">قیمت</th>
                  <th className="border border-gray-300 p-2">اکانت</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item) => (
                  <tr key={item.id} className="bg-gray-100 text-center">
                    <td className="border border-gray-300 p-2">{item.id}</td>
                    <td className="border border-gray-300 p-2">{item.name}</td>
                    <td className="border border-gray-300 p-2">
                      {item.platform}
                    </td>
                    <td className="border border-gray-300 p-2">{item.time}</td>
                    <td className="border border-gray-300 p-2">{item.price}</td>
                    <td className="border border-gray-300 p-2">
                      {item.account}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
}
