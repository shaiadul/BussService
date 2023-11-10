import React from 'react';
import './NewsSection.css';
import bus01 from '../../assets/bus01.svg';
import bus02 from '../../assets/bus02.svg';
import bus03 from '../../assets/bus03.svg';
import user01 from '../../assets/user01.svg';
import share01 from '../../assets/Share01.svg';

const NewsSection = () => {
  return (
    <section className='bg-white container mx-auto px-3'>
      <div className='  py-16  sm:py-24 lg:mr-0  lg:pr-0'>
        <div className='grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:items-center lg:gap-x-4  xl:gap-x-[200px]'>
          <div className=' text-center sm:text-left'>
            <div className='newsContainerLeft col-span-1 md:col-span-2 lg:col-span-1'>
              <h1 className='newLeftHead'>
                latest <br />
                <span className='HeadColor'>news & blogs</span>
              </h1>

              <p className='newsCarousalText'>
                Stay updated on the latest bus ticket deals & promotions with
                our news & blog section. Never miss out on a great deal again &
                book your next bus trip with confidence.
              </p>
            </div>

            <div className='hidden lg:mt-8 lg:flex lg:gap-4'>
              <button className='prev-button rounded-full border border-[#F56F53] p-3 text-[#F56F53] hover:bg-[#F56F53] hover:text-white'>
                <span className='sr-only'>Previous Slide</span>
                <svg
                  className='h-5 w-5 -rotate-180 transform'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M9 5l7 7-7 7'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                  />
                </svg>
              </button>

              <button className='next-button rounded-full border border-[#F56F53] p-3 text-[#F56F53] hover:bg-[#F56F53] hover:text-white'>
                <span className='sr-only'>Next Slide</span>
                <svg
                  className='h-5 w-5'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M9 5l7 7-7 7'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className=' lg:col-span-2 '>
            <div className='swiper-container !overflow-hidden'>
              <div className='swiper-wrapper  flex gap-5'>
                <div className='swiper-slide'>
                  <blockquote className='flex h-full w-full flex-col justify-between rounded-xl bg-slate-50 border shadow-xl p-3 lg:w-[350px] xl:w-[450px]'>
                    <div className=''>
                      <img className='RightCardPic w-full' src={bus01} alt='' />
                      <h4 className='RightCardTitle'>
                        Bus strike across Punjab over outsourcing of drivers
                      </h4>
                      <p className='RightCardText'>
                        People faced inconvenience at many places in Punjab on
                        Saturday due to a strike called by contractual employees
                        of a government transport.
                      </p>
                      <div className='RightCardFooter flex justify-between align-middle mt-2'>
                        <div className='flex justify-center align-middle'>
                          <img
                            className='RightCardFooterImg mr-3'
                            src={user01}
                            alt='user01'
                          />
                          <p className='RightCardFooterTitle'>
                            Olivia Thomas <br />{' '}
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

                <div className='swiper-slide'>
                  <blockquote className='flex h-full w-full flex-col justify-between rounded-xl bg-slate-50 border shadow-xl p-3 lg:w-[350px] xl:w-[450px]'>
                    <div className=''>
                      <img className='RightCardPic w-full' src={bus02} alt='' />
                      <h4 className='RightCardTitle'>
                        Bus strike across Punjab over outsourcing of drivers
                      </h4>
                      <p className='RightCardText'>
                        People faced inconvenience at many places in Punjab on
                        Saturday due to a strike called by contractual employees
                        of a government transport.
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

                <div className='swiper-slide'>
                  <blockquote className='flex h-full w-full flex-col justify-between rounded-xl bg-slate-50 border shadow-xl p-3 lg:w-[350px] xl:w-[450px]'>
                    <div className=' '>
                      <img className='RightCardPic w-full' src={bus03} alt='' />
                      <h4 className='RightCardTitle'>
                        Bus strike across Punjab over outsourcing of drivers
                      </h4>
                      <p className='RightCardText'>
                        People faced inconvenience at many places in Punjab on
                        Saturday due to a strike called by contractual employees
                        of a government transport.
                      </p>
                      <div className='RightCardFooter flex justify-between align-middle mt-2'>
                        <div className='flex justify-center align-middle'>
                          <img
                            className='RightCardFooterImg mr-3'
                            src={user01}
                            alt='user01'
                          />
                          <p className='RightCardFooterTitle'>
                            Olivia Thomas <br />{' '}
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
                <div className='swiper-slide'>
                  <blockquote className='flex h-full w-full flex-col justify-between rounded-xl bg-slate-50 border shadow-xl p-3 lg:w-[350px] xl:w-[450px]'>
                    <div className=''>
                      <img className='RightCardPic w-full' src={bus01} alt='' />
                      <h4 className='RightCardTitle'>
                        Bus strike across Punjab over outsourcing of drivers
                      </h4>
                      <p className='RightCardText'>
                        People faced inconvenience at many places in Punjab on
                        Saturday due to a strike called by contractual employees
                        of a government transport.
                      </p>
                      <div className='RightCardFooter flex justify-between align-middle mt-2'>
                        <div className='flex justify-center align-middle'>
                          <img
                            className='RightCardFooterImg mr-3'
                            src={user01}
                            alt='user01'
                          />
                          <p className='RightCardFooterTitle'>
                            Olivia Thomas <br />{' '}
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

                <div className='swiper-slide'>
                  <blockquote className='flex h-full w-full flex-col justify-between rounded-xl bg-slate-50 border shadow-xl p-3 lg:w-[350px] xl:w-[450px]'>
                    <div className=''>
                      <img className='RightCardPic w-full' src={bus02} alt='' />
                      <h4 className='RightCardTitle'>
                        Bus strike across Punjab over outsourcing of drivers
                      </h4>
                      <p className='RightCardText'>
                        People faced inconvenience at many places in Punjab on
                        Saturday due to a strike called by contractual employees
                        of a government transport.
                      </p>
                      <div className='RightCardFooter flex justify-between align-middle mt-2'>
                        <div className='flex justify-center align-middle'>
                          <img
                            className='RightCardFooterImg mr-3'
                            src={user01}
                            alt='user01'
                          />
                          <p className='RightCardFooterTitle'>
                            Olivia Thomas <br />{' '}
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

                <div className='swiper-slide'>
                  <blockquote className='flex h-full w-full flex-col justify-between rounded-xl bg-slate-50 border shadow-xl p-3 lg:w-[350px] xl:w-[450px]'>
                    <div className=' '>
                      <img className='RightCardPic w-full' src={bus03} alt='' />
                      <h4 className='RightCardTitle'>
                        Bus strike across Punjab over outsourcing of drivers
                      </h4>
                      <p className='RightCardText'>
                        People faced inconvenience at many places in Punjab on
                        Saturday due to a strike called by contractual employees
                        of a government transport.
                      </p>
                      <div className='RightCardFooter flex justify-between align-middle mt-2'>
                        <div className='flex justify-center align-middle'>
                          <img
                            className='RightCardFooterImg mr-3'
                            src={user01}
                            alt='user01'
                          />
                          <p className='RightCardFooterTitle'>
                            Olivia Thomas <br />{' '}
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
            </div>
          </div>
        </div>

        <div className='mt-8 flex justify-center gap-4 lg:hidden'>
          <button
            aria-label='Previous slide'
            className='prev-button rounded-full border border-[#F56F53] p-4 text-[#F56F53] hover:bg-[#F56F53] hover:text-white'
          >
            <svg
              className='h-5 w-5 -rotate-180 transform'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M9 5l7 7-7 7'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
              />
            </svg>
          </button>

          <button
            aria-label='Next slide'
            className='next-button rounded-full border border-[#F56F53] p-4 text-[#F56F53] hover:bg-[#F56F53] hover:text-white'
          >
            <svg
              className='h-5 w-5'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M9 5l7 7-7 7'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
              />
            </svg>
          </button>
        </div>
      </div>
      
    </section>
  );
};
export default NewsSection;