import * as React from "react";
import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";
import * as LottiePlayer from "@lottiefiles/lottie-player";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ modalState, setModalState }) {
  return (
    <div>
      <Modal
        open={modalState}
        onClose={() => setModalState(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <lottie-player
            autoplay
            loop
            mode="normal"
            src="https://assets7.lottiefiles.com/packages/lf20_x4fnw3zb.json"
            style={{ minHeight: "300px" }}
          ></lottie-player>
          <h1>Booking Confirmed</h1>
        </Box>
      </Modal>
    </div>
  );
}
