import Image from "next/image";

const Casino = ({ currentClassItems }) => {
  const handleImageError = (event) => {
    event.target.src = "/img/blog/blog-3.jpg"; // 기본 이미지 URL로 변경
  };

  return (
    <div className="modern__room section-padding">
      <div className="container">
        <div className="row">
          {currentClassItems?.map((item, index) => (
            <>
              <div key={index} className="col-xl-4 col-lg-6 col-md-6 mb-30">
                <div className="deluxe__three-item">
                  <div
                    className="deluxe__three-item-image"
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "350px",
                    }}
                  >
                    <Image
                      src={item.photo}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                      onError={handleImageError} // onError 핸들러를 Image 컴포넌트에 적용
                    />
                    <div className="deluxe__three-item-image-content">
                      <h4>
                        <a href={`/class-details/${item.id}`}>{item.title}</a>
                      </h4>
                      <h5>
                        <span>{item.price}원/1인</span>
                      </h5>

                      <div className="deluxe__three-item-image-content-bottom">
                        <a
                          className="simple-btn"
                          href={`/class-details/${item.id}`}
                        >
                          <i className="far fa-chevron-right"></i> 자세히보기
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Casino;
