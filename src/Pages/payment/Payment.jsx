import React from "react";
import { Link } from "react-router-dom";
import HowCard01 from "../../assets/howitcard01.svg";
import HowCard02 from "../../assets/howitcard02.svg";
import HowCard03 from "../../assets/howitcard03.svg";

const Payment = () => {
  return (
    <section className="mt-2 pt-[5px] container mx-auto border-t">
      <div className="px-3">
        <h3 className="BlogHead my-4">Payment</h3>

        <img className="w-full" src={HowCard02} alt="HowCard01" />

        <p className="text-justify text-[#121212] py-3 opacity-40">
          Online payment is an essential aspect of bus ticket booking websites.
          It allows customers to purchase tickets quickly and easily from the
          comfort of their homes or office. By accepting online payments, bus
          companies provide a convenient and efficient way for travelers to plan
          their trips. The payment process is secured with encryption technology
          and customers can choose from a variety of payment options including
          credit cards, debit cards, and digital wallets. In addition, online
          payment eliminates the need for cash transactions, reducing the risk
          of fraud and increasing the speed and accuracy of ticket purchases.
          Furthermore, online payment provides real-time updates on ticket
          availability and allows for easy tracking of transactions. Overall,
          online payment is a crucial aspect of the bus ticket booking process
          and benefits both customers and bus companies alike. Online payment is
          an essential aspect of bus ticket booking websites. It allows
          customers to purchase tickets quickly and easily from the comfort of
          their homes or office. By accepting online payments, bus companies
          provide a convenient and efficient way for travelers to plan their
          trips. The payment process is secured with encryption technology and
          customers can choose from a variety of payment options including
          credit cards, debit cards, and digital wallets. In addition, online
          payment eliminates the need for cash transactions, reducing the risk
          of fraud and increasing the speed and accuracy of ticket purchases.
          Furthermore, online payment provides real-time updates on ticket
          availability and allows for easy tracking of transactions. Overall,
          online payment is a crucial aspect of the bus ticket booking process
          and benefits both customers and bus companies alike.
        </p>
      </div>

      {/* ______Booking process_______ */}
      <div className="my-10">
        <h3 className="text-xl text-black font-bold py-5">Booking process</h3>
        <div className="HowItCardContainer grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 justify-center align-middle mx-auto lg:mx-auto">
          {/* _________01_________ */}
          <div className="HowItCard mx-auto ">
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
          <div className="HowItCard mx-auto border-4 border-[#F56F53] rounded-2xl">
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
    </section>
  );
};

export default Payment;
