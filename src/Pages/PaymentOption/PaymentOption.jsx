import React from "react";
import { Link } from "react-router-dom";
import ok from "../../assets/ok.svg";
import visa from "../../assets/visa-logo.png";

const PaymentOption = () => {
 

  return (
    <section className="container mx-auto px-3">
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
            <div className="w-6 h-6 border border-[#F56F53] rounded-[50%] text-[#F56F53] flex justify-center">
              3
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-5 mb-10 text-center">
          <span className="w-[100px] lg:w-[177px] text-[10px] lg:text-lg  bg-[#F56F53] text-white p-1 lg:p-2 rounded-md">
            Passenger details
          </span>
          <span className="w-[100px] lg:w-[177px] text-[10px] lg:text-lg   border bg-[#F56F53] text-white p-1 lg:p-2  rounded-md">
            Payment Options
          </span>
          <span className="w-[100px] lg:w-[177px] text-[10px] lg:text-lg  bg-white border border-[#F56F53] text-[#F56F53] p-1 lg:p-2 rounded-md">
            Pay Now
          </span>
        </div>
      </div>
      <div className="shadow-lg my-20 ">
        <div className="max-w-[1350px] mx-auto px-2">
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
        <div className="">
          <h1 className="text-md lg:text-[25px] font-semibold text-black  pb-5 ">
            Choose Payment Options
          </h1>
          {/* payment card */}
          <div className="border-2 border-[#F56F53] text-[#F56F53] rounded-md flex justify-between items-start p-5 focus:via-fuchsia-600 hover:bg-[#f56e5323] ">
            <div className="flex justify-between items-start gap-5">
              <div>
                <img className="w-14 shadow-md  p-2" src={visa} alt="visa" />
              </div>
              <div>
                <p className="font-bold text-[13px] lg:text-lg">
                  Visa ending in 1234
                </p>
                <span className="opacity-70 pt-1 text-[13px] lg:text-lg">
                  Expiry 06/2024
                </span>
                <div className="flex justify-between items-center gap-5 pt-3 font-bold">
                  <p className="text-[13px] lg:text-lg">Set as default</p>
                  <p className="text-[13px] lg:text-lg">Edit</p>
                </div>
              </div>
            </div>
            <div className="border border-[#F56F53] w-4 h-4 rounded-[50%]  hover:bg-[#F56F53]">
              <img src={ok} alt="ok" />
            </div>
          </div>
          <div className="flex justify-end">
            <Link to="/pay">
              <button className="bg-[#F56F53] text-white py-3 px-10 rounded-md text-xs lg:text-lg font-semibold my-20">
                Proceed to Pay
              </button>
            </Link>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentOption;
