const Currentblogitems = ({ currentBlogItems }) => {
  const extractTitle = (caption) => {
    return caption.replace(/#[^\s#]+/g, "").trim();
  };
  return (
    <div className="container">
      <div className="row">
        {currentBlogItems?.map((data, id) => (
          <>
            <div className="col-xl-4 col-lg-6 col-md-6 mb-30" key={id}>
              <div className="blog__two-item">
                <div className="blog__two-item-image">
                  <img src={data.media_url} alt="image" />
                  {/* <div className="blog__two-item-image-date">
                    <h5>{data.id}</h5>
                    <span>{data.id}</span>
                  </div> */}
                </div>
                <div className="blog__two-item-content">
                  {/* <h6>Post by - {data.id}</h6> */}
                  <h4>
                    <a href={data.permalink}>{extractTitle(data.caption)}</a>
                  </h4>
                  <a className="simple-btn" href={data.permalink}>
                    <i className="far fa-chevron-right"></i>자세히보기
                  </a>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Currentblogitems;
