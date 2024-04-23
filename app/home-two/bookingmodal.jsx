import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid"; // Grid 컴포넌트 추가

const Modal = ({ isOpen, onClose, reservationInfo, setReservationInfo }) => {
  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservationInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleReservationSubmit = (e) => {
    e.preventDefault(); // 폼 제출 시 페이지 리로드 방지
    console.log("Reservation submitted:", reservationInfo);
    // 예약 로직 추가
    onClose(); // 폼 제출 후 모달 닫기
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          padding: "20px",
          maxWidth: "900px",
          width: "100%",
          height: "auto",
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h3>예약하기</h3>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="예약자 성함"
              name="name"
              value={reservationInfo.name}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="예약자 이메일"
              type="email"
              name="email"
              value={reservationInfo.email}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="예약자 핸드폰번호"
              name="phone"
              value={reservationInfo.phone}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="예약 클래스"
              name="subject"
              value={reservationInfo.subject}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="메시지"
              name="message"
              multiline
              rows={4}
              value={reservationInfo.message}
              onChange={handleChange}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={handleReservationSubmit}
            >
              예약하기
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Modal;
