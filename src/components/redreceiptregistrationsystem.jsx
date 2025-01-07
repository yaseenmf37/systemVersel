import { Field, Formik, Form as FormikForm } from "formik";

export default function RedReceiptregistrationsystem() {
  return (
    <div className="bg-red-900 shadow rounded-lg p-6 w-10/12 mx-auto max-sm:w-full my">
      <h2 className=" text-lg font-bold text-white mb-4 text-center">
        سامانه ثبت فیش
      </h2>
      <h6 className="text-md  text-white mb-4 text-center">
        بعد از ثبت مشخصات فیش تکراری یا غیر تکراری بودن فیش به شما گفته می‌شود
      </h6>
      <Formik
        initialValues={{
          lastFourDigits: "",
          amount: "",
          depositTime: "",
          depositDate: "",
          workDate: "",
          accountType: "",
          description: "",
        }}
        onSubmit={(values) => {
          console.log("Form submitted:", values);
        }}
      >
        {({ values, handleChange }) => (
          <FormikForm className="space-y-4">
            <div>
              <label className="block  text-white mb-2">
                چهار رقم آخر شماره کارت:
              </label>
              <Field
                type="text"
                name="lastFourDigits"
                className="bg-red-100 w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-gray-400 focus:outline-none"
                placeholder="چهار رقم آخر شماره کارت خود را وارد کنید"
              />
            </div>

            <div>
              <label className="block text-white mb-2">مبلغ واریزی:</label>
              <Field
                type="text"
                name="amount"
                className="bg-red-100 w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-gray-400 focus:outline-none"
                placeholder="مبلغ واریزی را وارد کنید"
              />
            </div>

            <div>
              <label className="block text-white mb-2">زمان واریز:</label>
              <Field
                type="time"
                name="depositTime"
                className="bg-red-100 w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-gray-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-white mb-2">تاریخ واریز:</label>
              <Field
                type="date"
                name="depositDate"
                className="bg-red-100 text-gray-600 w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-gray-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-white mb-2">تاریخ روز کاری:</label>
              <Field
                type="date"
                name="workDate"
                className="bg-red-100 text-gray-600 w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-gray-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-white mb-2">نوع اکانت:</label>
              <Field
                as="select"
                name="accountType"
                className="bg-red-100 text-gray-600 w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-gray-400 focus:outline-none"
              >
                <option value="">انتخاب کنید</option>
                <option value="account1">اکانت اول</option>
                <option value="account2">اکانت دوم</option>
              </Field>
            </div>

            <div>
              <label className="block text-white mb-2">توضیحات:</label>
              <Field
                as="textarea"
                name="description"
                rows="4"
                className="bg-red-100 w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-gray-400 focus:outline-none"
                placeholder="توضیحات مرتبط با فیش را وارد کنید"
              />
            </div>

            <button
              type="submit"
              className="w-full text-red-500 bg-white font-bold p-6 shadow-lg rounded-md py-2 "
            >
              ثبت اطلاعات
            </button>
          </FormikForm>
        )}
      </Formik>
    </div>
  );
}
