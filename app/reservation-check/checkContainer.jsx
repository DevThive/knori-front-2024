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
  const [phoneNumber, setPhoneNumber] = useState("");
  const [open, setOpen] = useState(false);
  const [reservationInfo, setReservationInfo] = useState(null);

  const handleChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleSearch = () => {
    // 예시로, 바로 모달을 엽니다. 실제로는 여기서 API 호출을 하고 그 결과를 처리합니다.
    console.log("예약 조회:", phoneNumber);
    // API 호출 후 결과를 예시로 설정합니다.
    // setReservationInfo(결과);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <Container maxWidth="sm" sx={{ mt: 13, mb: 13 }}>
      <TextField
        label="핸드폰 번호"
        variant="outlined"
        fullWidth
        value={phoneNumber}
        onChange={handleChange}
        sx={{ mb: 2 }}
        placeholder="핸드폰 번호를 입력하세요"
      />
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
            {/* 여기에 예약 정보를 표시합니다. 예: */}
            {reservationInfo ? reservationInfo : "조회 결과가 없습니다."}
          </Typography>
        </Box>
      </Modal>
    </Container>
  );
};

export default ReservationCheck;
