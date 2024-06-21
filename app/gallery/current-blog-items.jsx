import Image from "next/image";

const Currentblogitems = ({ currentBlogItems }) => {
  const extractTitle = (caption) => {
    return caption.replace(/#[^\s#]+/g, "").trim();
  };

  const handleImageError = (event) => {
    event.target.src = "/img/blog/blog-3.jpg"; // 기본 이미지 URL로 변경
  };
  return (
    <div className="modern__room section-padding">
      <div className="container">
        <div className="row">
          {currentBlogItems?.map((data, id) => (
            <div key={id} className="col-xl-4 col-lg-6 col-md-6 mb-30">
              <div className="deluxe__three-item">
                <div
                  className="deluxe__three-item-image"
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "350px",
                  }}
                >
                  <img
                    src={data.media_url}
                    alt="image"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      position: "absolute",
                    }}
                    onError={handleImageError} // onError 핸들러를 img 태그에 적용
                  />

                  <div className="deluxe__three-item-image-content">
                    <h4>
                      <a href={data.permalink}>{extractTitle(data.caption)}</a>
                    </h4>

                    <div className="deluxe__three-item-image-content-bottom">
                      <a className="simple-btn" href={data.permalink}>
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

export default Currentblogitems;
