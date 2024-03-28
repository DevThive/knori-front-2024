import React, { useEffect, useState } from "react";
import axios from "axios";
import instance from "@/app/axios/axiosInstance";
import { useRouter } from "next/navigation";

const ClassSelector = () => {
  const [classList, setClassList] = useState([]);
  const [selectedClass, setSelectedClass] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchClassList = async () => {
      try {
        const response = await instance.get("class"); // 클래스 목록을 가져오는 API 엔드포인트
        setClassList(response.data); // 가져온 클래스 목록 설정
        console.log("response.data", response.data);
      } catch (error) {
        console.error("클래스 목록을 가져오는 데 실패했습니다:", error);
      }
    };

    fetchClassList(); // 클래스 목록을 가져오는 함수 호출
  }, [router]);

  const handleClassChange = (e) => {
    setSelectedClass(e.target.value); // 선택한 클래스 업데이트
  };

  return (
    <div className="check__area-item">
      <div className="check__area-item-room">
        <p>클래스 선택</p>
        <select
          name="select"
          value={selectedClass}
          onChange={handleClassChange}
        >
          <option value="">클래스를 선택하세요</option>
          {classList.map((classItem) => (
            <option key={classItem.id} value={classItem.id}>
              {classItem.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ClassSelector;
