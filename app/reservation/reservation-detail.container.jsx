import React, { useState } from "react";
import axios from "axios";

const Contactcontainer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleReservationSubmit = async (e) => {
    e.preventDefault();
    try {
      // 결제 처리 로직
      const paymentSuccess = await processPayment();
      if (paymentSuccess) {
        const response = await axios.post("/reservation/:classId", formData);
        console.log(response.data);
        await submitReservation();
        alert("예약이 완료되었습니다!");
      } else {
        alert("결제가 실패했습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      console.error(
        "Error processing payment or submitting reservation:",
        error
      );
      alert("결제 또는 예약 처리 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  const processPayment = async () => {
    try {
      // 실제 결제 API를 호출하여 결제 처리
      const response = await axios.post("/payment", formData);
      // 결제 성공 여부를 확인하고 반환
      if (response.data.success) {
        return true; // 결제가 성공했을 경우
      } else {
        return false; // 결제가 실패했을 경우
      }
    } catch (error) {
      console.error("Error processing payment:", error);
      return false; // 결제 처리 중 에러가 발생했을 경우
    }
  };

  const submitReservation = async () => {
    // 여기에는 예약 정보를 백엔드로 보내어 처리하는 로직을 추가할 수 있습니다.
    // axios.post를 사용하여 백엔드에 예약 정보를 전달합니다.
    const response = await axios.post("/reservation/:classId", formData);
    console.log(response.data); // 요청에 대한 응답을 콘솔에 출력
    // 이후 필요한 작업을 수행할 수 있습니다.
  };

  return (
    <div className="contact__area section-padding pb-0">
      <div className="container">
        <div className="col-xl-10 col-lg-8">
          <div className="contact__area-form">
            <h3 className="mb-35">예약 및 결제하기</h3>
            <form onSubmit={handleReservationSubmit}>
              {/* 입력 필드들 */}
              <button className="theme-btn" type="submit">
                예약하기<i className="fal fa-long-arrow-right"></i>
              </button>
            </form>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactcontainer;
