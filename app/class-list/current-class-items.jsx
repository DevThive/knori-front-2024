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
                  <div className="deluxe__three-item-image">
                    <Image
                      src={item.photo}
                      alt={item.title}
                      width={500}
                      height={500}
                      onError={handleImageError} // onError 핸들러를 Image 컴포넌트에 적용
                    />
                    <div className="deluxe__three-item-image-content">
                      <h4>
                        <a href="/class-details">{item.title}</a>
                        <span>$32/Night</span>
                      </h4>
                      <p>{item.content}</p>

                      <div className="deluxe__three-item-image-content-bottom">
                        <a className="simple-btn" href="/room-details">
                          <i className="far fa-chevron-right"></i> Read More
                        </a>
                        <p>
                          <i className="fas fa-star"></i> <span>4.8</span>2k
                        </p>
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
