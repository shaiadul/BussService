import React from "react";
import { Link } from "react-router-dom";
import HowCard01 from "../../assets/howitcard01.svg";
import HowCard02 from "../../assets/howitcard02.svg";
import HowCard03 from "../../assets/howitcard03.svg";

const BookOnline = () => {
  return (
    <section className="mt-2 pt-[5px] container mx-auto border-t ">
      <h3 className="BlogHead my-4">BookOnline</h3>

      {/* ________________content---------------- */}
      <div>
        <div className="px-3">
          <img className="w-full" src={HowCard01} alt="HowCard01" />

          <p className="text-justify text-[#121212] py-3 opacity-40 ">
            Booking bus tickets online has never been this easier with the
            advent of mobile phones and fast internet connections! Long queues
            at bus stations and travel agent counts are now a thing of the past
            now. If you’re looking to book bus ticket , then you need worry as
            the steps are quite simple. Reliable and reputed bus online
            ticketing companies have a 24/7 helpline service that you can call
            for any issues you might face during or after booking your bus
            ticket. You can also book for all your bus journeys to and from
            Singapore. Let’s look at the steps involved in booking a bus online
            ticket.
          </p>

          <h3 className="text-xl text-black font-bold mb-3">
            Here are the necessary steps that need to be followed when booking a
            bus ticket online:
          </h3>
        </div>
        <ul className="ml-6">
          <li className="text-[#121212] py-3 opacity-40 list-disc">
            Visit the online bus ticket website.
          </li>
          <li className="text-[#121212] py-3 opacity-40 list-disc">
            Sign up or log in with your registered account. Customers do not
            have to create an account to book a bus ticket. But, it is advisable
            to do so as they can avail special discounts and cashback offers.
          </li>
          <li className="text-[#121212] py-3 opacity-40 list-disc">
            Enter your source and destination locations in the “From” and “To”
            tab along with the date of departure and hit the “Search Buses”
            button.
          </li>
          <li className="text-[#121212] py-3 opacity-40 list-disc">
            Customers are then redirected to the search results page where they
            can view a list of buses that are operational on the provided route.
          </li>
          <li className="text-[#121212] py-3 opacity-40 list-disc">
            Customers can arrange the results by clicking on any of the “Sort
            By” options that are displayed towards the top of the screen.
          </li>
          <li className="text-[#121212] py-3 opacity-40 list-disc">
            Click on “View Seats” after you have selected a bus, select a seat,
            and click on “Proceed to Book”.
          </li>
          <li className="text-[#121212] py-3 opacity-40 list-disc">
            Once done, confirm the details of your ticket and complete the
            online bus booking procedure by making your payment.
          </li>
          <li className="text-[#121212] py-3 opacity-40 list-disc">
            The customer will receive their bus ticket on the customer’s
            registered email ID and mobile number..
          </li>
        </ul>

        {/* ______Booking process_______ */}
        <div className="my-10">
          <h3 className="text-xl text-black font-bold py-5">Booking process</h3>
          <div className="HowItCardContainer grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 justify-center align-middle mx-auto lg:mx-auto">
            {/* _________01_________ */}
            <div className="HowItCard mx-auto border-4 border-[#F56F53] rounded-2xl">
              <img
                className="w-full h-76 HowItCardImg"
                src={HowCard01}
                alt="img-how it card"
              />
              <div className="HowItCardSet">
                <h4 className="HowItCardTitle">book online</h4>
                <p className="HowItCardText">
                  Book your bus tickets online easily & securely. Convenient,
                  fast, and affordable travel.
                </p>
                <Link to="/bookOnline">
                  <button className="HowItCardButton">read more</button>
                </Link>
              </div>
            </div>
            {/* _________02_________ */}
            <div className="HowItCard mx-auto">
              <img
                className="w-screen HowItCardImg"
                src={HowCard02}
                alt="img-how it card"
              />
              <div className="HowItCardSet">
                <h4 className="HowItCardTitle">payment</h4>
                <p className="HowItCardText">
                  Pay bus fare easily with cash, credit/debit card, mobile
                  wallet, options available.
                </p>
                <Link to="/payment">
                  <button className="HowItCardButton">read more</button>
                </Link>
              </div>
            </div>
            {/* _________03_________ */}
            <div className="HowItCard mx-auto">
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
      </div>
    </section>
  );
};

export default BookOnline;
