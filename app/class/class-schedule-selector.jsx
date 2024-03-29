import axios from "axios";
import ClassSelector from "../class/class-selector";
import instance from "@/app/axios/axiosInstance";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function ClassSchedule() {
  const [classSchedules, setClassSchedules] = useState([]);
  const [classId, setClassId] = useState("");
  const router = useRouter();

  // 페이지가 렌더링될 때 백엔드 API를 호출하여 클래스 스케줄을 가져옴
  useEffect(() => {
    async function fetchSchedules() {
      try {
        const response = await instance.get(`/class-schedule/${classId}`);
        setClassSchedules(response.data);
        console.log("schedule response.data", response.data);
      } catch (error) {
        console.error("Error fetching class schedules:", error);
      }
    }

    if (classId) {
      fetchSchedules();
    }
  }, [router, classId]); // classId도 의존성 배열에 추가

  // 클래스가 변경될 때 호출되는 함수
  const handleClassChange = (selectedClassId) => {
    setClassId(selectedClassId);
  };

  return (
    <div>
      <ClassSelector onClassChange={handleClassChange} />
      <div>
        <h2>Class Schedules</h2>
        <ul>
          {classSchedules.map((schedule) => (
            <li key={schedule.id}>
              console.log(schedule)
              <p>Time: {schedule.time}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
