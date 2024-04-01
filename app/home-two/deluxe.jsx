import classlist from "@/components/data/class-all";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Deluxe = () => {
  const [classes, setClasses] = useState([]); // 상태 추가

  useEffect(() => {
    const fetchData = async () => {
      const data = await classlist();
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
              <span className="subtitle__one">Deluxe and Luxury</span>
              <h2>Luxury Rooms</h2>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-4">
            <div className="deluxe__three-right">
              <Link className="theme-btn" href="/about">
                Read More<i className="fal fa-long-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          {classItem.map((data, id) => (
            <div className="col-xl-4 col-lg-6 col-md-6 mt-30" key={id}>
              <div className="blog__two-item">
                <div className="blog__two-item-image">
                  <img
                    style={{ height: "200px", objectFit: "cover" }}
                    src={data.photo}
                    alt="image"
                    onError={handleImageError} // 이미지 로드 실패 시 기본 이미지로 대체..
                  />
                  <div className="blog__two-item-image-date">
                    <h5>{data.date}</h5>
                    <span>{data.month}</span>
                  </div>
                </div>
                <div className="blog__two-item-content">
                  <h6>Post by - {data.postby}</h6>
                  <h4>
                    <a href={`/notice-details/${data.id}`}>{data.title}</a>
                  </h4>
                  <a className="simple-btn" href={`/notice-details/${data.id}`}>
                    <i className="far fa-chevron-right"></i>자세히보기
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Deluxe;
