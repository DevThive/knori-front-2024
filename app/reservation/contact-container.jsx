import Social from "../socials/page";

const Contactcontainer = () => {
  return (
    <>
      <div className="contact__area section-padding pb-0">
        <div className="container">
          <div className="col-xl-7 col-lg-7">
            <div className="contact__area-form">
              <h3 className="mb-35">예약하기</h3>
              <form action="#">
                <div className="row">
                  <div className="col-sm-6 mb-30">
                    <div className="contact__area-form-item">
                      <i className="fal fa-user"></i>
                      <input
                        type="text"
                        name="name"
                        placeholder="예약자 성함"
                        required="required"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 sm-mb-30">
                    <div className="contact__area-form-item">
                      <i className="far fa-envelope-open"></i>
                      <input
                        type="email"
                        name="email"
                        placeholder="예약자 이메일"
                        required="required"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 mb-30">
                    <div className="contact__area-form-item">
                      <i className="far fa-phone-alt"></i>
                      <input
                        type="text"
                        name="phone"
                        placeholder="예약자 핸드폰번호"
                        required="required"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 sm-mb-30">
                    <div className="contact__area-form-item">
                      <i className="far fa-address-book"></i>
                      <input
                        type="text"
                        name="subject"
                        placeholder="예약 클래스"
                        required="required"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 mb-30">
                    <div className="contact__area-form-item">
                      <i className="far fa-comments"></i>
                      <textarea
                        name="message"
                        placeholder="Type your comments...."
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="contact__area-form-item">
                      <button className="theme-btn" type="submit">
                        예약하기<i className="fal fa-long-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactcontainer;
