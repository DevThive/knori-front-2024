import noticeData from "@/components/data/notices";
import { useState, useEffect } from "react";

const BlogSideBar = () => {
  const [notices, setNotices] = useState([]); // 상태 추가

  useEffect(() => {
    const fetchData = async () => {
      const data = await noticeData();
      setNotices(data);
    };
    fetchData();
  }, []);

  const currentNoticeItems = notices.slice(0, 3);

  return (
    <div className="col-xxl-3 col-xl-4 col-lg-4">
      {/* <div className="all__sidebar-item-search mb-40">
        <form action="#">
          <input type="text" placeholder="Search....." />
          <button type="submit">
            <i className="fal fa-search"></i>
          </button>
        </form>
      </div> */}
      <div className="all__sidebar">
        <div className="all__sidebar-item">
          <h5>카테고리</h5>
          <div className="all__sidebar-item-category">
            <ul>
              <li>
                <a href="/notice">
                  <i className="far fa-angle-double-right"></i>공지사항
                  <span>{notices.length}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="all__sidebar-item">
          <h5>최신글</h5>
          <div className="all__sidebar-item-post">
            {currentNoticeItems?.map((data, id) => (
              <div key={id} className="all__sidebar-item-post-item">
                {" "}
                {/* key를 추가하고, Fragment 대신 div 사용 */}
                <div className="all__sidebar-item-post-item-image">
                  <a href="/blog-details/1">
                    <img src="/img/blog/post-1.jpg" alt="" />
                  </a>
                </div>
                <div className="all__sidebar-item-post-item-content">
                  <span>
                    <i className="fal fa-calendar-alt"></i>
                    {data.year} - {data.month}
                  </span>
                  <h6>
                    <a href={`/notice-details/${data.id}`}>{data.title}</a>
                  </h6>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="all__sidebar-item">
          <h5>Tag'g</h5>
          <div className="all__sidebar-item-tag">
            <ul>
              <li>
                <a href="#">Hotel</a>
              </li>
              <li>
                <a href="#">Booking Now</a>
              </li>
              <li>
                <a href="#">Luxury</a>
              </li>
              <li>
                <a href="#">Single room</a>
              </li>
              <li>
                <a href="#">Small suite</a>
              </li>
              <li>
                <a href="#">Family</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSideBar;
