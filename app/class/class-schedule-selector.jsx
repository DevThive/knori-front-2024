import axios from "axios";
import ClassSelector from "../class/class-selector";
import instance from "@/app/axios/axiosInstance";

export default function YourComponent() {
  // 클래스 스케줄 상태를 저장할 변수
  const [classSchedules, setClassSchedules] = useState([]);
  const [selectedClassId, setSelectedClassId] = useState(""); // 선택된 클래스의 ID 상태 변수
  const router = useRouter();

  // 페이지가 렌더링될 때 백엔드 API를 호출하여 클래스 스케줄을 가져옴
  useEffect(() => {
    async function fetchSchedules() {
      try {
        const response = await instance.get(
          `/class-schedule/${selectedClassId}`
        );
        setClassSchedules(response.data);
      } catch (error) {
        console.error("Error fetching class schedules:", error);
      }
    }

    fetchSchedules();
  }, [router, setSelectedClassId]);

  return (
    <div>
      <ClassSelector onClassChange={handleClassChange} />
      <div>
        <h2>Class Schedules</h2>
        <ul>
          {classSchedules.map((schedule) => (
            <li key={schedule.id}>
              <p>Date: {schedule.date}</p>
              <p>Time: {schedule.time}</p>
              <p>Location: {schedule.location}</p>
              {/* 여기에 필요한 스케줄 정보를 추가할 수 있습니다 */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
