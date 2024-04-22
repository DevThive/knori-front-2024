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

  const classItem = classes.slice(0, 3);
  return (
    <div className="deluxe__three section-padding">
      <div className="container">
        <div className="row align-items-center mb-30">
          <div className="col-xl-6 col-lg-6 col-md-8">
            <div className="deluxe__three-title">
              <span className="subtitle__one">Class</span>
              <h2>클래스</h2>
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
          {classItem.map((item, index) => (
            <div key={index} className="col-xl-4 col-lg-6 col-md-6 mt-30">
              <div className={`deluxe__three-item ${item.cl}`}>
                <div className="deluxe__three-item-image">
                  <Image
                    src={item.photo}
                    alt={item.title}
                    style={{ height: "350px", width: "500px" }}
                  />
                  <div className="deluxe__three-item-image-content">
                    <h4>
                      <a href={`/class-details/${item.id}`}>{item.title}</a>
                    </h4>
                    <p>{item.des}</p>
                    <div className="deluxe__three-item-image-content-meta">
                      <ul>
                        <li>
                          <i className="fal fa-users"></i>
                          <span>${item.price}/Night</span>
                        </li>
                        <li>
                          <i className="fal fa-users"></i> ({item.guest})
                          Guest's
                        </li>
                      </ul>
                    </div>
                    <div className="deluxe__three-item-image-content-bottom">
                      <Link
                        className="simple-btn"
                        href={`/class-details/${item.id}`}
                      >
                        <i className="far fa-chevron-right"></i> Read More
                      </Link>
                      {/* <p>
                        <i className="fas fa-star"></i> <span>4.8</span>2k
                      </p> */}
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

export default Deluxe;
