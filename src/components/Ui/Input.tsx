import React from "react";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelClassNames?: string;
  label?: string;
}
const Input = ({ label, labelClassNames, ...props }: InputProps) => {
  return (
    <label
      className={`text-black-400 dark:text-gray-100 font-semibold ${labelClassNames}`}
    >
      {label}
      <input
        {...props}
        className=" bg-white border border-gray-200 dark:bg-black-200 focus:outline-none dark:text-gray-300 dark:border-black-300 text-black-400 text-sm rounded-lg  w-full p-2.5  font-normal shadow-card"
      />
    </label>
  );
};

export default Input;
