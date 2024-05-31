// import React, { useEffect, useState } from "react";
// import TextField from "@mui/material/TextField";
// import Box from "@mui/material/Box";
// // import Button from "@mui/material/Button";
// import Grid from "@mui/material/Grid"; // Grid 컴포넌트 추가

// import instance from "@/app/axios/axiosInstance";

// import { brown } from "@mui/material/colors";
// import { styled } from "@mui/material/styles";
// import Button from "@mui/material/Button";
// import Divider from "@mui/material/Divider";

// const CustomButton = styled(Button)(({ theme }) => ({
//   backgroundColor: brown[500],
//   color: theme.palette.getContrastText(brown[500]),
//   "&:hover": {
//     backgroundColor: brown[700],
//   },
// }));

// const Modal = ({ isOpen, onClose, reservationInfo, setReservationInfo }) => {
//   if (!isOpen) return null;
//   const [className, setClassName] = useState("");
//   console.log(reservationInfo);

//   const [reservationInfo1, setReservationInfo1] = useState({
//     company: "",
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setReservationInfo1((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleReservationSubmit = (e) => {
//     e.preventDefault(); // 폼 제출 시 페이지 리로드 방지
//     console.log(reservationInfo);
//     console.log(reservationInfo1);
//   };

//   useEffect(() => {
//     const fetchClassName = async () => {
//       try {
//         if (reservationInfo.selectedClassId) {
//           const response = await instance.get(
//             `/class/${reservationInfo.selectedClassId}`
//           );
//           setClassName(response.data);
//         }
//       } catch (error) {
//         console.error("클래스 가져오는 api 오류발생");
//       }
//     };
//     fetchClassName();
//   }, []);

//   return (
//     <div
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         backgroundColor: "rgba(0, 0, 0, 0.5)",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         zIndex: 1000,
//       }}
//     >
//       <Box
//         sx={{
//           backgroundColor: "white",
//           padding: "20px",
//           maxWidth: "900px",
//           width: "100%",
//           height: "auto",
//         }}
//       >
//         <Grid container spacing={3}>
//           <Grid item xs={12}>
//             <h3>예약하기</h3>
//           </Grid>
//           <Grid item xs={6}>
//             <TextField
//               fullWidth
//               label="예약기관"
//               name="company"
//               value={reservationInfo1.company}
//               onChange={handleChange}
//               required
//             />
//           </Grid>
//           <Grid item xs={6}>
//             <TextField
//               fullWidth
//               label="예약자 성함"
//               name="name"
//               value={reservationInfo1.name}
//               onChange={handleChange}
//               required
//             />
//           </Grid>
//           <Grid item xs={6}>
//             <TextField
//               fullWidth
//               label="예약기관 이메일"
//               type="email"
//               name="email"
//               value={reservationInfo1.email}
//               onChange={handleChange}
//               required
//             />
//           </Grid>

//           <Grid item xs={6}>
//             <TextField
//               fullWidth
//               label="예약자 핸드폰번호"
//               name="phone"
//               value={reservationInfo1.phone}
//               onChange={handleChange}
//               required
//             />
//           </Grid>

//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="메시지"
//               name="message"
//               multiline
//               rows={6}
//               placeholder="기타 / 점심장소제공 여부 알려주세요."
//               //   value={reservationInfo.message}
//             />
//           </Grid>

//           <Grid item xs={12}>
//             <Divider
//               variant="middle"
//               sx={{
//                 margin: "20px 0",
//                 backgroundColor: "#000000",
//                 height: "2px",
//               }}
//             />
//           </Grid>

//           <Grid item xs={6}>
//             <TextField
//               fullWidth
//               label="예약 클래스"
//               type="text"
//               name="subject"
//               value={`${className.title}`}
//               //   onChange={handleChange}
//               required
//               disabled={true}
//             />
//           </Grid>

//           <Grid item xs={6}>
//             <TextField
//               fullWidth
//               label="예약 날짜"
//               type="date"
//               name="date"
//               value={reservationInfo.selectedDate}
//               //   onChange={handleChange}
//               InputLabelProps={{
//                 shrink: true,
//               }}
//               required
//               disabled={true}
//             />
//           </Grid>

//           <Grid item xs={6}>
//             <TextField
//               fullWidth
//               label="인원수"
//               type="number"
//               name="number"
//               value={reservationInfo.selectedPeople}
//               InputProps={{
//                 inputProps: {
//                   min: 1, // 최소 인원수를 1로 설정
//                 },
//               }}
//               required
//               disabled={true}
//             />
//           </Grid>

//           <Grid item xs={6}>
//             <TextField
//               fullWidth
//               label="예약 시간"
//               type="text"
//               name="subject"
//               value={reservationInfo.selectedTime}
//               //   onChange={handleChange}
//               required
//               disabled={true}
//             />
//           </Grid>

//           <Grid
//             item
//             xs={12}
//             sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}
//           >
//             <Button variant="contained" color="error" onClick={onClose}>
//               취소
//             </Button>
//             <CustomButton
//               variant="contained"
//               color="primary"
//               onClick={handleReservationSubmit}
//             >
//               예약하기
//             </CustomButton>
//           </Grid>
//         </Grid>
//       </Box>
//     </div>
//   );
// };

// export default Modal;

import React, { useEffect, useState } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import Grid from "@mui/material/Grid"; // Grid 컴포넌트 추가

import instance from "@/app/axios/axiosInstance";

import { brown } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import ArrowBack from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  Container,
} from "@mui/material";

import PotteryIcon from "@mui/icons-material/EmojiNature"; // 도자기 관련 아이콘을 사용자가 원하는 것으로 변경 가능
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import WarningIcon from "@mui/icons-material/Warning";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: brown[500],
  color: theme.palette.getContrastText(brown[500]),
  "&:hover": {
    backgroundColor: brown[700],
  },
}));

