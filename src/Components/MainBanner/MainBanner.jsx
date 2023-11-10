import React, { useState } from "react";
import "./MainBanner.css";
import bannerIcon01 from "../../assets/bannerIcon01.svg";
import bannerIcon02 from "../../assets/bannerIcon02.svg";
import bannerIcon03 from "../../assets/bannerIcon03.svg";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
// var data = require("../../Mock_Date.json");

const MainBanner = () => {
  const [selected, setSelected] = useState(new Date());
  const [showDate, setShowDate] = useState(false);
  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>{format(selected, "PP")}.</p>;
  }
  const data = [
    { full_name: "Mumbai" },
    { full_name: "Delhi" },
    { full_name: "Bangalore " },
    { full_name: "Hyderabad" },
    { full_name: "Ahmedabad" },
    { full_name: "Chennai" },
    { full_name: "Kolkata" },
    { full_name: "Surat" },
    { full_name: "Pune" },
    { full_name: "Jaipur" },
    { full_name: "Lucknow" },
    { full_name: "Kanpur" },
    { full_name: "Nagpur" },
    { full_name: "Indore" },
    { full_name: "Thane" },
    { full_name: "Bhopal" },
    { full_name: "Visakhapatnam" },
    { full_name: "Patna" },
    { full_name: "Vadodara" },
    { full_name: "Ghaziabad" },
    { full_name: "Agra" },
    { full_name: "Faridabad" },
  ];

  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
  };

  const onChange2 = (event) => {
    setValue2(event.target.value);
  };

  const onSearch2 = (searchTerm) => {
    setValue2(searchTerm);
  };
  // const isWeekend = (date) => {
  //   const day = date.getDay();
  //   return day === 0 || day === 6; // Sunday or Saturday
  // };

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
  // const disabledAllDays = [disabledDates, isWeekend];
  const disabledAllDays = [disabledDates];
  return (
    <section className=" MainBannerContainer">
      <div className=" container mx-auto">
        <div className="MainBannerContent mx-5 pb-14">
          <h1 className="bannerHead ">
            stop looking. <br />
            <span className="HeadColor">start tracking!</span>{" "}
          </h1>
          <p className="BannerPera">
            Book your next bus trip with ease. <br />
            Ride with us today!
          </p>

          {/* __________________________________
                        Banner Card section start here
                        __________________________________ */}
          <div className="BannerCardContainer w-full md:w-[355px] lg:w-[355px] ">
            <h4 className="bannerCardHead">find your tour</h4>

            <div className="relative">
              <div className="absolute left-4 top-3 ">
                <img className="h-5 w-5" src={bannerIcon01} alt="" />
              </div>

              <input
                value={value}
                onKeyUp={() => onSearch(value)}
                onChange={onChange}
                onClick={() => setShowDate(false)}
                className="bannerCardInput w-full hover:shadow-lg focus:shadow-lg focus:outline-none p-2.5 pl-10 mb-4"
                type="text"
                placeholder="Leaving from"
              />
              <div className="dropdown absolute bg-gray-600 text-white w-full shadow-lg mb-2">
                {data
                  .filter((item) => {
                    const searchTerm = value.toLowerCase();
                    const fullName = item.full_name.toLowerCase();

                    return (
                      searchTerm &&
                      fullName.startsWith(searchTerm) &&
                      fullName !== searchTerm
                    );
                  })
                  .slice(0, 10)
                  .map((item) => (
                    <div
                      onClick={() =>
                        setValue(item.full_name) && setShowDate(false)
                      }
                      onKeyUp={() => onSearch(item.full_name)}
                      className="dropdown-row"
                      key={item.full_name}
                    >
                      {item.full_name}
                    </div>
                  ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute left-4 top-3 ">
                <img className="h-5 w-5" src={bannerIcon03} alt="" />
              </div>

              <input
                value={value2}
                onKeyUp={() => onSearch2(value2)}
                onChange={onChange2}
                onClick={() => setShowDate(false)}
                className="bannerCardInput w-full hover:shadow-lg focus:shadow-lg focus:outline-none p-2.5 pl-10 mb-4"
                type="text"
                placeholder="Going to"
              />
              <div className="dropdown absolute bg-gray-600 text-white w-full shadow-lg mb-2">
                {data
                  .filter((item) => {
                    const searchTerm = value2.toLowerCase();
                    const fullName = item.full_name.toLowerCase();

                    return (
                      searchTerm &&
                      fullName.startsWith(searchTerm) &&
                      fullName !== searchTerm
                    );
                  })
                  .slice(0, 10)
                  .map((item) => (
                    <div
                      onClick={() =>
                        setValue2(item.full_name) && setShowDate(false)
                      }
                      onKeyUp={() => onSearch(item.full_name)}
                      className="dropdown-row"
                      key={item.full_name}
                    >
                      {item.full_name}
                    </div>
                  ))}
              </div>
            </div>

            <div className="relative">
              <label
                htmlFor="dateInput"
                className="absolute block left-4 top-3"
              >
                <img className="h-5 w-5" src={bannerIcon02} alt="" />
              </label>

              <input
                id="dateInput"
                className="bannerCardInput w-full shadow-md hover:shadow-xl focus:outline-none p-2.5 pl-10 mb-4"
                type="text"
                placeholder="Date of journey"
                value={format(selected, "PP")}
                onClick={() => setShowDate(!showDate)}
                readOnly
              />
              {showDate && (
                <>
                  <div className="">
                    <DayPicker
                      className="text-white py-3 flex justify-center shadow-xl absolute bg-gray-600 w-full rounded-lg"
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
            </div>

            {/* _________________banner card button___________________ */}
            <Link to="/busFind">
              <button className="bannerCardButton">Search buses</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
