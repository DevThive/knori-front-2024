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
  const [openDetails, setOpenDetails] = useState({});

  const toggleDetails = (id) => {
    setOpenDetails((prevOpenDetails) => ({
      ...prevOpenDetails,
      [id]: !prevOpenDetails[id],
    }));
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
    const phoneNumber = `${phoneNumber1}${phoneNumber2}${phoneNumber3}`;
    console.log("예약 조회:", phoneNumber);

    try {
      const response = await instance.get(
        `/reservation/findbyphonenumber/${phoneNumber}`
      );

      setReservationInfo(
        Array.isArray(response.data) ? response.data : [response.data]
      );
      setOpen(true);
    } catch (error) {
      console.error("예약 정보 조회 중 오류가 발생했습니다.", error);
    }
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
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            예약 정보
          </Typography>
          {reservationInfo && reservationInfo.length > 0 ? (
            <List>
              {reservationInfo.map((reservation) => (
                <ListItem
                  key={reservation.id}
                  button
                  onClick={() => toggleDetails(reservation.id)}
                >
                  <ListItemText primary={`예약 날짜: ${reservation.date}`} />
                  {openDetails[reservation.id] && (
                    <Box>
                      <Typography>
                        예약자 이름: {reservation.client_name}
                      </Typography>
                      <Typography>
                        예약 인원: {reservation.totalPeople}
                      </Typography>
                      {/* 여기에 더 많은 예약 정보를 추가할 수 있습니다 */}
                    </Box>
                  )}
                </ListItem>
              ))}
            </List>
          ) : (
            <Typography>조회 결과가 없습니다.</Typography>
          )}
        </Box>
      </Modal>
    </Container>
  );
};

export default ReservationCheck;