const Modal = ({ isOpen, onClose, reservationInfo, setReservationInfo }) => {
  if (!isOpen) return null; // 모달이 열려있지 않으면 아무것도 표시하지 않음

  // 현재 모달의 단계를 관리하는 상태
  const [step, setStep] = useState(1);
  const [agreed, setAgreed] = useState(false); // 동의 체크박스 상태

  // 동의 체크박스 핸들러
  const handleAgreeChange = (event) => {
    setAgreed(event.target.checked);
  };

  // 다음 단계로 이동하는 함수
  const checkNextStep = () => {
    if (step === 1 && agreed) {
      setStep(step + 1);
    }
  };

  // 다음 단계로 이동하는 함수
  const handleNextStep = () => {
    setStep(step + 1);
  };

  // 이전 단계로 이동하는 함수
  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const [className, setClassName] = useState("");
  //   console.log(reservationInfo);

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

    // 예약 정보를 담은 객체 예시, 실제 사용하는 변수명에 맞게 수정하세요.
    const phoneNumber = `${reservationInfo1.phone1}${reservationInfo1.phone2}${reservationInfo1.phone3}`;
    const reservationData = {
      agency: reservationInfo1.company,
      client_name: reservationInfo1.name,
      client_email: reservationInfo1.email,
      client_phonenumber: phoneNumber,
      etc: reservationInfo1.message,
      totalPeople: reservationInfo.totalPeople,
      time: reservationInfo.selectedTime,
      date: reservationInfo.selectedDate,
    };
    console.log(reservationData);

    // API 엔드포인트와 예약 데이터를 axios.post 메서드에 전달
    instance
      .post(`/reservation/${reservationInfo.selectedClassId}`, reservationData)
      .then((response) => {
        // 요청이 성공적으로 처리되면 실행될 코드
        console.log(response.data); // 응답 데이터 콘솔에 출력
        // alert("예약이 완료되었습니다."); // 사용자에게 예약 완료 알림
        setStep(5);
      })
      .catch((error) => {
        // 요청 처리 중 오류가 발생하면 실행될 코드
        console.error("예약 처리 중 오류가 발생했습니다.", error);
        // alert("예약 처리 중 오류가 발생했습니다. 나중에 다시 시도해주세요.");
        setStep(4); // 사용자에게 오류 알림
      });
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
      <Box>
        {step === 1 && (
          <Box
            sx={{
              backgroundColor: "white",
              padding: "20px",
              maxWidth: "900px",
              width: "100%",
              height: "auto",
              margin: "auto",
              boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
            }}
          >
            <Typography variant="h5" component="h2" gutterBottom>
              예약 주의사항 및 개인정보 활용 동의
            </Typography>
            <Typography variant="body1" gutterBottom>
              예약하기 전에 다음 사항을 반드시 확인해 주세요.
            </Typography>
            <Typography variant="body2" gutterBottom>
              케이놀이문화재단은 고객님의 개인정보를 중요시 하며, "개인정보
              보호법"을 준수합니다. 서비스 제공을 위해 아래와 같이 개인정보 수집
              및 활용에 대한 동의를 요청합니다.
            </Typography>
            <ul>
              <li>수집 목적: 서비스 제공 및 요금 정산, 회원 관리</li>
              <li>수집 항목: 이름, 이메일 주소, 연락처, 주소 등</li>
              <li>
                보유 기간: 목적 달성 시 즉시 파기(단, 일부 정보는 법적 요구에
                따라 보유할 수 있음)
              </li>
            </ul>
            <FormControlLabel
              control={
                <Checkbox
                  checked={agreed}
                  onChange={handleAgreeChange}
                  color="primary"
                />
              }
              label="위 개인정보 활용 동의합니다."
            />
            <Box mt={2}>
              <Button
                variant="contained"
                onClick={checkNextStep}
                disabled={!agreed}
              >
                확인
              </Button>
            </Box>
          </Box>
        )}
        {step === 2 && (
          <Box
            sx={{
              padding: { xs: "5px", sm: "90px" },
              maxHeight: { xs: "90vh", sm: "90vh" }, // 화면 높이의 90%를 최대 높이로 설정
              height: "auto", // 내용이 넘칠 경우 스크롤 가능
            }}
          >
            <Box
              sx={{
                // backgroundColor: "white",
                padding: "20px",
                maxWidth: "900px",
                width: "100%",
                maxHeight: { xs: "90vh", sm: "90vh" },
                height: "100%",
                overflowY: "auto",
              }}
            >
              <Typography
                variant="h4"
                gutterBottom
                component="div"
                sx={{
                  fontWeight: "bold",
                  textAlign: "center",
                  mb: 3,
                  color: "white", // 여기에 추가
                }}
              >
                도자기 체험 안내
              </Typography>
              <List
                dense
                sx={{
                  bgcolor: "background.paper",
                  borderRadius: "10px",
                  boxShadow: 3,
                }}
              >
                <ListItem>
                  <ListItemIcon>
                    <PotteryIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="도자기 체험 비용에는 재료비, 소성비가 모두 포함되어 있습니다." />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <EventAvailableIcon color="secondary" />
                  </ListItemIcon>
                  <ListItemText primary='K-놀이문화재단 "100% 예약제"로 운영됩니다. (최소 2주 전까지 예약 부탁드립니다.)' />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <QuestionAnswerIcon color="success" />
                  </ListItemIcon>
                  <ListItemText primary="예약 양식 작성 후 문의 주시면 친절히 안내드리겠습니다. (점심장소 필요하시면 반드시 문의부탁드립니다.)" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <WarningIcon color="error" />
                  </ListItemIcon>
                  <ListItemText primary="도자기 특성상 다음과 같은 현상이 나타날 수 있습니다." />
                </ListItem>
                <List dense sx={{ pl: 4 }}>
                  <ListItem>
                    <ListItemText primary="1. 소지, 소성으로 인한 기물의 크기와 모양 차이" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="2. 소성 중 기물의 위치에 따른 페인팅 및 색감 차이" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="3. 유약의 흐름 또는 맺힘 자국과 요철" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="4. 소성 후의 말림 등의 현상" />
                  </ListItem>
                </List>
                <ListItem>
                  <ListItemText primary="(도자기 제작 과정 중 나타나는 자연스러운 현상으로 환불 사유에 해당되지 않는 점 참고 부탁드립니다.)" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LocalShippingIcon color="info" />
                  </ListItemIcon>
                  <ListItemText primary='소성 후 작품 배송비는 "착불"입니다. (선불 X)' />
                </ListItem>
              </List>

              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: 2,
                  mt: 2,
                }} // 마진 상단 추가
              >
                <CustomButton
                  variant="contained"
                  color="primary"
                  onClick={handleNextStep}
                >
                  예약 진행하기
                </CustomButton>
              </Grid>
            </Box>
          </Box>
        )}
        {step === 3 && (
          <Box
            sx={{
              //   padding: { xs: "10px", sm: "30px" },
              maxHeight: { xs: "85vh", sm: "70vh" }, // 화면 높이의 90%를 최대 높이로 설정
              height: "auto", // 내용이 넘칠 경우 스크롤 가능
            }}
          >
            <Grid
              item
              xs={12}
              style={{ display: "flex", alignItems: "center" }}
            >
              <IconButton
                onClick={handlePrevStep}
                sx={{
                  borderRadius: "50%", // 동그란 모양
                  color: "white", // 화살표 색상 흰색
                  backgroundColor: "#8B4513", // 갈색 배경
                  "&:hover": {
                    backgroundColor: "#A0522D", // 호버 시 더 진한 갈색으로 변경
                  },
                  marginRight: "16px", // 오른쪽 여백 조정
                }}
              >
                <ArrowBack />
              </IconButton>
              <h3 style={{ color: "white", padding: "10px" }}>예약하기</h3>
            </Grid>
            <Box
              sx={{
                backgroundColor: "white",
                padding: { xs: "10px", sm: "30px" },
                maxWidth: "80vw", // 화면 너비의 90%를 최대 너비로 설정
                width: "100%",
                maxHeight: "70vh", // 화면 높이의 90%를 최대 높이로 설정
                overflowY: "auto", // 내용이 넘칠 경우 스크롤 가능
              }}
            >
              <Grid container spacing={3}>
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

                <Grid item xs={2}>
                  <TextField
                    fullWidth
                    label="전화번호 앞자리"
                    name="phone1"
                    value={reservationInfo1.phone1}
                    onChange={handleChange}
                    required
                    inputProps={{ maxLength: 3 }} // 최대 길이 제한
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    fullWidth
                    label="가운데 자리"
                    name="phone2"
                    value={reservationInfo1.phone2}
                    onChange={handleChange}
                    required
                    inputProps={{ maxLength: 4 }} // 최대 길이 제한
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    fullWidth
                    label="끝자리"
                    name="phone3"
                    value={reservationInfo1.phone3}
                    onChange={handleChange}
                    required
                    inputProps={{ maxLength: 4 }} // 최대 길이 제한
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
                    value={reservationInfo1.message}
                    onChange={handleChange}
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
              </Grid>
            </Box>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                gap: 2,
                padding: "10px",
              }}
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
          </Box>
        )}
        {step === 4 && (
          <Box
            sx={{
              backgroundColor: "white",
              padding: "20px",
              maxWidth: "900px",
              width: "100%",
              height: "auto",
              margin: "auto",
              boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
            }}
          >
            <Typography variant="h5" component="h2" gutterBottom>
              예약 실패
            </Typography>
            {/* <Typography variant="body1" gutterBottom>
              예약하기 전에 다음 사항을 반드시 확인해 주세요.
            </Typography>
            <Typography variant="body2" gutterBottom>
              케이놀이문화재단은 고객님의 개인정보를 중요시 하며, "개인정보
              보호법"을 준수합니다. 서비스 제공을 위해 아래와 같이 개인정보 수집
              및 활용에 대한 동의를 요청합니다.
            </Typography>
            <ul>
              <li>수집 목적: 서비스 제공 및 요금 정산, 회원 관리</li>
              <li>수집 항목: 이름, 이메일 주소, 연락처, 주소 등</li>
              <li>
                보유 기간: 목적 달성 시 즉시 파기(단, 일부 정보는 법적 요구에
                따라 보유할 수 있음)
              </li>
            </ul> */}
            <Button variant="contained" color="error" onClick={onClose}>
              취소
            </Button>
          </Box>
        )}
        {step === 5 && (
          <Box
            sx={{
              backgroundColor: "white",
              padding: "20px",
              maxWidth: "600px",
              width: "100%",
              height: "auto",
              margin: "auto",
              boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
              textAlign: "center", // 텍스트를 가운데 정렬
            }}
          >
            <Typography variant="h5" component="h2" gutterBottom>
              예약 승인 알림
            </Typography>
            <Typography variant="body1" gutterBottom>
              귀하의 예약이 신청되었습니다. 예약 확인 및 자세한 사항은 등록하신
              연락처로 문자 메시지를 통해 안내 드리겠습니다.
            </Typography>

            <Button
              variant="contained"
              color="primary"
              onClick={onClose}
              sx={{ mt: 2 }}
            >
              닫기
            </Button>
          </Box>
        )}
      </Box>
    </div>
  );
};

export default Modal;
