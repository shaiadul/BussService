import Arrow01 from '../../assets/Arrow 1.svg';
import offerSvg from '../../assets/offer-bottom-persent.svg';
import label from '../../assets/label.svg';
import driver from '../../assets/driver.svg';
import selected from '../../assets/selected.png';
import notSelected from '../../assets/notSelected.png';
import booked from '../../assets/booked.png';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';

const ResultCard = () => {
  const [row1, setRow1] = useState([
    { selected: false, empty: true, name: 'L1', id: '1' },
    { selected: false, empty: true, name: 'L2', id: '2' },
    { selected: true, empty: true, name: 'L3', id: '3' },
    { selected: false, empty: true, name: 'L4', id: '4' },
    { selected: false, empty: true, name: 'L5', id: '5' },
    { selected: true, empty: true, name: 'L6', id: '6' },
    { selected: false, empty: true, name: 'L7', id: '7' },
    { selected: false, empty: true, name: 'L8', id: '8' },
    { selected: false, empty: true, name: 'L9', id: '9' },
    { selected: true, empty: true, name: 'L10', id: '10' },
    { selected: false, empty: true, name: 'L11', id: '11' },
    { selected: false, empty: true, name: 'L12', id: '12' },
    { selected: false, empty: true, name: 'L13', id: '13' },
    { selected: true, empty: true, name: 'L14', id: '14' },
    { selected: false, empty: true, name: 'L15', id: '15' },
    { selected: false, empty: true, name: 'L16', id: '16' },
    { selected: false, empty: true, name: 'L17', id: '17' },
    { selected: true, empty: true, name: 'L18', id: '18' },
  ]);
  const [row2, setRow2] = useState([
    { selected: false, empty: true, name: 'R1', id: '19' },
    { selected: false, empty: true, name: 'R2', id: '20' },
    { selected: true, empty: false, name: 'R3', id: '21' },
    { selected: false, empty: true, name: 'R4', id: '22' },
    { selected: false, empty: true, name: 'R5', id: '23' },
    { selected: true, empty: true, name: 'R6', id: '24' },
    { selected: false, empty: true, name: 'R7', id: '25' },
    { selected: false, empty: true, name: 'R8', id: '26' },
    { selected: false, empty: true, name: 'R9', id: '27' },
    { selected: true, empty: true, name: 'R10', id: '28' },
    { selected: false, empty: true, name: 'R11', id: '29' },
    { selected: false, empty: true, name: 'R12', id: '30' },
    { selected: false, empty: true, name: 'R13', id: '31' },
    { selected: true, empty: true, name: 'R14', id: '32' },
    { selected: false, empty: true, name: 'R15', id: '33' },
    { selected: false, empty: true, name: 'R16', id: '34' },
    { selected: false, empty: true, name: 'R17', id: '35' },
    { selected: true, empty: true, name: 'R18', id: '36' },
  ]);
  const [row3, setRow3] = useState([
    { selected: false, empty: false, name: 'S1', id: '37' },
    { selected: true, empty: true, name: 'S2', id: '38' },
    { selected: true, empty: false, name: 'S3', id: '39' },
    { selected: false, empty: true, name: 'S4', id: '40' },
    { selected: true, empty: true, name: 'S5', id: '41' },
    { selected: true, empty: true, name: 'S6', id: '42' },
  ]);

  const divRef = useRef();
  const onSeatSelectRow1 = (index) => {
    let tempRow = [];
    tempRow = row1;
    tempRow.map((item, ind) => {
      if (index === ind) {
        if (item.selected == true) {
          item.selected = false;
          item.empty = true;
        } else {
          item.selected = true;
          item.empty = false;
        }
      }
    });

    let tempSeats = [];
    tempRow.map((item) => {
      tempSeats.push(item);
    });
    setRow1(tempSeats);
  };

  const onSeatSelectRow2 = (index) => {
    let tempRow = [];
    tempRow = row2;
    tempRow.map((item, ind) => {
      if (index === ind) {
        if (item.selected == true) {
          item.selected = false;
          item.empty = true;
        } else {
          item.selected = true;
          item.empty = false;
        }
      }
    });

    let tempSeats = [];
    tempRow.map((item) => {
      tempSeats.push(item);
    });
    setRow2(tempSeats);
  };
  const onSeatSelectRow3 = (index) => {
    let tempRow = [];
    tempRow = row3;
    tempRow.map((item, ind) => {
      if (index === ind) {
        if (item.selected == true) {
          item.selected = false;
          item.empty = true;
        } else {
          item.selected = true;
          item.empty = false;
        }
      }
    });

    let tempSeats = [];
    tempRow.map((item) => {
      tempSeats.push(item);
    });
    setRow3(tempSeats);
  };

  const [isOpen2, setIsOpen2] = useState(false);
  return (
    <>
      <div className='flex justify-center mx-auto'>
        <div className='shadow-xl p-2 lg:p-4 w-full mt-10 mb-10 border-t border-r border-l rounded-xl relative mr-5 lg:mr-0'>
          <div className=''>
            <div className='flex flex-wrap justify-between items-start gap-x-0 lg:gap-x-10 '>
              <div>
                <h4 className='text-[11px] lg:text-lg font-bold text-[#121212b6]'>
                  Alliance tours
                </h4>
                <p className='text-[#121212b6] text-[11px] lg:text-lg opacity-[0.5] '>
                  AC, single seat, volvo
                </p>
              </div>

              <div className='flex justify-between items-center gap-x-4 text-center order-last lg:order-none  my-4 lg:my-0'>
                <div>
                  <h4 className='text-[10px] lg:text-lg font-bold text-[#121212b6]'>
                    10:00 AM
                  </h4>
                  <p className='text-[#121212b6] opacity-[0.5] text-[10px] lg:text-lg'>
                    Chandigarh
                  </p>
                </div>

                <div>
                  <h4 className='  text-[#121212b6] opacity-[0.5] text-[10px] lg:text-lg'>
                    06h 00m
                  </h4>
                  <img className='mx-auto' src={Arrow01} alt='Arrow01' />
                </div>

                <div>
                  <h4 className='text-[10px] lg:text-lg font-bold text-[#121212b6]'>
                    04:00 PM
                  </h4>
                  <p className='text-[#121212b6] opacity-[0.5] text-[10px] lg:text-lg'>
                    Delhi
                  </p>
                </div>
              </div>

              <div className='text-center'>
                <h5 className='text-[#121212b6] opacity-[0.5] text-[10px] lg:text-lg '>
                  Starting
                </h5>
                <div className='flex justify-center items-center gap-x-2'>
                  <span className='text-[10px] lg:text-2xl font-bold text-[#121212b6]'>
                    ₹ 850
                  </span>
                  <span className='text-[10px] lg:text-2xl text-[#121212b6] opacity-[0.5]'>
                    <del>₹ 900</del>
                  </span>
                </div>
                <div className='text-[#64B449] flex justify-center items-center gap-x-2 mt-0 pt-0 text-[10px] lg:text-lg'>
                  <img src={label} alt='' /> flat rs. 50 OFF
                </div>
              </div>

              <div>
                {/* __________________________set selected___________________________ */}
                <button
                  onClick={() => setIsOpen2(!isOpen2)}
                  type='button'
                  className={`${
                    isOpen2 ? 'bg-orange-600' : 'bg-[#F56F53]'
                  } text-center font-semibold text-[10px] lg:text-lg px-3 lg:px-[23px] py-1 lg:py-[11px] rounded-lg`}
                  aria-controls='mobile-slide-menu'
                  aria-expanded='false'
                >
                  <span className='sr-only'>Open main menu</span>
                  <p>Select Seat</p>
                </button>
                {/* __________________________set selected___________________________ */}
                <p className='text-[#121212b6] opacity-[0.5] py-0 lg:py-3 text-[10px] lg:text-lg'>
                  40 seats available
                </p>
              </div>
            </div>

            <div className='flex justify-start items-center gap-3'>
              <div className='bg-[#64B449] w-5 h-5 rounded-md text-white text-[10px] text-center  justify-center items-center hidden lg:flex'>
                4.2
              </div>
              <p className='text-[#121212b6] opacity-[0.5] hidden lg:block'>
                15 ratings
              </p>
              <div className='ml-0 lg:ml-6 flex justify-start items-center text-left gap-1 font-normal lg:font-medium text-[#F56F53] text-[10px] lg:text-lg my-0 lg:my-3'>
                <span>Amenities </span> | <span>Timeline</span> |
                <span>Cancellation policy</span>
              </div>
            </div>

            <div className='bg-[#64B449] absolute right-0 bottom-0 py-1 lg:py-2 px-2 lg:px-8 offer-bottom flex justify-end lg:justify-between items-center gap-1'>
              <img src={offerSvg} className='w-4 h4' alt='' />
              <p className='text-white text-[11px] lg:text-lg '>
                free cancellation
              </p>
            </div>
          </div>
        </div>
      </div>
      <Transition
        show={isOpen2}
        enter='transition ease-out duration-100 transform'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='transition ease-in duration-75 transform'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        {(ref) => (
          <div className='mb-5' id='mobile-slide-menu'>
            <div
              ref={divRef}
              className='mt-2 pt-2 pb-3 space-y-1 sm:px-3 mr-5 bg-white rounded-lg border-r border-l border-b'
            >
              <div className='flex justify-start items-center gap-x-2 py-2 pl-2'>
                <span className='text-bold text-xl text-black'>
                  Select Seat
                </span>
                <p className='text-slate-600'>(Double Decker Bus)</p>
              </div>

              <div className='grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-5 w-full '>
                <div>
                  <div className='w-full border-t-2 border-b-2 border-r-2 border-l-[10px] h-56 rounded-lg flex justify-center rotate-90 md:rotate-0 lg:rotate-0 my-20 lg:my-5'>
                    <div className='h-full border-r-2  p-2'>
                      <img
                        className='w-6 rotate-[260deg] md:rotate-0'
                        src={driver}
                        alt='driver'
                      />
                    </div>
                    <div className='w-full mx-auto flex justify-center'>
                      <div className='w-full'>
                        <div className=' h-2/4 w-full p-3 grid grid-cols-9 '>
                          {row1.map((item, index) => {
                            return (
                              <div
                                key={item.id}
                                onClick={() => {
                                  if (
                                    item.selected == false &&
                                    item.empty == false
                                  ) {
                                    alert('seat is booked');
                                  } else {
                                    onSeatSelectRow1(index);
                                  }
                                }}
                              >
                                {item.empty == false &&
                                item.selected == true ? (
                                  <img
                                    className='w-5 lg:w-6 cursor-pointer'
                                    src={selected}
                                    alt='selected'
                                  />
                                ) : item.empty == true &&
                                  item.selected == false ? (
                                  <img
                                    className='w-5 lg:w-6 cursor-pointer'
                                    src={notSelected}
                                    alt='notSelected'
                                  />
                                ) : (
                                  <img
                                    className='w-5 lg:w-6 cursor-pointer'
                                    src={booked}
                                    alt='booked'
                                  />
                                )}
                              </div>
                            );
                          })}
                        </div>
                        <div className=' h-2/4 w-full p-3 mt-5 md:mt-3 lg:mt-3 grid grid-cols-9 '>
                          {row2.map((item, index) => {
                            return (
                              <div
                                key={item.id}
                                className=''
                                onClick={() => {
                                  if (
                                    item.selected == false &&
                                    item.empty == false
                                  ) {
                                    alert('seat is booked');
                                  } else {
                                    onSeatSelectRow2(index);
                                  }
                                }}
                              >
                                {item.empty == false &&
                                item.selected == true ? (
                                  <img
                                    className='w-5 lg:w-6 cursor-pointer'
                                    src={selected}
                                    alt=''
                                  />
                                ) : item.empty == true &&
                                  item.selected == false ? (
                                  <img
                                    className='w-5 lg:w-6 cursor-pointer'
                                    src={notSelected}
                                    alt=''
                                  />
                                ) : (
                                  <img
                                    className='w-5 lg:w-6 cursor-pointer'
                                    src={booked}
                                    alt=''
                                  />
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <div className='h-full w-fit grid grid-cols-1 gap-y-2 py-3 mr-5 my-auto '>
                        {row3.map((item, index) => {
                          return (
                            <div
                              key={item.id}
                              className=' '
                              onClick={() => {
                                if (
                                  item.selected == false &&
                                  item.empty == false
                                ) {
                                  alert('seat is booked');
                                } else {
                                  onSeatSelectRow3(index);
                                }
                              }}
                            >
                              {item.empty == false && item.selected == true ? (
                                <img
                                  className='w-6 cursor-pointer'
                                  src={selected}
                                  alt=''
                                />
                              ) : item.empty == true &&
                                item.selected == false ? (
                                <img
                                  className='w-6 cursor-pointer'
                                  src={notSelected}
                                  alt=''
                                />
                              ) : (
                                <img
                                  className='w-6 cursor-pointer'
                                  src={booked}
                                  alt=''
                                />
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='left-side'>
                  <div>
                    <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 justify-between gap-2 w-full'>
                      <div className=' flex lg:flex-col items-start text-center mb-5 lg:mb-0'>
                        <div className='mx-auto'>
                          <img
                            className='w-6 mx-auto'
                            src={notSelected}
                            alt='selected'
                          />
                          <span className='text-[#121212] text-lg'>
                            available
                          </span>
                        </div>
                        <div className='my-0 lg:my-7 mx-auto'>
                          <img
                            className='w-6 mx-auto'
                            src={booked}
                            alt='notSelected'
                          />
                          <span className='text-[#121212] text-lg'>Booked</span>
                        </div>
                        <div className='mx-auto'>
                          <img
                            className='w-6 mx-auto'
                            src={selected}
                            alt='notSelected'
                          />
                          <span className='text-[#121212] text-lg'>
                            Selected
                          </span>
                        </div>
                      </div>
                      <div className='my-auto'>
                        <div className=' text-lg lg:text-xl'>
                          <div className='flex justify-center lg:justify-between gap-x-10 text-black mb-5'>
                            <span className='opacity-70'>Seats No.</span>
                            <span className='font-bold'>L15, L16, L17</span>
                          </div>
                          <div className='flex justify-center lg:justify-between gap-x-16 text-black'>
                            <span className='opacity-70'>Total fare</span>
                            <span className='font-bold'>₹ 5,247</span>
                          </div>
                        </div>
                        <div className='mx-auto text-center'>
                          <Link to='/information'>
                            <button className='bg-[#F56F53] py-[13px] px-[60px] text-white font-bold rounded-lg mx-auto my-6'>
                              Book seats
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </>
  );
};
export default ResultCard;
