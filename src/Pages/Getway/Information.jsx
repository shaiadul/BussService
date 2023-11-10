import React from "react";
import InfoForm from "./InfoForm";
import Contact from "./Contact";
import ok from "../../assets/ok.svg"

const Information = () => {
  return (
    <section className="container mx-auto px-5 ">
      <div className="mt-20 flex justify-center items-start mx-auto max-w-[1350px]">
        <div className="">
          <div className="w-6 h-6 bg-[#F56F53] rounded-[50%] flex justify-center"><img className="w-4" src={ok} alt="ok" /></div>
        </div>
        <div className="mt-3 h-[3px] bg-[#F56F53] w-full"></div>
        <div>
          <div className="w-6 h-6  border border-[#F56F53] rounded-[50%] text-[#F56F53] flex justify-center">2</div>
        </div>
        <div className="mt-3 h-[3px] bg-[#F56F53] w-full"></div>
        <div>
          <div className="w-6 h-6 border border-[#F56F53] rounded-[50%] text-[#F56F53] flex justify-center">3</div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-5 mb-10 text-center">
        <span className="w-[100px] lg:w-[177px] text-[10px] lg:text-lg  bg-[#F56F53] text-white p-1 lg:p-2 rounded-md">
          Passenger details
        </span>
        <span className="w-[100px] lg:w-[177px] text-[10px] lg:text-lg  bg-white border border-[#F56F53] text-[#F56F53] p-1 lg:p-2  rounded-md">
        Payment Options
        </span>
        <span className="w-[100px] lg:w-[177px] text-[10px] lg:text-lg  bg-white border border-[#F56F53] text-[#F56F53] p-1 lg:p-2 rounded-md">
        Pay Now
        </span>
      </div>
      <div className="shadow-xl px-3 py-8 mb-20">
        <InfoForm />
        <Contact />
      </div>
    </section>
  );
};

export default Information;
