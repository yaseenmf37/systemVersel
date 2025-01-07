import React, { useState } from "react";

const data = [
  {
    id: 1,
    lastNumber: 2345,
    platform: "android",
    time: "12:44",
    date: "1402-10-01",
    workDay: "1402-10-02",
    price: "99000",
    relORfic: "واقعی",
    account: "username: oxyd0117372037637 and password: oxyd0117372037637",
  },
  {
    id: 2,
    lastNumber: 3434,
    time: "13:33",
    date: "1402-10-02",
    workDay: "1402-10-03",
    price: "99000",
    relORfic: "واقعی",
    account: "username: oxyd11013250750431 and password: oxyd11013250750431",
  },
  {
    id: 3,
    lastNumber: 5454,
    time: "08:33",
    date: "1402-10-03",
    workDay: "1402-10-04",
    price: "18000",
    relORfic: "واقعی",
    account: "username: sil1819730252430 and password: sil1819730252430",
  },
  {
    id: 4,
    lastNumber: 7678,
    time: "11:32",
    date: "1402-10-01",
    workDay: "1402-10-02",
    price: "22000",
    relORfic: "واقعی",
    account: "username: oxyd0117372037637 and password: oxyd0117372037637",
  },
];

export default function RedDepositDates() {
  const [startDay, setStartDay] = useState("1");
  const [filteredData, setFilteredData] = useState([]);
  const [noResults, setNoResults] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentRow, setCurrentRow] = useState(null);

  // جستجو بر اساس روز انتخاب شده
  const handleSearch = () => {
    const result = data.filter((item) => {
      const itemDay = parseInt(item.workDay.split("-")[2], 10); // استخراج روز از تاریخ
      return itemDay === parseInt(startDay, 10);
    });
    setFilteredData(result);
    setNoResults(result.length === 0);
  };

  const handleSearchFish = () => {
    const result = data.filter((item) => {
      const itemDay = parseInt(item.date.split("-")[2], 10); // استخراج روز از تاریخ
      return itemDay === parseInt(startDay, 10);
    });

    setFilteredData(result);
    setNoResults(result.length === 0);
  };

  const handleEditClick = (row) => {
    console.log("Row clicked:", row);
    setCurrentRow(row);
    setIsModalOpen(true);
  };

  const handleSave = () => {
    console.log("Before save:", filteredData);
    console.log("Current row:", currentRow);

    const updatedData = filteredData.map((item) =>
      item.id === currentRow.id ? currentRow : item
    );

    console.log("Updated data:", updatedData);
    setFilteredData(updatedData);
    setIsModalOpen(false);
  };

  const handleInputChange = (field, value) => {
    setCurrentRow({ ...currentRow, [field]: value });
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-2">
      <div className="bg-white text-red-900 shadow-lg rounded-lg p-6 w-full max-w-4xl">
        <h1 className="text-2xl font-bold text-center mb-4">
          سامانه جستجوی فیش
        </h1>

        <div className="flex justify-around mt-10">
          <div className="flex flex-col items-center gap-4 mb-6">
            <label className="text-gray-800 font-bold">روز کاری:</label>
            <select
              value={startDay}
              onChange={(e) => setStartDay(e.target.value)}
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 text-black"
            >
              {Array.from({ length: 31 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>

            <button
              onClick={handleSearch}
              className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-700 w-full max-w-xs"
            >
              جستجو
            </button>
          </div>
          <div className="flex flex-col items-center gap-4 mb-6">
            <label className="text-gray-800 font-bold">تاریخ واریزی :</label>
            <select
              value={startDay}
              onChange={(e) => setStartDay(e.target.value)}
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 text-black"
            >
              {Array.from({ length: 31 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>

            <button
              onClick={handleSearchFish}
              className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-700 w-full max-w-xs"
            >
              جستجو
            </button>
          </div>
        </div>

        {noResults ? (
          <p className="text-red-500 text-center">موردی یافت نشد.</p>
        ) : (
          <>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-red-600 text-white">
                  <th className="border border-gray-300 p-2">شماره</th>
                  <th className="border border-gray-300 p-2">
                    چهار رقم آخر شماره کارت
                  </th>
                  <th className="border border-gray-300 p-2">مبلغ پرداختی</th>
                  <th className="border border-gray-300 p-2">زمان</th>
                  <th className="border border-gray-300 p-2">تاریخ</th>
                  <th className="border border-gray-300 p-2">ویرایش</th>
                  <th className="border border-gray-300 p-2">
                    فیک یا عدم فیک بودن
                  </th>
                  <th className="border border-gray-300 p-2">تاریخ روز کاری</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item) => (
                  <tr key={item.id} className="bg-gray-100 text-center">
                    <td className="border border-gray-300 text-gray-700 p-2">
                      {item.id}
                    </td>
                    <td className="border border-gray-300 text-gray-700 p-2">
                      {item.lastNumber}
                    </td>
                    <td className="border border-gray-300 text-gray-700 p-2">
                      {item.price}
                    </td>
                    <td className="border border-gray-300 text-gray-700 p-2">
                      {item.time}
                    </td>
                    <td className="border border-gray-300 text-gray-700 p-2">
                      {item.date}
                    </td>
                    <td
                      className="border border-gray-300 text-red-500 hover:underline cursor-pointer p-2"
                      style={{ cursor: "pointer", color: "red" }}
                      onClick={() => handleEditClick(item)}
                    >
                      ویرایش
                    </td>
                    <td className="border border-gray-300 text-gray-700 p-2">
                      {item.relORfic}
                    </td>
                    <td className="border border-gray-300 text-gray-700 p-2">
                      {item.workDay}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>

      {isModalOpen && currentRow && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">ویرایش اطلاعات</h2>
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-gray-700">
                  چهار رقم اخر شماره کارت را در قسمت زیر وارد کنید:
                </label>
                <input
                  type="text"
                  value={currentRow.lastNumber}
                  onChange={(e) =>
                    handleInputChange("lastNumber", e.target.value)
                  }
                  className="w-full border border-gray-300 rounded-md px-2 py-1"
                />
              </div>
              <div>
                <label className="block text-gray-700">
                  مبلغ واریزی مشتری (به تومان وارد شود):
                </label>
                <input
                  type="text"
                  value={currentRow.price}
                  onChange={(e) => handleInputChange("price", e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-2 py-1"
                />
              </div>
              <div>
                <label className="block text-gray-700">ساعت واریز مشتری:</label>
                <input
                  type="text"
                  value={currentRow.time}
                  onChange={(e) => handleInputChange("time", e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-2 py-1"
                />
              </div>
              <div>
                <label className="block text-gray-700">
                  تاریخ واریز مشتری :
                </label>
                <input
                  type="text"
                  value={currentRow.date}
                  onChange={(e) => handleInputChange("date", e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-2 py-1"
                />
              </div>
            </div>
            <div className="flex justify-end gap-4 mt-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-500 text-white px-4 py-1 rounded-md hover:bg-gray-700"
              >
                انصراف
              </button>
              <button
                onClick={handleSave}
                className="bg-green-500 text-white px-4 py-1 rounded-md hover:bg-green-700"
              >
                ذخیره
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
