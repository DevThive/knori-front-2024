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
                  <a href={`/notice-details/${data.id}`}>
                    <img src={data.img} alt="" />
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
          <h5>태그</h5>
          <div className="all__sidebar-item-tag">
            <ul>
              <li>
                <a href="#">도자기</a>
              </li>
              <li>
                <a href="#">체험학습</a>
              </li>
              <li>
                <a href="#">도자기 체험</a>
              </li>
              <li>
                <a href="#">공방</a>
              </li>
              <li>
                <a href="#">물레 도자기</a>
              </li>
              <li>
                <a href="#">힐링</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSideBar;
