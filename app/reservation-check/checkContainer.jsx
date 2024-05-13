"use client";
import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Modal,
  Box,
  List,
  ListItem,
  ListItemText,
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
  const [reservationInfo, setReservationInfo] = useState([]);

  const [selectedReservation, setSelectedReservation] = useState(null);

  const handleListItemClick = (reservation) => {
    setSelectedReservation(reservation);
  };

  const handleChangePhoneNumber1 = (event) => {
    setPhoneNumber1(event.target.value);
  };

  const handleChangePhoneNumber2 = (event) => {
    setPhoneNumber2(event.target.value);
  };

  const handleChangePhoneNumber3 = (event) => {
    setPhoneNumber3(event.target.value);
  };

  const handleSearch = async () => {
    const phoneNumber = `${phoneNumber1}-${phoneNumber2}-${phoneNumber3}`;
    // console.log("예약 조회:", phoneNumber);

    try {
      const response = await instance.get(
        `/reservation/findbyphonenumber/${phoneNumber}`
      );
      console.log(response.data);
      setReservationInfo(response.data);
    } catch {
      console.log("서버에 오류가 발생했습니다.");
    }

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
        onClose={() => {
          handleClose();
          setSelectedReservation(null); // 모달 닫을 때 선택된 예약 초기화
        }}
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
          {reservationInfo.length > 0 ? (
            <>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                {reservationInfo.map((reservation) => (
                  <ListItem
                    button
                    key={reservation.id}
                    onClick={() => handleListItemClick(reservation)}
                  >
                    <ListItemText
                      primary={reservation.client_name}
                      secondary={reservation.date}
                    />
                  </ListItem>
                ))}
              </List>
              {
                selectedReservation ? (
                  <Box sx={{ mt: 2 }}>
                    <Typography sx={{ mt: 2 }}>
                      이름: {selectedReservation.client_name}
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                      날짜: {selectedReservation.date}
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                      클래스명: {selectedReservation.className}
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                      클래스 시간: {selectedReservation.classTime}
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                      기타(ETC):{" "}
                      {selectedReservation.etc
                        ? selectedReservation.etc
                        : "없음"}
                    </Typography>
                    <Button
                      sx={{ mt: 2 }}
                      variant="contained"
                      onClick={() => {
                        console.log("수정 버튼 클릭");
                      }}
                    >
                      수정
                    </Button>
                  </Box>
                ) : null /* "선택된 예약 정보가 없습니다." 메시지 제거 */
              }
            </>
          ) : (
            <Typography sx={{ mt: 2 }}>예약 정보가 없습니다.</Typography>
          )}
        </Box>
      </Modal>
    </Container>
  );
};

export default ReservationCheck;
