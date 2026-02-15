import { useState } from "react";
import { FiEye, FiBriefcase } from "react-icons/fi";
import AppNavbar from "../components/Navbar";
import { useLogin } from "../hooks/useLogin";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
  const { mutate, isPending, isError, error } = useLogin();
  const [showPassword, setShowPassword] = useState(false);

  // useEffect(() => {
  //   const test = async () => {
  //     try {
  //       const data = await mutateAsync({
  //         email: "ahmed0106@gmail.com",
  //         password: "1238798n",
  //       });
  //       console.log("Response:", data);
  //     } catch (error) {
  //       console.error("Error:", error.response?.data || error);
  //     }
  //   };

  //   test();
  // }, []);

  const inputStyle = `
    w-full px-3 py-2 rounded-lg
    border border-[#3e2723]
    bg-[#3e2723]/10
    text-gray-800
    placeholder-gray-500
    focus:outline-none
    focus:ring-2 focus:ring-[#3e2723]/40
    transition
  `;

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),

    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: false,
    },
    validationSchema,
    onSubmit: (values) => {
      mutate({
        email: values.email,
        password: values.password,
      });
    },
  });

  return (
    <div className="bg-primary/10 flex min-h-screen flex-col">
      <AppNavbar />

      <div className="mt-20 flex flex-1 items-center justify-center px-4">
        <div className="flex w-full max-w-md flex-col items-center rounded-xl bg-white p-8 shadow-md">
          <FiBriefcase className="text-primary mb-2 text-3xl" />

          <h2 className="mb-1 text-center text-2xl font-bold">Welcome Back</h2>

          <p className="mb-6 text-center text-sm text-gray-500">
            Sign in to continue your learning journey
          </p>

          <form
            onSubmit={formik.handleSubmit}
            className="flex w-full flex-col gap-4"
          >
            {/* Email */}
            <div className="flex flex-col">
              <label className="mb-1 text-sm">Email</label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className={inputStyle}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {formik.touched.email && formik.errors.email && (
                <span className="mt-1 text-xs text-red-500">
                  {formik.errors.email}
                </span>
              )}
            </div>

            {/* Password */}
            <div className="relative flex flex-col">
              <label className="mb-1 text-sm">Password</label>

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className={inputStyle}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              <span
                className="hover:text-primary absolute top-9 right-3 cursor-pointer text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                <FiEye />
              </span>

              {formik.touched.password && formik.errors.password && (
                <span className="mt-1 text-xs text-red-500">
                  {formik.errors.password}
                </span>
              )}
            </div>

            {/* Remember Me */}
            <div className="flex justify-center text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="remember"
                  checked={formik.values.remember}
                  onChange={formik.handleChange}
                />
                Remember me
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isPending}
              className="bg-primary hover:bg-primary/90 mt-2 w-full rounded-lg py-2 text-white transition disabled:opacity-50"
            >
              {isPending ? "Logging in..." : "Login"}
            </button>

            {/* Server Error */}
            {isError && (
              <p className="text-center text-sm text-red-500">
                {error?.response?.data?.message || "Login failed"}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
