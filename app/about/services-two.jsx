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
                  <p>스트레스 해소와 내면의 평화를 찾는 데 도움을 줍니다.</p>
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
                  <h4>사회 공헌 프로그램</h4>
                  <p>
                    도자기 만들기와 전통놀이를 통해 스트레스를 스스로 조절할 수
                    있는 방법을 배울 수 있습니다.
                  </p>
                  <br />
                  <p>
                    다양한 프로그램을 통해 모두가 함께하는 기회를 제공합니다.
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
                    AI와 전통이 만나 유일하고 창의적인 캐릭터를 탑재한 나만의
                    도자기를 만들 수 있습니다.
                  </p>
                  <br />
                  <p>
                    이를 통해 생활에서 적용 가능한 AI를 직접 본인 작품에
                    연결하는 새로운 경험을 해 보실 수 있습니다.
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
                    반만년 구전되어 오고 민중 사이에 전하여 내려오는 고유한
                    우리나라 놀이를 찾아내며 기록하는 연구소입니다.
                  </p>
                  <br />
                  <p>전통 놀이의 의미와 가치를 탐구하는 공간입니다.</p>
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
