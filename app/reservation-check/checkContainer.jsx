"use client";
import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  Paper,
  Divider,
} from "@mui/material";
import instance from "../axios/axiosInstance";

const detailBoxStyle = {
  mt: 2,
  p: 2,
  bgcolor: "#f0f0f0",
  borderRadius: "5px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
};

const ReservationCheck = () => {
  const [phoneNumber, setPhoneNumber] = useState({
    first: "010",
    middle: "",
    last: "",
  });
  const [reservationInfo, setReservationInfo] = useState([]);
  const [openDetails, setOpenDetails] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleChange = (part, value) => {
    setPhoneNumber((prev) => ({ ...prev, [part]: value }));
  };

  const handleSearch = async () => {
    const fullPhoneNumber = `${phoneNumber.first}${phoneNumber.middle}${phoneNumber.last}`;
    console.log("예약 조회:", fullPhoneNumber);

    try {
      const response = await instance.get(
        `/reservation/findbyphonenumber/${fullPhoneNumber}`
      );
      setReservationInfo(
        Array.isArray(response.data) ? response.data : [response.data]
      );
      setShowResults(true); // 조회 결과를 표시
      console.log(response.data);
    } catch (error) {
      console.error("예약 정보 조회 중 오류가 발생했습니다.", error);
    }
  };

  const handleClose = () => {
    setShowResults(false); // 조회 결과를 숨김
  };

  const toggleDetails = (id) => {
    setOpenDetails((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 13, mb: 13 }}>
      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        {["first", "middle", "last"].map((part) => (
          <TextField
            key={part}
            label={`${part}`}
            variant="outlined"
            value={phoneNumber[part]}
            onChange={(e) => handleChange(part, e.target.value)}
            sx={{ flex: 1 }}
          />
        ))}
      </Box>
      <Button
        variant="contained"
        fullWidth
        onClick={showResults ? handleClose : handleSearch} // 버튼 클릭 시 showResults 상태에 따라 다른 함수 호출
        sx={{
          backgroundColor: "#8B4513",
          "&:hover": { backgroundColor: "#8B4513", opacity: 0.9 },
        }}
      >
        {showResults ? "닫기" : "조회"}
      </Button>

      {showResults && reservationInfo && reservationInfo.length > 0 ? (
        <List sx={{ marginTop: "20px" }}>
          {reservationInfo.map((reservation) => (
            <ListItem
              key={reservation.id}
              sx={{
                display: "flex",
                flexDirection: "column", // 이 부분을 row로 변경하면 모든 항목이 가로로 배치됩니다.
                alignItems: "flex-start",
                mb: 2,
                p: 2,
                border: "1px solid #ddd",
                borderRadius: "5px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                "&:hover": {
                  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                  transform: "translateY(-2px)",
                  transition: "all 0.2s ease-in-out",
                },
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <ListItemText
                  primary={`예약 날짜: ${reservation.date}`}
                  sx={{ mb: 1 }}
                />
                <Button
                  size="small"
                  variant="contained"
                  sx={{
                    backgroundColor: "#8B4513",
                    "&:hover": { backgroundColor: "#A0522D" },
                    marginBottom: "10px",
                  }}
                  onClick={() => toggleDetails(reservation.id)}
                >
                  상세보기
                </Button>
              </div>
              {openDetails[reservation.id] && (
                <div style={{ width: "100%" }}>
                  {" "}
                  {/* 이 부분을 수정했습니다. */}
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    예약자 이름: {reservation.client_name}
                  </Typography>
                  <Divider sx={{ mb: 1 }} />
                  <Typography variant="body1" color="textSecondary">
                    예약 날짜: {reservation.date}
                  </Typography>
                  <Divider sx={{ mb: 2 }} />
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    예약 장소: {reservation.location}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    예약 인원: {reservation.number_of_people}
                  </Typography>
                  <Box
                    sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}
                  >
                    <Button variant="outlined" size="small">
                      수정하기
                    </Button>
                  </Box>
                </div>
              )}
            </ListItem>
          ))}
        </List>
      ) : showResults ? (
        <Typography>조회 결과가 없습니다.</Typography>
      ) : null}
    </Container>
  );
};

export default ReservationCheck;
