import React from "react";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelClassNames?: string;
  label?: string;
}
const Input = ({ label, labelClassNames, ...props }: InputProps) => {
  return (
    <label className={`text-black-500 font-semibold ${labelClassNames}`}>
      {label}
      <input
        {...props}
        className=" bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2.5 font-normal shadow-card"
      />
    </label>
  );
};

export default Input;
