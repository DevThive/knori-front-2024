const Blogcomment = ({ classData }) => {
  const createdAtDate = new Date(classData.createdAt);

  const classImage = classData.photo.replace(/[\[\]\"\\]/g, "");
  return (
    <div className="col-xxl-9 col-xl-8 col-lg-8 lg-mb-30">
      <div className="blog__details-left">
        <div className="blog__details-left-meta">
          <h3 className="mb-20">{classData.title}</h3>
          <div className="text-end">
            <ul>
              <li>
                <a href="#">
                  <i className="fal fa-user"></i>글쓴이 : 관리자
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fal fa-calendar-alt"></i>
                  {createdAtDate.getFullYear()} - {createdAtDate.getMonth() + 1}{" "}
                  . {createdAtDate.getDate()}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <img
          style={{ height: "400px", objectFit: "cover" }}
          src={classImage}
          alt=""
        />
        <div className="blog__details-left-meta"></div>
        <div dangerouslySetInnerHTML={{ __html: classData.content }} />
      </div>
    </div>
  );
};

export default Blogcomment;
