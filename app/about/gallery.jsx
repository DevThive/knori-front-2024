"use client";

const galleryData = {
  galleryImage: [
    { image: "/img/SiteImage/Sub1.jpg", text: "흙에서 피어나는 예술의 혼" },
    { image: "/img/SiteImage/Sub2.jpg", text: "손끝에서 탄생하는 아름다움" },
    { image: "/img/SiteImage/Sub3.jpg", text: "전통과 현대의 만남, 도자기" },
    { image: "/img/SiteImage/Sub4.jpg", text: "흙과 불이 빚어내는 조화" },
  ],
};

const { galleryImage } = galleryData;

const Gallery = () => {
  return (
    <>
      <style jsx>{`
        .gallery__area-item {
          position: relative;
          overflow: hidden;
        }
        .gallery__area-item img {
          width: 100%;
          display: block;
        }
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(
            0,
            0,
            0,
            0.5
          ); /* 검은색 오버레이, 투명도 50% */
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          font-size: 1.5rem;
          opacity: 1; /* 처음에는 오버레이가 보이도록 설정 */
          transition: opacity 0.3s ease; /* 부드러운 전환 효과 */
        }
        .gallery__area-item:hover .overlay {
          opacity: 0; /* 마우스를 올렸을 때 오버레이가 사라지도록 설정 */
        }
      `}</style>
      <div className="gallery__area section-padding pb-0 overflow-hidden">
        <div className="container-fluid p-0">
          <div className="row">
            {galleryImage.map((item, index) => (
              <div key={index} className="col-sm-3 sm-mb-10">
                <div className="gallery__area-item">
                  <img src={item.image} alt={`image${index + 1}`} />
                  <div className="overlay">
                    <p>{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
