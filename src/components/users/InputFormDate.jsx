const InputFormDate = ({
  labelClass,
  formik,
  inputClass,
  placeholder,
  name,
  label,
  value,
}) => {
  return (
    <>
      <label className={labelClass}>{label}</label>
      <input
        name={name}
        type="date"
        placeholder={placeholder}
        className={inputClass({ name })}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={value}
      />
    </>
  );
};

export default InputFormDate;
