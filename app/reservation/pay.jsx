"use client";

import axios from "axios";
import { useState } from "react";

const Contactcontainer = () => {
  const [reservationData, setReservationData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleReservationSubmit = async (e) => {
    e.preventDefault(); // 폼 기본 동작 방지
    try {
      // 예약 정보를 서버에 전송
      const response = await axios.post(
        "reservation/:classId",
        reservationData
      );
      console.log("예약 정보 전송 성공:", response.data);
      // 성공적으로 예약 정보를 전송한 후 필요한 작업 수행
    } catch (error) {
      router.push("/404-error");
    }
  };

  return (
    <>
      <div className="contact__area section-padding pb-0">
        <div className="container">
          <div
            className="contact__area-form"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="col-xl-10 col-lg-8">
              <h3 className="mb-35">예약하기</h3>
              <form onSubmit={handleReservationSubmit}>
                <div className="row">
                  <div className="col-sm-6 mb-30">
                    <div className="contact__area-form-item">
                      <i className="fal fa-user"></i>
                      <input
                        type="text"
                        name="name"
                        placeholder="예약자 성함"
                        required
                        value={reservationData.name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 sm-mb-30">
                    <div className="contact__area-form-item">
                      <i className="far fa-envelope-open"></i>
                      <input
                        type="email"
                        name="email"
                        placeholder="예약자 이메일"
                        required
                        value={reservationData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 mb-30">
                    <div className="contact__area-form-item">
                      <i className="far fa-phone-alt"></i>
                      <input
                        type="text"
                        name="phone"
                        placeholder="예약자 핸드폰번호"
                        required
                        value={reservationData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 sm-mb-30">
                    <div className="contact__area-form-item">
                      <i className="far fa-address-book"></i>
                      <input
                        type="text"
                        name="subject"
                        placeholder="예약 클래스"
                        required
                        value={reservationData.subject}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 mb-30">
                    <div className="contact__area-form-item">
                      <i className="far fa-comments"></i>
                      <textarea
                        name="message"
                        placeholder="Type your comments...."
                        value={reservationData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12 text-end">
                    <div className="contact__area-form-item">
                      <button className="theme-btn" type="submit">
                        예약하기<i className="fal fa-long-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactcontainer;
