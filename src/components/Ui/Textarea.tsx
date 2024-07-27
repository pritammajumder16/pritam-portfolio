import React from "react";
interface InputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  labelClassNames?: string;
  label?: string;
}
const Textarea = ({ label, labelClassNames, ...props }: InputProps) => {
  return (
    <label className={`text-black-500 font-semibold ${labelClassNames}`}>
      {label}
      <textarea
        {...props}
        className=" block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-200 focus:ring-blue-500 focus:border-blue-500 mt-2.5 font-normal shadow-card"
      />
    </label>
  );
};

export default Textarea;
