import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import DummyLogo from '../images/dummy-icon-white.png';

const LoginSwiper = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={DummyLogo} alt="construction-erp-logo" />
            <h1 className="swiper-heading">
                Create invoices easily
            </h1>
            <p className="para-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={DummyLogo} alt="construction-erp-logo" />
            <h1 className="swiper-heading">
                Create invoices easily
            </h1>
            <p className="para-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={DummyLogo} alt="construction-erp-logo" />
            <h1 className="swiper-heading">
                Create invoices easily
            </h1>
            <p className="para-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default LoginSwiper
