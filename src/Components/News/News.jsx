import React, { useEffect, useState } from 'react';

import bus01 from '../../assets/bus01.svg';
import bus02 from '../../assets/bus02.svg';
import bus03 from '../../assets/bus03.svg';
import user01 from '../../assets/user01.svg';
import share01 from '../../assets/Share01.svg';
import blogCard from './blogCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
// import "./News.css";

const News = () => {
  
const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "slickContainer",
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
    
};
function SampleNextArrow({ onClick }) {
  return (
      <div className='arrow arrow-right absolute right-0 bg-red-600 top-0' onClick={onClick} >
          {/* <AiOutlineRight /> */}
          <p>next</p>
      </div>
  )
}
function SamplePrevArrow({ onClick }) {
  return (
      <div className='arrow arrow-left' onClick={onClick} >
          {/* <AiOutlineLeft /> */}
          <p>pre</p>
      </div>
  )
}
  return (
    <section className='bg-gray-200 w-[500px] relative'>
      <div>
        <h2> Single Item</h2>
        <button></button>
        
        <Slider {...settings}>
          <div>
            <div className='swiper-slide'>
              <blockquote className='flex h-full w-full flex-col justify-between rounded-xl bg-slate-50 border shadow-xl p-3 lg:w-[350px] xl:w-[450px]'>
                <div className=''>
                  <img className='RightCardPic w-full' src={bus02} alt='' />
                  <h4 className='RightCardTitle'>
                    Bus strike across Punjab over outsourcing of drivers
                  </h4>
                  <p className='RightCardText'>
                    People faced inconvenience at many places in Punjab on
                    Saturday due to a strike called by contractual employees of
                    a government transport.
                  </p>
                  <div className='RightCardFooter flex justify-between align-middle mt-2'>
                    <div className='flex justify-center align-middle'>
                      <img
                        className='RightCardFooterImg mr-3'
                        src={user01}
                        alt='user01'
                      />
                      <p className='RightCardFooterTitle'>
                        Olivia Thomas <br />
                        <span className='RightCardFooterDate'>
                          20 Jan, 2023
                        </span>
                      </p>
                    </div>
                    <div className='my-auto'>
                      <img src={share01} alt='share01' />
                    </div>
                  </div>
                </div>
              </blockquote>
            </div>
          </div>
          <div>
            <div className='swiper-slide'>
              <blockquote className='flex h-full w-full flex-col justify-between rounded-xl bg-slate-50 border shadow-xl p-3 lg:w-[350px] xl:w-[450px]'>
                <div className=''>
                  <img className='RightCardPic w-full' src={bus02} alt='' />
                  <h4 className='RightCardTitle'>
                    Bus strike across Punjab over outsourcing of drivers
                  </h4>
                  <p className='RightCardText'>
                    People faced inconvenience at many places in Punjab on
                    Saturday due to a strike called by contractual employees of
                    a government transport.
                  </p>
                  <div className='RightCardFooter flex justify-between align-middle mt-2'>
                    <div className='flex justify-center align-middle'>
                      <img
                        className='RightCardFooterImg mr-3'
                        src={user01}
                        alt='user01'
                      />
                      <p className='RightCardFooterTitle'>
                        Olivia Thomas <br />
                        <span className='RightCardFooterDate'>
                          20 Jan, 2023
                        </span>
                      </p>
                    </div>
                    <div className='my-auto'>
                      <img src={share01} alt='share01' />
                    </div>
                  </div>
                </div>
              </blockquote>
            </div>
          </div>
          <div>
            <div className='swiper-slide'>
              <blockquote className='flex h-full w-full flex-col justify-between rounded-xl bg-slate-50 border shadow-xl p-3 lg:w-[350px] xl:w-[450px]'>
                <div className=''>
                  <img className='RightCardPic w-full' src={bus02} alt='' />
                  <h4 className='RightCardTitle'>
                    Bus strike across Punjab over outsourcing of drivers
                  </h4>
                  <p className='RightCardText'>
                    People faced inconvenience at many places in Punjab on
                    Saturday due to a strike called by contractual employees of
                    a government transport.
                  </p>
                  <div className='RightCardFooter flex justify-between align-middle mt-2'>
                    <div className='flex justify-center align-middle'>
                      <img
                        className='RightCardFooterImg mr-3'
                        src={user01}
                        alt='user01'
                      />
                      <p className='RightCardFooterTitle'>
                        Olivia Thomas <br />
                        <span className='RightCardFooterDate'>
                          20 Jan, 2023
                        </span>
                      </p>
                    </div>
                    <div className='my-auto'>
                      <img src={share01} alt='share01' />
                    </div>
                  </div>
                </div>
              </blockquote>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default News;
