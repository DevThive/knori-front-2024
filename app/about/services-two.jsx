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
                    집중할 수 있는 시간을 늘려주면서 행위 중독 등을 치유하는 데
                    목적이 있습니다. 도자기 힐링 프로그램은 스트레스 해소와
                    내면의 평화를 찾는 데 도움을 줍니다.
                  </p>
                  <br />
                  <p>
                    진흙의 촉감과 창조의 즐거움을 통해 마음과 몸의 안정을
                    경험하세요.
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
                  <h4>전문적인 강사진</h4>
                  <p>
                    도자기 만들기와 전통놀이를 통해 스트레스를 스스로 조절할 수
                    있는 방법을 배울 수 있습니다.
                  </p>
                  <br />
                  <p>
                    강사진은 각 분야의 전문가로 구성되어 있어 높은 수준의 교육을
                    제공합니다.
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
                  <h4>연계 학습</h4>
                  <p>
                    양주관아지, 양주향교, 양주시립회암사지박물관 & 회암사지 등과
                    연계한 학습 프로그램을 제공합니다.
                  </p>
                  <br />
                  <p>
                    이를 통해 도자기 체험과 더불어 지역 문화와 역사를 배울 수
                    있습니다.
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
                  <h4>수도권 내 위치</h4>
                  <p>
                    접근성이 뛰어나 도자기 체험을 더욱 편리하게 즐길 수
                    있습니다.
                  </p>
                  <br />
                  <p>
                    접근성이 뛰어나 도자기 체험을 더욱 편리하게 즐길 수
                    있습니다.
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
