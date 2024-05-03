"use client";
import Image from "next/image";
import CarParking from "../../public/img/icon/car-parking.png";
import Locaion1 from "../../public/img/icon/location-1.png";
import SwimmingPool from "../../public/img/icon/swimming-pool.png";
import Wifi from "../../public/img/icon/list-7.png";

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
                  <Image alt="" layout="responsive" src={Locaion1} />
                </div>
                <div className="services__two-item-content">
                  <h4>깨끗한 시설</h4>
                  <p>
                    우리의 도자기 공방은 철저한 위생 관리 및 주기적인 청소를
                    통해 항상 깨끗하고 쾌적한 작업 환경을 유지합니다.
                  </p>
                  {/* <p>
                    깨끗한 시설은 창작의 과정에서 영감을 주며, 모든 작품이
                    최상의 상태로 탄생할 수 있는 기반을 제공합니다.
                  </p> */}
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 lg-mb-30">
              <div className="services__two-item">
                <span>03</span>
                <div className="services__two-item-icon">
                  <Image alt="" layout="responsive" src={SwimmingPool} />
                </div>
                <div className="services__two-item-content">
                  <h4>청정 자연환경</h4>
                  <p>
                    양주의 깨끗한 자연은 창작 영감을 주고, 작업과 학습에
                    긍정적인 환경을 제공합니다.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 lg-mb-30">
              <div className="services__two-item">
                <span>02</span>
                <div className="services__two-item-icon">
                  <Image alt="" layout="responsive" src={CarParking} />
                </div>
                <div className="services__two-item-content">
                  <h4>넓은 주차장</h4>
                  <p>
                    우리 공방의 넓은 주차장은 방문객들에게 주차 공간 걱정 없이
                    편리한 접근성을 제공합니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="services__two-item">
                <span>04</span>
                <div className="services__two-item-icon">
                  <Image alt="" layout="responsive" src={Locaion1} />
                </div>
                <div className="services__two-item-content">
                  <h4>넓은 강의실</h4>
                  <p>
                    다양한 크기의 클래스 운영이 가능하여, 개인 작업부터 그룹
                    워크숍까지 유연하게 대응할 수 있습니다.
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
