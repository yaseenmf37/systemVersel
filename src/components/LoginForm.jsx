import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import * as Yup from "yup";

const validUsers = {
  e333: "e333",
  zmn: "zmn",
  deh: "deh",
  aln: "aln",
  ahm: "ahm",
  kho: "kho",
  ahg: "ahg",
  xzr: "xzr",
  22: "22reza",
  24: "24reza",
  26: "26reza",
  28: "28reza",
  30: "30reza",
  32: "32reza",
  newmember: "newmember",
  maxman9019: "maxman9019",
  minserv19: "minserv19",
};
const LoginForm = () => {
  const navigate = useNavigate();

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const validationSchema = Yup.object({
    username: Yup.string()
      .max(20, "نام کاربری نمی‌تواند بیشتر از 20 کاراکتر باشد")
      .required("نام کاربری الزامی است"),
    password: Yup.string()
      .max(20, "رمز عبور نمی‌تواند بیشتر از 20 کاراکتر باشد")
      .required("رمز عبور الزامی است"),
  });

  const handleSubmit = (values) => {
    const { username, password } = values;

    if (validUsers[username] === password) {
      toast.success("وارد شدید", {
        position: "top-right",
        autoClose: 5000,
      });
      navigate("/Home");
    } else {
      toast.error("نام کاربری یا رمز عبور اشتباه است", {
        position: "top-right",
        autoClose: 5000,
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#4C585B] ">
      <div className="bg-[#7E99A3] p-8 rounded-lg shadow-lg w-[330px] mt-12">
        <div className="flex justify-center items-center pb-5 fontWeight:bold text-lg text-[#4a5557]"></div>
        <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <div className="mb-4">
                <Field
                  className="flex w-full h-12 p-3 border-none rounded-md text-black font-semibold bg-[#cfe4ee] placeholder:text-xs"
                  type="text"
                  id="username"
                  name="username"
                  placeholder="نام کاربری را وارد نمایید"
                />
                <div className="min-h-[20px]">
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

              <div className="relative mb-4">
                <div className="flex items-center w-full h-12 bg-[#cfe4ee] rounded-md">
                  <Field
                    className="w-full h-full px-3 text-black font-semibold placeholder:text-xs bg-transparent border-none focus:outline-none"
                    type={passwordVisible ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="رمز عبور را وارد نمایید"
                  />
                  <span
                    onClick={togglePasswordVisibility}
                    className="flex items-center justify-center h-full px-3 cursor-pointer text-gray-500 text-xl"
                  >
                    {passwordVisible ? (
                      <AiOutlineEyeInvisible />
                    ) : (
                      <AiOutlineEye />
                    )}
                  </span>
                </div>
                <div className="min-h-[20px]">
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full p-3  bg-[#67827e] text-[#c4e9e9] font-semibold rounded-md hover:bg-[#7ab5a3] transition"
              >
                ورود
              </button>
            </Form>
          )}
        </Formik>

        <ToastContainer />
      </div>
    </div>
  );
};

export default LoginForm;
