import ClassSelector from "../class/class-selector";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import instance from "@/app/axios/axiosInstance";
import Modal from "./bookingmodal";
// 주말인지 확인하는 함수
const isWeekend = (date) => {
  const day = new Date(date).getDay();
  return day === 0 || day === 6; // 일요일(0) 또는 토요일(6)이면 주말로 판단
};
const Booking = () => {
  const [selectedSchedule, setSelectedSchedule] = useState("");
  const [classSchedules, setClassSchedules] = useState([]);
  const [selectedClassId, setSelectedClassId] = useState("");
  const [totalPeople, setTotalPeople] = useState(1); // 총 인원수 상태 추가
  const handleClassSelect = (selectedClassId, ref) => {
    setSelectedClassId(selectedClassId);
    // console.log(selectedClassId);
  };
  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    if (isWeekend(selectedDate)) {
      alert("주말은 예약할 수 없습니다.");
      e.target.value = ""; // 선택한 날짜를 비웁니다.
    }
  };
  //오늘날짜에 1을 더해서 기본값으로 설정
  const today = new Date();
  today.setDate(today.getDate() + 14);
  const minDateString = today.toISOString().split("T")[0];
  // // 2주 뒤 날짜부터 선택불가.
  // const maxDate = new Date();
  // maxDate.setDate(today.getDate() + 14);
  // // maxDate를 ISO 형식으로 변환합니다.
  // const maxDateString = maxDate.toISOString().split("T")[0];
  useEffect(() => {
    const fetchClassSchedules = async () => {
      try {
        if (selectedClassId) {
          const response = await instance.get(
            `/class-schedule/${selectedClassId}`
          );
          setClassSchedules(response.data);
        } else {
          setClassSchedules([]);
        }
      } catch (error) {
        console.error("Error fetching class schedules:", error);
      }
    };
    fetchClassSchedules();
  }, [selectedClassId]);
  // console.log(classSchedules);
  // 모달 상태와 예약 정보 상태를 추가합니다.
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reservationInfo, setReservationInfo] = useState({
    selectedClassId: "",
    selectedDate: "",
    selectedTime: "",
    totalPeople: 0,
  });
  // 예약하기 버튼 클릭 이벤트 핸들러 수정
  const handleReservation = (e) => {
    e.preventDefault(); // 폼 전송 기본 동작을 방지합니다.
    if (totalPeople > 20) {
      // 20명 초과인 경우에만 예약 가능
      if (
        totalPeople > 0 &&
        selectedClassId &&
        document.getElementById("date").value &&
        selectedSchedule
      ) {
        // 총인원수, 클래스명, 날짜, 시간이 모두 선택된 경우에만 예약 가능
        setReservationInfo({
          selectedClassId: selectedClassId,
          selectedDate: document.getElementById("date").value,
          selectedTime: selectedSchedule,
          totalPeople: document.getElementById("people").value,
        });
        setIsModalOpen(true);
      } else {
        alert("필수 정보를 모두 입력해주세요.");
      }
    } else {
      alert("죄송합니다. 20명 이하 개인 예약자는 현재 예약할 수 없습니다.");
    }
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
                      onChange={(e) => setTotalPeople(parseInt(e.target.value))} // 총 인원수 변경 시 상태 업데이트
                    />
                  </p>
                </div>
                <ClassSelector onClassSelect={handleClassSelect} />
                <div className="check__area-item">
                  <p>
                    날짜 선택{" "}
                    <input
                      id="date"
                      type="date"
                      onChange={handleDateChange}
                      min={minDateString}
                    />
                  </p>
                </div>
                <div className="check__area-item">
                  <div className="check__area-item-room">
                    <p>시간 선택</p>
                    <select
                      id="time"
                      value={selectedSchedule}
                      onChange={(e) => setSelectedSchedule(e.target.value)}
                    >
                      <option value="">시간을 선택하세요</option>
                      {classSchedules.map((schedule) => (
                        <option key={schedule.id} value={schedule.time}>
                          {schedule.time}
                        </option>
                      ))}
                    </select>
                  </div>
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
