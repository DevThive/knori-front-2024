import ClassSelector from "../class/class-selector";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Booking = () => {
  const [selectedSchedule, setSelectedSchedule] = useState("");
  const [classSchedules, setClassSchedules] = useState([]);
  const [selectedClassId, setSelectedClassId] = useState("");

  const handleClassSelect = (selectedClassId) => {
    setSelectedClassId(selectedClassId);
  };

  useEffect(() => {
    const fetchClassSchedules = async () => {
      try {
        if (selectedClassId) {
          const response = await axios.get(
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

  return (
    <div
      className="booking__two section-padding"
      style={{ backgroundImage: `url('/img/bg/booking-bg.jpg')` }}
    >
      <div className="container">
        <div className="row mb-60">
          <div className="col-xl-12">
            <div className="booking__two-title">
              <span className="subtitle__one">Reservation Aria</span>
              <h2>나에게 맞는 도자기 클래스 선택하기</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <form action="#">
              <div className="check__area two">
                <div className="check__area-item">
                  <p>
                    총 인원수 <input id="date" type="number" min="1" />
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
                      <option key={schedule.id} value={schedule.time}>
                        {schedule.time}
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
          </div>
        </div>
        {selectedClassId && (
          <div className="row mt-100">
            <div className="col-xl-12">
              <h3>선택된 클래스: {selectedClassId}</h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Booking;
