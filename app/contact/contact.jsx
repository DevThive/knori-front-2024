"use client";
import React, { useState, useEffect } from "react";
import instance from "../axios/axiosInstance";
import InquiryModal from "./contact_modal"; // 경로 확인 필요

const contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [inquiries, setInquiries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        const response = await instance.get("/contact/contactlists");
        setInquiries(response.data);
      } catch (error) {
        console.error("문의 리스트를 불러오는데 실패했습니다.", error);
      }
    };

    fetchInquiries();
  }, []);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmitInquiry = async (inquiry) => {
    try {
      // 주의: 여기도 `instance.post`로 변경해야 할 수 있습니다.
      const response = await instance.post("/contact/contactlists", {
        content: inquiry,
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
    <div>
      <button onClick={handleOpenModal}>문의하기</button>
      <InquiryModal
        show={showModal}
        onClose={handleCloseModal}
        onSubmit={handleSubmitInquiry}
      />
      <div>
        <h2>문의 리스트</h2>
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
          <div style={{ flex: 3 }}>문의 제목</div>
          <div style={{ flex: 2 }}>작성자</div>
          <div style={{ flex: 2 }}>날짜</div>
        </div>
        {/* 문의 리스트 */}
        {currentInquiries.map((inquiry) => (
          <div
            key={inquiry.id}
            style={{
              display: "flex",
              borderBottom: "1px solid #ddd",
              padding: "10px",
            }}
          >
            <div style={{ flex: 1 }}>{inquiry.id}</div>
            <div style={{ flex: 3 }}>{inquiry.content_title}</div>
            <div style={{ flex: 2 }}>{inquiry.user_name}</div>
            <div style={{ flex: 2 }}>{inquiry.createdAt}</div>
          </div>
        ))}
      </div>
      {/* 페이지네이션 컨트롤 */}
      <div
        style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}
      >
        <button onClick={prevPage}>&lt; 이전</button>
        <button onClick={nextPage}>다음 &gt;</button>
      </div>
    </div>
  );
};

export default contact;
