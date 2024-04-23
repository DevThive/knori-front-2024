import ClassSelector from "../class/class-selector";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import instance from "@/app/axios/axiosInstance";
import Modal from "./bookingmodal";

const Booking = () => {
  const [selectedSchedule, setSelectedSchedule] = useState("");
  const [classSchedules, setClassSchedules] = useState([]);
  const [selectedClassId, setSelectedClassId] = useState("");

  const handleClassSelect = (selectedClassId, ref) => {
    setSelectedClassId(selectedClassId);
    console.log(selectedClassId);
  };

  useEffect(() => {
    const fetchClassSchedules = async () => {
      try {
        if (selectedClassId) {
          const response = await instance.get(`/class/${selectedClassId}`);
          setClassSchedules(response.data.class_schedules);
        } else {
          setClassSchedules([]);
        }
      } catch (error) {
        console.error("Error fetching class schedules:", error);
      }
    };

    fetchClassSchedules();
  }, [selectedClassId]);

  console.log(classSchedules);

  // 모달 상태와 예약 정보 상태를 추가합니다.
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reservationInfo, setReservationInfo] = useState({
    selectedClassId: "",
    selectedDate: "",
    selectedTime: "",
    selectedPeople: 0, // 여기에 인원수 상태 추가
  });

  // 예약하기 버튼 클릭 이벤트 핸들러 수정
  const handleReservation = (e) => {
    e.preventDefault(); // 폼 전송 기본 동작을 방지합니다.
    setReservationInfo({
      selectedClassId: selectedClassId,
      selectedDate: document.getElementById("date").value,
      selectedTime: selectedSchedule,
      selectedPeople: document.getElementById("people").value, // 인원수 정보 추가
    });
    setIsModalOpen(true); // 모달을 엽니다.
  };

  // 모달 닫기 함수를 정의합니다.
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className="booking__two section-padding"
      style={{ backgroundImage: `url('/img/bg/booking-bg.jpg')` }}
      id="booking"
    >
      <div className="container">
        <div className="row mb-60">
          <div className="col-xl-12">
            <div className="booking__two-title">
              <span className="subtitle__one">Reservation Aria</span>
              <h2>체험클래스 예약하기</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <form onSubmit={handleReservation}>
              <div className="check__area two">
                <div className="check__area-item">
                  <p>
                    총 인원수{" "}
                    <input
                      defaultValue={"1"}
                      id="people"
                      type="number"
                      min="1"
                    />
                  </p>
                </div>
                <ClassSelector onClassSelect={handleClassSelect} />
                <div className="check__area-item">
                  <p>
                    날짜 선택 <input id="date" type="date" />
                  </p>
                </div>
                <div className="check__area-item">
                  <p>시간 선택</p>
                  <select
                    id="time"
                    value={selectedSchedule}
                    onChange={(e) => setSelectedSchedule(e.target.value)}
                  >
                    <option value="">시간을 선택하세요</option>
                    {classSchedules.map((schedule) => (
                      <option key={schedule.id} value={schedule}>
                        {schedule}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="check__area-item button">
                  <button className="theme-btn" type="submit">
                    예약 진행하기
                  </button>
                </div>
              </div>
            </form>
            <Modal
              isOpen={isModalOpen}
              onClose={closeModal}
              reservationInfo={reservationInfo}
            />
          </div>
        </div>
        {/* {selectedClassId && (
          <div className="row mt-100">
            <div className="col-xl-12">
              <h3>선택된 클래스: {selectedClassId}</h3>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Booking;
