import { useFormikContext } from "formik";

function FormError({ name }) {
  const formik = useFormikContext();

  // Check if field has been touched and has an error
  const hasError = formik.touched[name] && formik.errors[name];

  if (!hasError) {
    return null;
  }

  return <div className="mt-1 text-xs text-red-500">{formik.errors[name]}</div>;
}

export default FormError;
