import { useState } from "react";

const useAlert = () => {
  const [alert, setAlert] = useState({ show: false, text: "", type: "danger" });
  const showAlert = ({
    text,
    type = "danger",
  }: {
    text: string;
    type: string;
  }) => {
    setAlert({ show: true, text, type });
  };
  const hideAlert = () => {
    setAlert({ text: "", show: false, type: "danger" });
  };
  return { alert, showAlert, hideAlert };
};

export default useAlert;
