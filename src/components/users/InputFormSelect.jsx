const InputFormSelect = ({
  labelClass,
  formik,
  inputClass,
  name,
  label,
  options = [],
}) => {
  return (
    <>
      <label className={labelClass}>{label}</label>

      <select
        name={name}
        className={inputClass({ name })}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
      >
        <option value="">Select {label}</option>

        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
};

export default InputFormSelect;
