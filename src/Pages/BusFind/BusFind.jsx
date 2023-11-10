import React, { useEffect, useRef } from "react";
import "./BusFind.css";
import cross from "../../assets/cross.svg";
import sideChange from "../../assets/sideChange.svg";
import Frame from "../../assets/Frame.svg";
import { useState } from "react";
import filterImg from "../../assets/filter.png";
import Filtering from "./Filtering";
import ResultCard from "./ResultCard";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";

const BusFind = () => {
  // 👇️ store input's value in state
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [selected, setSelected] = useState(new Date());
  const [showDate, setShowDate] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>{format(selected, "PP")}.</p>;
  }
  const disabledDates = (date) => {
    const today = new Date();
    const futureDate = new Date(today.getTime() + 60 * 24 * 60 * 60 * 1000);

    return date < today || date > futureDate;
  };

  const modifiers = {
    disabledDays: disabledDates,
    // weekend: isWeekend,
  };
  const modifiersStyles = {
    disabledDays: { color: "gray" },
    // weekend: { color: 'dark' },
  };
  const disabledAllDays = [disabledDates];

  const handleFrom = (event) => {
    setFrom(event.target.value);
  };
  const handleTo = (event) => {
    setTo(event.target.value);
  };
  const handleClearFrom = () => {
    setFrom("");
  };
  const handleClearTo = () => {
    setTo("");
  };
  const handleClearDate = () => {
    setSelected(new Date());
  };
  const handleSwap = () => {
    setFrom(to);
    setTo(from);
  };
  return (
    <section className="">
      <div className=" bg-[#F56F53] px-5 lg:px-20">
        <div
          className="text-white my-5 py-5 px-0 lg:px-5 flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-center
         mb-16 container mx-auto gap-y-5 gap-x-6"
        >
          <div className="flex justify-between items-center gap-5">
            <div className="input-group">
              <input
                className="findInput"
                required=""
                type="text"
                name="text"
                autoComplete="off"
                onChange={handleFrom}
                value={from}
              />
              <img
                onClick={handleClearFrom}
                className="crossSvg"
                src={cross}
                alt="cross"
              />

              <label className="user-label">From</label>
            </div>
            <div>
              <img
                className="cursor-pointer"
                onClick={handleSwap}
                src={sideChange}
                alt="sideChange"
              />
            </div>
            <div className="input-group">
              <input
                className="findInput"
                required=""
                type="text"
                name="text"
                autoComplete="off"
                onChange={handleTo}
                value={to}
              />
              <img
                onClick={handleClearTo}
                className="crossSvg"
                src={cross}
                alt="cross"
              />
              <label className="user-label">To</label>
            </div>
          </div>
          <div className="flex justify-between items-center gap-3">
            <div className="input-group">
              <input
                id="dateInput"
                className="findInput"
                required=""
                type="text"
                name="text"
                autoComplete="off"
                value={format(selected, "PP")}
                onClick={() => setShowDate(!showDate)}
                readOnly
              />
              {showDate && (
                <>
                  <div className="">
                    <DayPicker
                      className="text-white py-3 flex justify-center shadow-xl absolute bg-gray-600 w-full rounded-lg z-30"
                      mode="single"
                      selected={selected}
                      onSelect={setSelected}
                      disabled={disabledAllDays}
                      modifiers={modifiers}
                      modifiersStyles={modifiersStyles}
                    />
                  </div>
                </>
              )}

              <img
                onClick={() => handleClearDate() || setShowDate(false)}
                className="crossSvg"
                src={cross}
                alt="cross"
              />
              {/* <label className='user-label'>Date</label> */}
            </div>
            <div className=" bg-white rounded-lg">
              <button className="text-2xl text-center flex justify-center items-center capitalize text-[#F56F53] px-5 py-2 ">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* _____contend________ */}
      <div className="container mx-auto flex justify-between items-start gap-5">
        <Filtering isOpen={isOpen} />

        <div className="w-full mx-auto">
          <div className="flex justify-start items-center gap-x-4">
            <div className="flex justify-start items-center gap-x-4">
              <span className="text-xl font-bold text-[#121212b6]">
                Chandigarh
              </span>
              <img src={Frame} alt="" />
              <span className="text-xl font-bold text-[#121212b6]">Delhi</span>
            </div>
            {/* short Manuel btn */}
            <div className=" flex ml-auto lg:hidden mr-5">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className=" inline-flex items-center justify-center p-2 rounded-full shadow-xl HeadColor text-xl"
                aria-controls="mobile-slide-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <img className="w-6 h-6" src={filterImg} alt="" />
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="black"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <p className="text-[#121212b6] opacity-[0.5]">
            wednesday, 15 feb 2023
          </p>

          {/* card */}
          <ResultCard />
        </div>
      </div>
    </section>
  );
};

export default BusFind;
