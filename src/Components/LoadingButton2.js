import React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
const LoadingButton2 = ({ emailLoader, bookingLoader, handleSubmit }) => {
  return (
    <LoadingButton
      onClick={(e) => handleSubmit(e)}
      loading={emailLoader ? (bookingLoader ? true : true) : false}
      variant="contained"
      size="large"
      style={{ marginTop: "16px" }}
    >
      Submit
    </LoadingButton>
  );
};

export default LoadingButton2;
