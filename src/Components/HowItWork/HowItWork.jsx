import React from "react";
import "./HowItWork.css";
import HowCard01 from "../../assets/howitcard01.svg";
import HowCard02 from "../../assets/howitcard02.svg";
import HowCard03 from "../../assets/howitcard03.svg";
import { Link } from "react-router-dom";

const HowItWork = () => {
  return (
    <div className="container mx-auto ">
      <h3 className=" font-semibold text-4xl uppercase text-gray-900 text-center mt-16 mb-5 ">
        how it <span className="HeadColor">works</span> ?
      </h3>
      <p className="SectionTitle px-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor 
        incididunt ut labore et dolore magna aliqua consectetur adipiscing.
      </p>

      {/* __________________________
            How it work card section
            ______________________________ */}
      <div className="mb-[70px] grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3 justify-between align-middle">
        {/* _________01_________ */}
        <div className="HowItCard mx-auto hover:bg-slate-100">
          <img
            className="w-full h-76 HowItCardImg"
            src={HowCard01}
            alt="img-how it card"
          />
          <div className="HowItCardSet">
            <h4 className="HowItCardTitle">book online</h4>
            <p className="HowItCardText">
              Book your bus tickets online easily & securely. Convenient, fast,
              and affordable travel.
            </p>
            <Link to="/bookOnline">
              <button className="HowItCardButton">read more</button>
            </Link>
          </div>
        </div>
        {/* _________02_________ */}
        <div className="HowItCard mx-auto hover:bg-slate-100">
          <img
            className="w-screen HowItCardImg"
            src={HowCard02}
            alt="img-how it card"
          />
          <div className="HowItCardSet">
            <h4 className="HowItCardTitle">payment</h4>
            <p className="HowItCardText">
              Pay bus fare easily with cash, credit/debit card, mobile wallet,
              options available.
            </p>
            <Link to="/payment">
              <button className="HowItCardButton">read more</button>
            </Link>
          </div>
        </div>
        {/* _________03_________ */}
        <div className="HowItCard mx-auto hover:bg-slate-100 col-span-1 md:col-span-2 lg:col-span-1">
          <img
            className="w-screen  HowItCardImg"
            src={HowCard03}
            alt="img-how it card"
          />
          <div className="HowItCardSet">
            <h4 className="HowItCardTitle">get ticket</h4>
            <p className="HowItCardText">
              Get bus tickets easily, available online or at terminals, plan
              your trip now.
            </p>
            <Link to="/getTicket">
              <button className="HowItCardButton">read more</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
