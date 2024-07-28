import React from "react";
interface InputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  labelClassNames?: string;
  label?: string;
}
const Textarea = ({ label, labelClassNames, ...props }: InputProps) => {
  return (
    <label
      className={`text-black-400 dark:text-gray-100 font-semibold ${labelClassNames}`}
    >
      {label}
      <textarea
        {...props}
        className=" bg-white border border-gray-200 dark:bg-black-200 focus:outline-none dark:text-gray-300 dark:border-black-300 text-black-400
         block p-2.5 w-full text-sm   rounded-lg   font-normal shadow-card"
      />
    </label>
  );
};

export default Textarea;
