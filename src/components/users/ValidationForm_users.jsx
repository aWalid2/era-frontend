import * as Yup from "yup";

export const validationSchema_Users =(isEdit)=>
     Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),

    password: isEdit
      ? Yup.string().optional()
      : Yup.string()
          .min(6, "Password must be at least 6 characters")
          .required("Password is required"),

    role: Yup.string().required("Role is required"),
    position: Yup.string().required("Position is required"),
    lastLogin: Yup.date().required("Last login is required"),
    dateJoin: Yup.date().required("Join date is required"),

    salary: Yup.number()
      .typeError("Salary must be a number")
      .min(0, "Salary must be positive")
      .required("Salary is required"),

    phone: Yup.string().required("Phone is required"),
    state: Yup.string().required("State is required"),
    gender: Yup.string().required("Gender is required"),
  });