import React from "react";
import Navbar from "./Navbar";
import RegisterReceipt from "./RegisterReceipt";

const sections = [
  {
    title: "یوزرنیم را فقط وارد کنید - توجه بدون User:",
    inputs: [{ placeholder: "یوزرنیم" }],
    buttons: [{ label: "رفرش یوزر" }, { label: "حذف یوزر" }],
  },
  {
    title: "تمدید یوزر - توجه بدون User:",
    inputs: [{ placeholder: "یوزرنیم" }],
    buttons: [
      { label: "یک ماه" },
      { label: "سه ماه" },
      { label: "شش ماه" },
      { label: "مشاهده زمان اکانت" },
    ],
  },
  {
    title: "بررسی تاریخ",
    inputs: [{ placeholder: "یوزرنیم" }, { type: "date" }],
    buttons: [
      { label: "بررسی تاریخ" },
      { label: "اعمال تاریخ جدید" },
      { label: "ذخیره تغییرات" },
    ],
  },
];

const Section = ({ title, inputs, buttons }) => (
  <div className="bg-[#a5afac] shadow rounded-lg p-6 mb-6">
    <h2 className="text-lg font-bold text-gray-700 mb-4">{title}</h2>
    {inputs.map((input, index) => (
      <input
        key={index}
        type={input.type || "text"}
        placeholder={input.placeholder || ""}
        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-gray-500 focus:outline-none mb-4 bg-[#E9EFEC]"
      />
    ))}
    {buttons.map((button, index) => (
      <button
        key={index}
        className="w-full bg-[#737f82] text-[#cfe4ee] rounded-md py-2 hover:bg-[#576764] mb-4"
      >
        {button.label}
      </button>
    ))}
  </div>
);

const Dashboard = () => {
  const btn = ["ماه 1", "ماه 2", "ماه 3"];
  const volume = ["25 gig", "50 gig", "50 gig - سه ماهه", "100 gig"];
  return (
    <div className="min-h-screen bg-[#E9EFEC]" dir="rtl">
      <Navbar />

      <div className="text-center py-4">
        <h1 className="text-2xl font-bold text-[#187a7a]">
          ورود به سامانه رد وی پی ان
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-4 p-4">
        {btn.map((mount, index) => (
          <div
            key={index}
            className="shadow-md bg-[#67827e] rounded-lg p-5 text-[#c4e9e9]"
          >
            {mount}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {volume.map((vol, index) => (
          <div
            key={index}
            className="shadow-md bg-[#67827e] rounded-lg p-5 text-[#c4e9e9]"
          >
            {vol}
          </div>
        ))}
      </div>

      <div className="font-sans min-h-screen">
        <div className="max-w-4xl mx-auto py-10 text-[#576764]">
          {sections.map((section, index) => (
            <Section key={index} {...section} />
          ))}
        </div>
      </div>
      <div className="bg-gradient-to-r bg-[#576764] text-[#d2fafa] p-4">
        <h2 className="text-xl font-bold">کانفیگ حجمی :</h2>
        <p className="mt-2">
          <span className="font-bold">username:</span> your_username <br />
          <span className="font-bold">password:</span> your_password
        </p>
        <p className="mt-2">
          سلام خدمت کاربر گرامی،
          <br />
          در کانال زیر عضو شوید و نرم افزار اختصاصی را دانلود کنید.
        </p>
        <p className="mt-2 font-bold">پشتیبانی و فروش: oxigen_sup@</p>
      </div>
    </div>
  );
};

export default Dashboard;
