// components/InquiryModal.js

import React, { useState } from "react";

const InquiryModal = ({ show, onClose, onSubmit }) => {
  const [inquiry, setInquiry] = useState("");

  if (!show) {
    return null;
  }

  return (
    <div
      style={{
        position: "fixed",
        top: "20%",
        left: "30%",
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
      }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(inquiry);
          setInquiry("");
        }}
      >
        <textarea
          value={inquiry}
          onChange={(e) => setInquiry(e.target.value)}
          rows="5"
          placeholder="문의사항을 입력하세요"
          style={{ width: "300px" }}
        />
        <br />
        <button type="submit">문의하기</button>
        <button onClick={onClose} type="button">
          닫기
        </button>
      </form>
    </div>
  );
};

export default InquiryModal;
