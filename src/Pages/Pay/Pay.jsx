import React, { useState } from "react";
import ok from "../../assets/ok.svg";
import PayNumber from "./PayNumber";
import Arrow01 from "../../assets/Arrow 1.svg";
import download from "../../assets/download.png"

const Pay = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <section className="mx-auto container px-5">
      <div>
        <div className="mt-20 flex justify-center items-start mx-auto max-w-[1350px]">
          <div className="">
            <div className="w-6 h-6 bg-[#F56F53] rounded-[50%] flex justify-center">
              <img className="w-4" src={ok} alt="ok" />
            </div>
          </div>
          <div className="mt-3 h-[3px] bg-[#F56F53] w-full"></div>
          <div>
            <div className="w-6 h-6  border border-[#F56F53] rounded-[50%] bg-[#F56F53] flex justify-center">
              <img className="w-4" src={ok} alt="ok" />
            </div>
          </div>
          <div className="mt-3 h-[3px] bg-[#F56F53] w-full"></div>
          <div>
            <div className="w-6 h-6  border border-[#F56F53] rounded-[50%] bg-[#F56F53] flex justify-center">
              <img className="w-4" src={ok} alt="ok" />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-5 mb-10 text-center">
          <span className="w-[100px] lg:w-[177px] text-[10px] lg:text-lg  bg-[#F56F53] text-white p-1 lg:p-2 rounded-md">
            Passenger details
          </span>
          <span className="w-[100px] lg:w-[177px] text-[10px] lg:text-lg bg-[#F56F53] text-white p-1 lg:p-2  rounded-md">
            Payment Options
          </span>
          <span className="w-[100px] lg:w-[177px] text-[10px] lg:text-lg  bg-[#F56F53] text-white p-1 lg:p-2 rounded-md">
            Pay Now
          </span>
        </div>
      </div>
      <div className="shadow-lg px-3 my-10 ">
        <div className="max-w-[1350px] mx-auto">
          <div className="pt-10">
            <h1 className="text-md lg:text-[25px] font-semibold text-black  pb-5 ">
              Apply Coupon Code
            </h1>
            <div className="flex justify-start items-center gap-4 my-10">
              <div className="relative">
                <input
                  className="findInputInfo w-full lg:w-[350px] border text-black"
                  required=""
                  type="text"
                  name="text"
                />

                <label className="user-label-Info">Coupon Code</label>
              </div>
              <button className="bg-[#F56F53] text-white py-3 px-10 rounded-md text-xs lg:text-lg font-semibold">
                Apply
              </button>
            </div>
          </div>
          <PayNumber />
          <div className="flex justify-start">
            <button
              onClick={() => setShowModal(true)}
              className="bg-[#F56F53] text-white py-3 px-10 rounded-md text-xs lg:text-lg font-semibold mb-10"
            >
              Pay ₹990
            </button>
            {showModal && 
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-center justify-start p-5 gap-5 border-b border-solid border-slate-200 rounded-t">
                        <div className=" border-[5px] border-[#f0a090b4] bg-[#F56F53] border-3 w-[45px] h-[45px] rounded-[50%] flex justify-center">
                          <img src={ok} alt="ok" />
                        </div>
                        <h3 className="text-3xl text-[#F56F53] font-semibold">
                          Booking Confirmed!
                        </h3>
                      </div>
                      {/*body*/}
                      <div className="relative p-6 flex-auto">
                        <h1 className="text-[20px] text-black font-bold">
                          Booking details
                        </h1>
                        <div className="grid grid-cols-1 lg:grid-cols-3 justify-between items-start gap-8 mt-10 mx-auto font-semibold">
                          <div>
                            <h4 className="text-black text-[18px]">
                              Alliance tours
                            </h4>
                            <p className="text-slate-600">
                              AC, single seat, volvo
                            </p>
                          </div>
                          <div>
                            <h4 className="text-slate-600 text-[18px]">
                              Route
                            </h4>
                            <div className="text-black flex justify-start lg:justify-between gap-3">
                              <span>Chandigarh</span>
                              <img src={Arrow01} alt="Arrow01" />
                              <span>Delhi</span>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-slate-600 text-[18px]">Time</h4>
                            <p className="text-black">10:30</p>
                          </div>
                          <div>
                            <h4 className="text-slate-600 text-[18px]">
                              Bus Number
                            </h4>
                            <p className="text-black">TN 25 K 2801</p>
                          </div>
                          <div>
                            <h4 className="text-slate-600 text-[18px]">
                              Seat Number
                            </h4>
                            <p className="text-black">L15, L16, L17</p>
                          </div>
                          <div>
                            <h4 className="text-slate-600 text-[18px]">
                              Total Fare
                            </h4>
                            <p className="text-black">₹990</p>
                          </div>
                        </div>
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-start p-6  border-solid border-slate-200 rounded-b gap-2">
                        <div className="flex justify-start items-center gap-2">
                          <img src={download} alt="download" />
                          <span className="text-[10px] lg:text-lg text-[#F56F53] font-semibold">Download ticket</span>
                        </div>
                        <button
                          className="text-[#F56F53] background-transparent font-semibold px-6 py-2 text-[10px] lg:text-lg outline-none focus:outline-none  ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Close
                        </button>
                        <button className="bg-[#F56F53] text-white py-1 lg:py-3 px-3 lg:px-10 rounded-md text-[10px] lg:text-lg font-semibold">
                          Print Ticket
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
             }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pay;
