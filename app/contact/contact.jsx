"use client";
import React, { useState, useEffect } from "react";
import instance from "../axios/axiosInstance";
import InquiryModal from "./contact_modal"; // 경로 확인 필요
import axios from "axios";
import { Card } from "@mui/material";

const contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [inquiries, setInquiries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [openInquiryId, setOpenInquiryId] = useState(null); // 추가
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [password, setPassword] = useState("");
  const [pwModalId, setpwModalId] = useState(null);

  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        const response = await instance.get("/contact/contactlists");
        setInquiries(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("문의 리스트를 불러오는데 실패했습니다.", error);
      }
    };

    fetchInquiries();
  }, []);

  const toggleInquiryDetails = (inquiry) => {
    if (inquiry.public === 1) {
      // public 상태가 1이면 비밀번호 모달을 띄운다.
      if (openInquiryId === inquiry.id) {
        setOpenInquiryId(null); // 이미 열려있다면 닫기
      } else {
        setShowPasswordModal(true);
        setpwModalId(inquiry.id); // 닫혀있다면 열기
      }
    } else {
      // public 상태가 1이 아니라면 기존 로직을 수행한다.
      if (openInquiryId === inquiry.id) {
        setOpenInquiryId(null); // 이미 열려있다면 닫기
      } else {
        setOpenInquiryId(inquiry.id); // 닫혀있다면 열기
      }
    }
  };

  // const toggleInquiryDetails = (id) => {
  //   if (openInquiryId === id) {
  //     setOpenInquiryId(null); // 이미 열려있다면 닫기
  //   } else {
  //     setOpenInquiryId(id); // 닫혀있다면 열기
  //   }
  // };

  //비밀번호 확인 로직
  const checkPassword = async (id) => {
    // 비밀번호 검증 로직 구현, 예시는 간단히 비교합니다.
    // 실제로는 서버에 비밀번호가 맞는지 확인하는 요청을 보내야 합니다.
    console.log(password);
    try {
      const response = await instance.post(`/contact/password/${id}`, {
        password: password,
      });

      // console.log(response);

      if (response.data == true) {
        setShowPasswordModal(false);
        // 비밀번호가 맞다면 답변 세부 정보를 보여줄 수 있도록 처리
        // console.log(id);
        setOpenInquiryId(id);
        setPassword("");
      } else {
        alert("비밀번호가 틀렸습니다.");
        setPassword("");
      }
    } catch (error) {
      console.log("서버에 오류가 있습니다.");
    }
    // // 비밀번호가 틀리면 사용자에게 알림}
    // if (password === "1234") {
    //   setShowPasswordModal(false);
    //   // 비밀번호가 맞다면 답변 세부 정보를 보여줄 수 있도록 처리
    //   console.log(id);
    //   setOpenInquiryId(id);
    //   setPassword("");
    // } else {

    // }
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmitInquiry = async (
    inquiry,
    name,
    phone,
    title,
    isPrivate,
    password
  ) => {
    console.log(inquiry, name, phone, title, isPrivate, password);
    try {
      // 주의: 여기도 `instance.post`로 변경해야 할 수 있습니다.
      const response = await instance.post("contact/addcontact", {
        content_title: title,
        content: inquiry,
        user_name: name,
        user_phone: phone,
        public: isPrivate,
        password: password,
      });
      setInquiries([...inquiries, response.data]); // 응답 구조에 따라 조정 필요
      setShowModal(false);
    } catch (error) {
      console.error("문의를 추가하는데 실패했습니다.", error);
    }
  };

  const lastInquiryIndex = currentPage * itemsPerPage;
  const firstInquiryIndex = lastInquiryIndex - itemsPerPage;
  const currentInquiries = inquiries.slice(firstInquiryIndex, lastInquiryIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextPage = () => {
    setCurrentPage((prev) =>
      prev * itemsPerPage >= inquiries.length ? prev : prev + 1
    );
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev === 1 ? prev : prev - 1));
  };

  return (
    <div style={{ width: "80%", margin: "auto", outline: "none" }}>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end", // 버튼을 오른쪽으로 정렬합니다.
            alignItems: "center",
            padding: "1%",
          }}
        >
          <button onClick={handleOpenModal}>문의하기</button>
        </div>
        <InquiryModal
          show={showModal}
          onClose={handleCloseModal}
          onSubmit={handleSubmitInquiry}
        />
        <div>
          {/* 헤더 */}
          <div
            style={{
              display: "flex",
              padding: "10px",
              background: "#f0f0f0",
              fontWeight: "bold",
            }}
          >
            <div style={{ flex: 1 }}>ID</div>
            <div style={{ flex: 5 }}>문의 제목</div>
            <div style={{ flex: 2 }}>작성자</div>
            <div style={{ flex: 2 }}>날짜</div>
            <div style={{ flex: 1 }}>상태</div>
          </div>
          {/* 문의 리스트 */}
          {currentInquiries.map((inquiry) => (
            <React.Fragment key={inquiry.id}>
              <div
                key={inquiry.id}
                style={{
                  display: "flex",
                  borderBottom: "1px solid #ddd",
                  padding: "10px",
                  cursor: "pointer", // 커서 포인터 추가
                }}
                onClick={() => toggleInquiryDetails(inquiry)} // 클릭 이벤트 추가
              >
                <div style={{ flex: 1 }}>{inquiry.id}</div>
                <div style={{ flex: 5 }}>{inquiry.content_title}</div>
                <div style={{ flex: 2 }}>{inquiry.user_name}</div>
                <div style={{ flex: 2 }}>
                  {new Date(inquiry.createdAt).toLocaleDateString("ko-KR", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })}
                </div>
                <div style={{ flex: 1 }}>
                  {inquiry.contact_answer === "" ? "미답변" : "답변완료"}
                </div>
              </div>

              {openInquiryId === inquiry.id && (
                <div
                  style={{
                    padding: "20px",
                    background: "#fff",
                    borderRadius: "8px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    marginTop: "10px",
                    marginBottom: "10px",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  {/* 답변 내용이 있을 경우 답변 내용 렌더링, 없으면 대기 메시지 렌더링 */}
                  {inquiry.contact_answer.trim() ? (
                    <>
                      <h3 style={{ fontSize: "18px", color: "#333" }}>답변</h3>
                      <p
                        style={{
                          fontSize: "16px",
                          color: "#333",
                          lineHeight: "1.5",
                        }}
                      >
                        {inquiry.contact_answer}
                      </p>
                    </>
                  ) : (
                    <p
                      style={{
                        fontSize: "16px",
                        color: "#333",
                        lineHeight: "1.5",
                      }}
                    >
                      미답변 상태입니다.{" "}
                      <span>
                        기다려 주시면 최대한 빠르게 답변 드리겠습니다.
                      </span>
                    </p>
                  )}
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        {/* 페이지네이션 컨트롤 */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "20px 0",
          }}
        >
          <button style={{ margin: "1%" }} onClick={prevPage}>
            &lt; 이전
          </button>
          <button style={{ margin: "1%" }} onClick={nextPage}>
            다음 &gt;
          </button>
        </div>
      </div>
      {showPasswordModal && (
          {/* 비밀번호 입력 모달 UI 구현 */}
        <>
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.5)", // 어두운 오버레이 배경
              zIndex: 1000, // 모달 창보다 한 단계 아래에 위치하도록 설정
            }}
          ></div>
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
              width: "50%",
              maxWidth: "600px",
              zIndex: 1001, // 오버레이 위에 모달 창이 표시되도록 설정
            }}
          >
            {/* 비밀번호 입력 모달 UI 구현 */}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호"
            />
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                padding: "1%",
              }}
            >
              <div style={{ padding: "1%" }}>
                <button
                  onClick={() => {
                    setShowPasswordModal(false);
                  }}
                  style={{ marginRight: "10px" }}
                >
                  취소
                </button>
                <button
                  onClick={() => {
                    checkPassword(pwModalId);
                    setShowPasswordModal(false);
                  }}
                >
                  확인
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default contact;
