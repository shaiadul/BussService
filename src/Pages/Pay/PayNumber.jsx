import React from "react";
import mastercard from "../../assets/Mastercard.png";
import cardLogo from "../../assets/card-logo-F.png";

const PayNumber = () => {
  return (
    <div className="my-10 ">
      <h1 className="text-md lg:text-[25px] font-semibold text-black  pb-5 ">
        Make Payment
      </h1>
      <div className="border flex justify-start items-center gap-3 w-full lg:w-[350px] mt-10 p-2 rounded-lg">
        <img className="w-6" src={mastercard} alt="mastercard" />
        <input
          className="outline-none border-none text-black"
          type="text"
          placeholder="Card Number"
        />
      </div>
      <div className="mt-10 flex flex-wrap justify-start items-center gap-4">
        <select
          className="text-slate-400 border rounded-lg outline-none py-3 px-5 w-full lg:w-[170px]"
          name=""
          id=""
        >
          <option value="">Month</option>
          <option value=""> Week</option>
          <option value="">Day </option>
        </select>
        <select
          className="text-slate-400 border rounded-lg outline-none py-3 px-5  w-full lg:w-[170px]"
          name=""
          id=""
        >
          <option value="">Year</option>
          <option value=""> Week</option>
          <option value="">Day </option>
        </select>
        <div className="text-slate-400 border rounded-lg outline-none  w-full lg:w-[170px] flex justify-between items-center ">
          <span className="pl-3">CCV </span>
          <div className="bg-slate-100 w-16 h-full ml-auto py-3">
            <img
              className="object-cover mx-auto w-6"
              src={cardLogo}
              alt="card"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayNumber;
