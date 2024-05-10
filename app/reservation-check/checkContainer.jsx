"use client";
import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Modal,
  Box,
} from "@mui/material";
import instance from "../axios/axiosInstance";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const ReservationCheck = () => {
  const [phoneNumber1, setPhoneNumber1] = useState("010");
  const [phoneNumber2, setPhoneNumber2] = useState("");
  const [phoneNumber3, setPhoneNumber3] = useState("");
  const [open, setOpen] = useState(false);
  const [reservationInfo, setReservationInfo] = useState(null);

  const handleChangePhoneNumber1 = (event) => {
    setPhoneNumber1(event.target.value);
  };

  const handleChangePhoneNumber2 = (event) => {
    setPhoneNumber2(event.target.value);
  };

  const handleChangePhoneNumber3 = (event) => {
    setPhoneNumber3(event.target.value);
  };

  const handleSearch = () => {
    const phoneNumber = `${phoneNumber1}-${phoneNumber2}-${phoneNumber3}`;
    console.log("예약 조회:", phoneNumber);

    const response = instance.post("/reservation", phoneNumber);

    // 여기서 API 호출하고 결과를 처리합니다.
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <Container maxWidth="sm" sx={{ mt: 13, mb: 13 }}>
      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        <TextField
          label="앞자리"
          variant="outlined"
          value={phoneNumber1}
          onChange={handleChangePhoneNumber1}
          sx={{ flex: 1 }}
        />
        <TextField
          label="중간자리"
          variant="outlined"
          value={phoneNumber2}
          onChange={handleChangePhoneNumber2}
          sx={{ flex: 1 }}
        />
        <TextField
          label="끝자리"
          variant="outlined"
          value={phoneNumber3}
          onChange={handleChangePhoneNumber3}
          sx={{ flex: 1 }}
        />
      </Box>
      <Button
        variant="contained"
        fullWidth
        onClick={handleSearch}
        sx={{
          backgroundColor: "#8B4513",
          "&:hover": { backgroundColor: "#8B4513", opacity: 0.9 },
        }}
      >
        조회
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        BackdropProps={{
          style: { backgroundColor: "rgba(255, 255, 255, 0.5)" },
        }}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            예약 정보
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {reservationInfo ? reservationInfo : "조회 결과가 없습니다."}
          </Typography>
        </Box>
      </Modal>
    </Container>
  );
};

export default ReservationCheck;
