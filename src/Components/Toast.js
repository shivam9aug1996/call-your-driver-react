import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Toast = () => {
  return (
    <ToastContainer
      className="foo"
      autoClose={2000}
      closeOnClick
      hideProgressBar={true}
    />
  );
};

export default Toast;
export const notify = (message) =>
  toast(message, {
    className: "black-background",
    bodyClassName: "grow-font-size",
    progressClassName: "fancy-progress-bar",
  });
