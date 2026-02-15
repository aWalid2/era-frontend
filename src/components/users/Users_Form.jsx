import { useFormik, FormikProvider } from "formik";
import FormError from "./FormError";
import InputFormText from "./InputFormText";
import InputFormNumber from "./InputFormNumber";
import InputFormDate from "./InputFormDate";
import InputFormSelect from "./InputFormSelect";
import { validationSchema_Users } from "./ValidationForm_users";

export default function Users_Form({ isEdit, handleClose, handleSubmit, initialValues }) {
  
  const defaultValues = {
    name: "",
    email: "",
    password: "",
    role: "",
    position: "",
    lastLogin: "",
    dateJoin: "",
    salary: "",
    phone: "",
    state: "",
    gender: "",
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      ...defaultValues,
      ...initialValues,
    },
    validationSchema:validationSchema_Users(isEdit),
    onSubmit: (values) => {
      console.log(values)
      handleSubmit(values);
    },
  });

  const inputClass = (field) =>
    `border rounded px-2 py-1 sm:py-1.5 text-sm outline-none focus:border-primary ${
      formik.touched[field] && formik.errors[field]
        ? "border-red-500"
        : "border-gray-300"
    }`;

  const labelClass = "text-sm font-semibold text-gray-600";

  return (
    <FormikProvider value={formik}>
      <form
        onSubmit={formik.handleSubmit}
        className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-h-[80vh] overflow-y-auto pr-2"
      >
        {/* Name */}
        <div className="flex flex-col gap-1">
          <InputFormText
            label="Name"
            inputClass={inputClass}
            name="name"
            placeholder="Enter name"
            formik={formik}
            labelClass={labelClass}
            value={formik.values.name}
          />
          <FormError name="name" />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <InputFormText
            label="Email"
            inputClass={inputClass}
            name="email"
            placeholder="Enter email"
            formik={formik}
            labelClass={labelClass}
            value={formik.values.email}
          />
          <FormError name="email" />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1">
          <InputFormText
            label="Password"
            inputClass={inputClass}
            name="password"
            placeholder="Enter password"
            formik={formik}
            labelClass={labelClass}
            value={formik.values.password}
            type="password"
          />
          <FormError name="password" />
        </div>

        {/* Role */}
        <div className="flex flex-col gap-1">
          <InputFormSelect
            label="Role"
            name="role"
            formik={formik}
            labelClass={labelClass}
            inputClass={inputClass}
            options={["Admin", "Manager", "User"]}
          />
          <FormError name="role" />
        </div>

        {/* Position */}
        <div className="flex flex-col gap-1">
          <InputFormSelect
            label="Position"
            name="position"
            formik={formik}
            labelClass={labelClass}
            inputClass={inputClass}
            options={[
              "FrontEnd Developer",
              "BackEnd Developer",
              "UI UX Designer",
              "HR",
            ]}
          />
          <FormError name="position" />
        </div>

        {/* Salary */}
        <div className="flex flex-col gap-1">
          <InputFormNumber
            label="Salary"
            labelClass={labelClass}
            name="salary"
            placeholder="Enter salary"
            value={formik.values.salary}
            formik={formik}
            inputClass={inputClass}
          />
          <FormError name="salary" />
        </div>

        {/* Last Login */}
        <div className="flex flex-col gap-1">
          <InputFormDate
            label="Last Login"
            labelClass={labelClass}
            name="lastLogin"
            placeholder="Enter last login date"
            value={formik.values.lastLogin}
            formik={formik}
            inputClass={inputClass}
          />
          <FormError name="lastLogin" />
        </div>

        {/* Date Join */}
        <div className="flex flex-col gap-1">
          <InputFormDate
            label="Join Date"
            labelClass={labelClass}
            name="dateJoin"
            placeholder="Enter join date"
            value={formik.values.dateJoin}
            formik={formik}
            inputClass={inputClass}
          />
          <FormError name="dateJoin" />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1">
          <InputFormNumber
            label="Phone"
            labelClass={labelClass}
            name="phone"
            placeholder="Enter phone number"
            value={formik.values.phone}
            formik={formik}
            inputClass={inputClass}
          />
          <FormError name="phone" />
        </div>

        {/* State */}
        <div className="flex flex-col gap-1">
          <InputFormSelect
            label="State"
            name="state"
            formik={formik}
            labelClass={labelClass}
            inputClass={inputClass}
            options={["Available", "Blocked", "Offline"]}
          />
          <FormError name="state" />
        </div>

        {/* Gender */}
        <div className="flex flex-col gap-1">
          <InputFormSelect
            label="Gender"
            name="gender"
            formik={formik}
            labelClass={labelClass}
            inputClass={inputClass}
            options={["Male", "Female"]}
          />
          <FormError name="gender" />
        </div>

        {/* Buttons */}
        <div className="mt-3 flex justify-end gap-2 sm:col-span-2">
          <button
            type="button"
            onClick={handleClose}
            className="rounded bg-gray-200 px-4 py-1.5 text-sm duration-200 hover:bg-gray-300"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="bg-primary hover:bg-primary/90 rounded px-4 py-1.5 text-sm text-white duration-200"
            disabled={formik.isSubmitting}
          >
            {isEdit ? "Update" : "Add"}
          </button>
        </div>
      </form>
    </FormikProvider>
  );
}


