"use client";
import Image from "next/image";
import CarParking from "../../public/img/icon/car-parking.png";
import Locaion1 from "../../public/img/icon/location-1.png";
import SwimmingPool from "../../public/img/icon/swimming-pool.png";
import Wifi from "../../public/img/icon/list-7.png";
import healingPhoto from "../../public/img/icon/list-5.png";
import cleanPhoto from "../../public/img/icon/list-1.png";
import classRoomPhoto from "../../public/img/icon/list-0.png";
import searchPhoto from "../../public/img/icon/searching.png";

const Servicestwo = () => {
  return (
    <>
      <div className="services__two">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6 xl-mb-30">
              <div className="services__two-item">
                <span>01</span>
                <div className="services__two-item-icon">
                  <Image alt="" layout="responsive" src={healingPhoto} />
                </div>
                <div className="services__two-item-content">
                  <h4>치유의 시간</h4>
                  <p>
                    도자기 클래스는 스트레스 해소와 내면의 평화를 찾는 데 도움을
                    줍니다. 이 과정은 심신을 안정시키는 데 기여합니다.
                  </p>
                  <br />
                  <p>
                    진흙의 촉감과 창조의 즐거움을 통해 마음과 몸을 안정시켜
                    보세요. 여러분의 창의력도 새롭게 발산할 수 있습니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 lg-mb-30">
              <div className="services__two-item">
                <span>02</span>
                <div className="services__two-item-icon">
                  <Image alt="" layout="responsive" src={classRoomPhoto} />
                </div>
                <div className="services__two-item-content">
                  <h4>사회공헌프로그램</h4>
                  <p>
                    다함께 차차차 꿈만 있으면 모두다 차차차. 이 프로그램은
                    협력과 소통의 중요성을 강조합니다.
                  </p>
                  <br />
                  <p>
                    전통문화인 협동과 상생을 배우는 기회를 제공합니다. 서로의
                    문화를 이해하는 기회를 통해 더 나은 사회를 만듭니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 xl-mb-30">
              <div className="services__two-item">
                <span>03</span>
                <div className="services__two-item-icon">
                  <Image alt="" layout="responsive" src={searchPhoto} />
                </div>
                <div className="services__two-item-content">
                  <h4>스마트한 전통문화</h4>
                  <p>
                    AI와 전통이 만나 유일하고 창의적인 캐릭터를 탑재한 도자기를
                    만들 수 있습니다. 생활에서 적용 가능한 AI를
                  </p>
                  <br />
                  <p>
                    직접 본인 작품에 연결하여 새로운 경험을 해 보세요.
                    창조적이고 혁신적인 체험이 여러분을 기다립니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 lg-mb-30">
              <div className="services__two-item">
                <span>04</span>
                <div className="services__two-item-icon">
                  <Image alt="" layout="responsive" src={Locaion1} />
                </div>
                <div className="services__two-item-content">
                  <h4>가위바위보 연구소</h4>
                  <p>
                    반만년 구전되어 오고 민중 사이에 전해지는 고유한 놀이를
                    찾아내고 기록하는 연구소입니다. 전통의 가치를
                  </p>
                  <br />
                  <p>
                    보존하며 후세에 전하는 역할을 합니다. 다양한 전통놀이와
                    역사에서 만든 것을 놀이로 승화시켜 자긍심을 높입니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Servicestwo;
