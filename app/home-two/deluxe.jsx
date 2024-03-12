import classist from "@/components/data/class-all";
import Image from "next/image";
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

  const classItem = classes.reverse().slice(0, 3);
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
              <Link className="theme-btn" href="/about">
                자세히보기<i className="fal fa-long-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          {classItem.map((item, index) => (
            <div key={index} className="col-xl-4 col-lg-6 col-md-6 mt-30">
              <div
                className={`deluxe__three-item ${index === 1 ? "center" : ""}`}
              >
                <div
                  className="deluxe__three-item-image"
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "400px",
                  }}
                >
                  <Image
                    src={item.photo}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="deluxe__three-item-image-content">
                    <h4>
                      <a href="/room-details">{item.title}</a>
                      <span>$32/Night</span>
                    </h4>
                    <p>{item.content}</p>
                    <div className="deluxe__three-item-image-content-meta">
                      <ul>
                        <li>
                          <i className="fal fa-bed-alt"></i> bed's
                        </li>
                        <li>
                          <i className="fal fa-users"></i>
                          Guest's
                        </li>
                      </ul>
                    </div>
                    <div className="deluxe__three-item-image-content-bottom">
                      <Link className="simple-btn" href="/room-details">
                        <i className="far fa-chevron-right"></i> 자세히보기
                      </Link>
                      <p>
                        <i className="fas fa-star"></i> <span>4.8</span>2k
                      </p>
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
