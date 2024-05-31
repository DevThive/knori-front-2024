// components/InquiryModal.js

import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

const InquiryModal = ({ show, onClose, onSubmit }) => {
  const [inquiry, setInquiry] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [title, setTitle] = useState("");
  const [isPrivate, setIsPrivate] = useState(0); // 비공개 여부 상태 추가
  const [password, setPassword] = useState(""); // 비밀번호 상태 추가

  if (!show) {
    return null;
  }

  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "120%",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // 배경을 어둡게 설정
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
          width: "60%",
          maxWidth: "600px",
        }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(inquiry, name, phone, title, isPrivate, password);
            setInquiry("");
            setName("");
            setPhone("");
            setTitle("");
            setIsPrivate(0); // 초기화할 때도 0을 사용
            setPassword("");
          }}
        >
          <Grid item xs={12} style={{ display: "flex", alignItems: "center" }}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="예약자 성함"
                  name="name"
                  defaultValue=""
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="예약자 핸드폰"
                  type="number"
                  name="phone"
                  defaultValue=""
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </Grid>
            </Grid>
          </Grid>

          <br />
          <TextField
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            label="문의 제목"
            name="title"
            style={{ width: "100%" }} // 텍스트 영역이 모달 너비에 맞게 조정되도록 설정
          />
          <br />
          <br />
          <textarea
            value={inquiry}
            onChange={(e) => setInquiry(e.target.value)}
            rows="10"
            placeholder="문의사항을 입력하세요"
            style={{ width: "100%" }} // 텍스트 영역이 모달 너비에 맞게 조정되도록 설정
          />
          <br />

          {/* 비공개 요청 체크박스 추가 */}
          <FormControlLabel
            control={
              <Checkbox
                checked={isPrivate === 1}
                onChange={(e) => setIsPrivate(e.target.checked ? 1 : 0)} // 체크 상태에 따라 1 또는 0으로 설정
              />
            }
            label="비공개 문의"
          />

          {/* 비공개 선택 시 비밀번호 입력 필드 추가 */}
          {isPrivate === 1 && (
            <TextField
              fullWidth
              label="비밀번호"
              type="password" // 수정된 부분
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          )}

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end", // 버튼을 오른쪽으로 정렬합니다.
              alignItems: "center",
              padding: "1%",
            }}
          >
            <button style={{ margin: "1%" }} type="submit">
              문의하기
            </button>
            <button onClick={onClose} type="button">
              닫기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InquiryModal;
