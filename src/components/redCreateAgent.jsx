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
  <div className="bg-gradient-to-r from-[#dc2626] via-[#f87171] to-[#fca5a5] shadow-lg rounded-lg p-6 mb-6">
    <h2 className="text-lg font-bold text-white mb-4">{title}</h2>
    {inputs.map((input, index) => (
      <input
        key={index}
        type={input.type || "text"}
        placeholder={input.placeholder || ""}
        className="w-full border border-red-500 rounded-md px-4 py-2 focus:ring-2 focus:ring-red-700 focus:outline-none mb-4 bg-red-50 text-[#7f1d1d]"
      />
    ))}
    {buttons.map((button, index) => (
      <button
        key={index}
        className="w-full bg-gradient-to-r from-[#7f1d1d] to-[#dc2626] text-white rounded-md py-2 hover:from-[#991b1b] hover:to-[#7f1d1d] mb-4"
      >
        {button.label}
      </button>
    ))}
  </div>
);

export default function RedCreateAgent() {
  const btn = ["ماه 1", "ماه 2", "ماه 3"];
  const volume = ["25 gig", "50 gig", "50 gig - سه ماهه", "100 gig"];
  return (
    <div className="min-h-screen" dir="rtl">
      <div className="text-center py-4">
        <h1 className="text-2xl font-bold text-[#7f1d1d]">
          سامانه مدیریت یوزر
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-4 p-4">
        {btn.map((mount, index) => (
          <div
            key={index}
            className="cursor-default shadow-md bg-gradient-to-r from-[#7f1d1d] to-[#dc2626] rounded-lg p-5 text-white"
          >
            {mount}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {volume.map((vol, index) => (
          <div
            key={index}
            className="cursor-default shadow-md bg-gradient-to-r from-[#7f1d1d] to-[#dc2626] rounded-lg p-5 text-white"
          >
            {vol}
          </div>
        ))}
      </div>

      <div className="font-sans min-h-screen">
        <div className="max-w-4xl mx-auto py-10">
          {sections.map((section, index) => (
            <Section key={index} {...section} />
          ))}
        </div>
      </div>
      <div className="max-w-4xl mx-auto py-10 bg-gradient-to-r from-[#7f1d1d] to-[#dc2626] text-white p-4">
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
}
