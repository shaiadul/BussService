import React from "react";
import { Link } from "react-router-dom";

const contact = () => {
  return (
    <div className="max-w-[1350px] mx-auto mt-20 mb-20">
      <h1 className="text-md lg:text-[25px] font-semibold text-black  pb-5  ">
        Contact Details
      </h1>
      <div className="flex-col lg:flex-row md:flex  gap-10 my-16">
        <div className="relative mb-6">
          <input
            className="findInputInfo pl-16 w-full border text-black"
            required=""
            type="phone"
            name="text"
            autoComplete="on"
          />

          <label className="user-label-Info">Phone Number</label>
          <select
            className=" absolute pl-2 left-0 top-4 text-[#F56F53] bg-transparent outline-none"
            name="countryCode"
            id="countryCode"
          >
            <option value="91">+91</option>
            <option value="92">+92</option>
            <option value="93">+93</option>
            <option value="94">+94</option>
          </select>
        </div>
        <div className="relative">
          <input
            className="findInputInfo w-full border text-black"
            required=""
            type="email"
            name="text"
            autoComplete="on"
          />

          <label className="user-label-Info">Email Address</label>
        </div>
      </div>
      <p className="text-md text-slate-500 my-7">
        Booking details will sent to this phone number and email address.
      </p>
      <div className=" flex justify-center lg:justify-end items-center gap-5">
        <button className="border border-[#F56F53] text-[#F56F53]  py-3 px-10 rounded-md text-xs lg:text-lg font-semibold">
          Discard
        </button>
        <Link to="/paymentOption">
          <button className="bg-[#F56F53] text-white py-3 px-10 rounded-md text-xs lg:text-lg font-semibold">
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
};

export default contact;
