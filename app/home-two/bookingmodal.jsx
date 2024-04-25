import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid"; // Grid 컴포넌트 추가

import instance from "@/app/axios/axiosInstance";

import { brown } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: brown[500],
  color: theme.palette.getContrastText(brown[500]),
  "&:hover": {
    backgroundColor: brown[700],
  },
}));

const Modal = ({ isOpen, onClose, reservationInfo, setReservationInfo }) => {
  if (!isOpen) return null;
  const [className, setClassName] = useState("");
  console.log(reservationInfo);

  const [reservationInfo1, setReservationInfo1] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservationInfo1((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleReservationSubmit = (e) => {
    e.preventDefault(); // 폼 제출 시 페이지 리로드 방지
    console.log(reservationInfo);
    console.log(reservationInfo1);
  };

  useEffect(() => {
    const fetchClassName = async () => {
      try {
        if (reservationInfo.selectedClassId) {
          const response = await instance.get(
            `/class/${reservationInfo.selectedClassId}`
          );
          setClassName(response.data);
        }
      } catch (error) {
        console.error("클래스 가져오는 api 오류발생");
      }
    };
    fetchClassName();
  }, []);

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
              label="예약기관"
              name="company"
              value={reservationInfo1.company}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="예약자 성함"
              name="name"
              value={reservationInfo1.name}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="예약기관 이메일"
              type="email"
              name="email"
              value={reservationInfo1.email}
              onChange={handleChange}
              required
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              label="예약자 핸드폰번호"
              name="phone"
              value={reservationInfo1.phone}
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
              rows={6}
              placeholder="기타 / 점심장소제공 여부 알려주세요."
              //   value={reservationInfo.message}
            />
          </Grid>

          <Grid item xs={12}>
            <Divider
              variant="middle"
              sx={{
                margin: "20px 0",
                backgroundColor: "#000000",
                height: "2px",
              }}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              label="예약 클래스"
              type="text"
              name="subject"
              value={`${className.title}`}
              //   onChange={handleChange}
              required
              disabled={true}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              label="예약 날짜"
              type="date"
              name="date"
              value={reservationInfo.selectedDate}
              //   onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              required
              disabled={true}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              label="인원수"
              type="number"
              name="number"
              value={reservationInfo.selectedPeople}
              InputProps={{
                inputProps: {
                  min: 1, // 최소 인원수를 1로 설정
                },
              }}
              required
              disabled={true}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              label="예약 시간"
              type="text"
              name="subject"
              value={reservationInfo.selectedTime}
              //   onChange={handleChange}
              required
              disabled={true}
            />
          </Grid>

          <Grid
            item
            xs={12}
            sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}
          >
            <Button variant="contained" color="error" onClick={onClose}>
              취소
            </Button>
            <CustomButton
              variant="contained"
              color="primary"
              onClick={handleReservationSubmit}
            >
              예약하기
            </CustomButton>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Modal;
