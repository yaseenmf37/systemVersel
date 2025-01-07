import React, { useState } from "react";

const App = () => {
  // تستی تا زمانی که بک کار بیاد
  const [users, setUsers] = useState([
    { username: "user1", walletAmount: 100000, testCapacity: 5 },
    { username: "user2", walletAmount: 50000, testCapacity: 10 },
    { username: "user3", walletAmount: 200000, testCapacity: 7 },
  ]);

  const [userData, setUserData] = useState(null);

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormWithValidation
          title="مشاهده موجودی نماینده"
          successMessage="موجودی با موفقیت نمایش داده شد"
          fields={[
            {
              placeholder: "نام کاربری نماینده را وارد نمایید",
              type: "text",
              key: "username",
            },
          ]}
          users={users}
          setUsers={setUsers}
          userData={userData}
          setUserData={setUserData}
        />

        <FormWithValidation
          title="ایجاد نماینده جدید"
          successMessage="نماینده جدید با موفقیت ایجاد شد"
          fields={[
            {
              placeholder: "نام کاربری نماینده را وارد نمایید",
              type: "text",
              key: "username",
            },
            {
              placeholder: "مبلغ موجودی جدید به تومان وارد شود",
              type: "number",
              key: "walletAmount",
            },
          ]}
          users={users}
          setUsers={setUsers}
        />

        <FormWithValidation
          title="ویرایش کیف پول"
          successMessage="موجودی کیف پول با موفقیت ویرایش شد"
          fields={[
            {
              placeholder: "نام کاربری نماینده را وارد نمایید",
              type: "text",
              key: "username",
            },
            {
              placeholder: "مبلغ موجودی جدید به تومان وارد شود",
              type: "number",
              key: "walletAmount",
            },
          ]}
          users={users}
          setUsers={setUsers}
        />

        <FormWithValidation
          title="ویرایش ظرفیت تست کاربر"
          successMessage="ظرفیت تست کاربر با موفقیت ویرایش شد"
          fields={[
            {
              placeholder: "نام کاربری نماینده را وارد نمایید",
              type: "text",
              key: "username",
            },
            {
              placeholder: "تعداد تست جدید",
              type: "number",
              key: "testCapacity",
            },
          ]}
          users={users}
          setUsers={setUsers}
        />
      </div>
    </div>
  );
};

const FormWithValidation = ({
  title,
  successMessage,
  fields,
  users,
  setUsers,
  userData,
  setUserData,
}) => {
  const [inputs, setInputs] = useState(
    fields.map(() => ({ value: "", error: null }))
  );
  const [message, setMessage] = useState(null);
  const [isSuccess, setIsSuccess] = useState(null);

  const validateInput = () => {
    let isValid = true;
    const updatedInputs = inputs.map((input, index) => {
      if (!input.value.trim()) {
        isValid = false;
        return { ...input, error: "فیلد نمی‌تواند خالی باشد" };
      }

      if (fields[index].type === "text") {
        const isValidFormat = /^[a-zA-Z0-9]+$/.test(input.value);
        if (!isValidFormat) {
          isValid = false;
          return {
            ...input,
            error:
              "فرمت وارد شده نامعتبر است (فقط حروف انگلیسی و اعداد مجاز هستند)",
          };
        }

        if (
          !users.find((user) => user.username === input.value) &&
          title === "مشاهده موجودی نماینده"
        ) {
          isValid = false;
          return { ...input, error: "نام کاربری یافت نشد" };
        }
      }

      return { ...input, error: null };
    });

    setInputs(updatedInputs);

    if (isValid) {
      setMessage(successMessage);
      setIsSuccess(true);
    } else {
      setMessage("لطفاً خطاهای فرم را برطرف کنید");
      setIsSuccess(false);
    }
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInput()) {
      const updatedData = {};
      inputs.forEach((input, index) => {
        const key = fields[index].key;
        if (key)
          updatedData[key] =
            fields[index].type === "number" ? +input.value : input.value;
      });

      if (title === "مشاهده موجودی نماینده") {
        const user = users.find(
          (user) => user.username === updatedData.username
        );
        setUserData(user || null);
      } else if (title === "ایجاد نماینده جدید") {
        setUsers([...users, updatedData]);
      } else if (title === "ویرایش کیف پول") {
        const updatedUsers = users.map((user) =>
          user.username === updatedData.username
            ? { ...user, walletAmount: updatedData.walletAmount }
            : user
        );
        setUsers(updatedUsers);
      } else if (title === "ویرایش ظرفیت تست کاربر") {
        const updatedUsers = users.map((user) =>
          user.username === updatedData.username
            ? { ...user, testCapacity: updatedData.testCapacity }
            : user
        );
        setUsers(updatedUsers);
      }
    }
  };

  const handleChange = (index, value) => {
    const updatedInputs = [...inputs];
    updatedInputs[index].value = value;
    setInputs(updatedInputs);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 space-y-4 w-96">
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      {message && (
        <div
          className={`text-sm p-2 rounded-lg ${
            isSuccess
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        {fields.map((field, index) => (
          <div key={index} className="space-y-1">
            <Input
              placeholder={field.placeholder}
              type={field.type}
              value={inputs[index].value}
              onChange={(e) => handleChange(index, e.target.value)}
            />
            {inputs[index].error && (
              <div className="text-sm text-red-600">{inputs[index].error}</div>
            )}
          </div>
        ))}
        <Button>ارسال</Button>
      </form>
      {title === "مشاهده موجودی نماینده" && userData && (
        <div className="mt-4 text-gray-700">
          <p>نام کاربری: {userData.username}</p>
          <p>موجودی کیف پول: {userData.walletAmount} تومان</p>
          <p>ظرفیت تست: {userData.testCapacity}</p>
        </div>
      )}
    </div>
  );
};

const Input = ({ placeholder, type, value, onChange }) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
  />
);

const Button = ({ children }) => (
  <button
    type="submit"
    className="w-full bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600 transition"
  >
    {children}
  </button>
);

export default App;
