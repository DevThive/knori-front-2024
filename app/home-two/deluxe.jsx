import classist from "@/components/data/class-all";
import Link from "next/link";
import { useEffect, useState } from "react";

const Mainclass = () => {
  const [classes, setClasses] = useState([]); // 상태 추가

  useEffect(() => {
    const fetchData = async () => {
      const data = await classist();
      setClasses(data);
    };
    fetchData();
  }, []);

  const handleImageError = (event) => {
    event.target.src = "/img/blog/blog-3.jpg"; // 기본 이미지 URL로 변경
  };

  const classItem = classes.slice(0, 3);
  return (
    <div className="deluxe__three section-padding">
      <div className="container">
        <div className="row align-items-center mb-30">
          <div className="col-xl-6 col-lg-6 col-md-8">
            <div className="deluxe__three-title">
              <span className="subtitle__one">Healing Class</span>
              <h2>클래스 소개</h2>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-4">
            <div className="deluxe__three-right">
              <Link className="theme-btn" href="/class-list">
                자세히보기<i className="fal fa-long-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          {classItem.map((data, index) => (
            <div key={index} className="col-xl-4 col-lg-6 col-md-6 mt-30">
              <div
                className={`deluxe__three-item ${index === 1 ? "center" : ""}`}
              >
                {console.log(data.photo)}
                <div
                  className="deluxe__three-item-image"
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "400px",
                  }}
                >
                  <img
                    style={{ objectFit: "cover" }}
                    src={data.photo}
                    alt="image"
                    onError={handleImageError} // 이미지 로드 실패 시 기본 이미지로 대체
                  />
                  <div className="deluxe__three-item-image-content">
                    <h4>
                      <a href={`/class-details/${data.id}`}>{data.title}</a>
                    </h4>
                    <h5>
                      <span>25,000원/1인</span>
                    </h5>

                    <div className="deluxe__three-item-image-content-bottom">
                      <a
                        className="simple-btn"
                        href={`/class-details/${data.id}`}
                      >
                        <i className="far fa-chevron-right"></i> 자세히보기
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mainclass;
