import { useRef } from "react";
import { useState } from "react";

const filtering = ({ isOpen }) => {
  const divRef = useRef();
  // const [isOpen, setIsOpen] = useState(false);
  const [seater, setSeater] = useState(false);
  const [ac, setAc] = useState(false);
  const [noneAc, setNoneAc] = useState(false);
  const [volvo, setVolvo] = useState(false);
  const handleClearBusType = () => {
    setSeater(false);
    setAc(false);
    setNoneAc(false);
    setVolvo(false);
  };


  return (
    <aside className=" ">
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } h-full p-3 space-y-2 w-[290px] border border-gray-200 text-[#121212b6] mb-10 rounded-lg z-50 bg-gray-600 lg:bg-white absolute md:relative lg:relative overflow-y-scroll`}
      >
        <div className="flex justify-between items-center border-b pb-3">
          <h1 className="text-[20px] font-bold ">Filter By</h1>
          <p className="text-[#F56F53] ">reset</p>
        </div>

        <div>
          <div className="flex justify-between items-center py-3">
            <h1 className="text-[20px] ">Bus Type</h1>
            <p onClick={handleClearBusType} className="text-[#F56F53] cursor-pointer">clear all</p>
          </div>

          <div className="pb-3 border-b">
            <ul>
              <li className="my-2">
                <input
                  id="checkbox"
                  type="checkbox"
                  value=""
                  checked={seater}
                  onChange={() => setSeater(!seater)}
                  className="findCheckbox w-4 h-4 text-[#F56F53] rounded "
                />
                <label
                  htmlFor="checkbox"
                  className="ml-2 text-sm text-[#121212b6]"
                >
                  Seater
                </label>
              </li>
              <li className="my-2">
                <input
                  id="checkbox"
                  type="checkbox"
                  value=""
                  checked={ac}
                  onChange={() => setAc(!ac)}
                  className="findCheckbox w-4 h-4 text-[#F56F53] rounded "
                />
                <label
                  htmlFor="checkbox"
                  className="ml-2 text-sm text-[#121212b6]"
                >
                  AC
                </label>
              </li>
              <li className="my-2">
                <input
                  id="checkbox"
                  type="checkbox"
                  value=""
                  checked={noneAc}
                  onChange={() => setNoneAc(!noneAc)}
                  className="findCheckbox w-4 h-4 text-[#F56F53] rounded "
                />
                <label
                  htmlFor="checkbox"
                  className="ml-2 text-sm text-[#121212b6]"
                >
                  Non-Ac
                </label>
              </li>
              <li className="my-2">
                <input
                  id="checkbox"
                  type="checkbox"
                  checked={volvo}
                  onChange={() => setVolvo(!volvo)}
                  value=""
                  className="findCheckbox w-4 h-4 text-[#F56F53] rounded "
                />
                <label
                  htmlFor="checkbox"
                  className="ml-2 text-sm text-[#121212b6]"
                >
                  Volvo
                </label>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center py-3">
            <h1 className="text-[20px] ">Seat Avalibility</h1>
            <p className="text-[#F56F53] ">clear all</p>
          </div>

          <div className="pb-3 border-b">
            <ul>
              <li className="my-2">
                <input
                  id="checkbox"
                  type="checkbox"
                  value=""
                  className="findCheckbox w-4 h-4 text-[#F56F53] rounded "
                />
                <label
                  htmlFor="checkbox"
                  className="ml-2 text-sm text-[#121212b6]"
                >
                  Single Seat
                </label>
              </li>
              <li className="my-2">
                <input
                  id="checkbox"
                  type="checkbox"
                  value=""
                  className="findCheckbox w-4 h-4 text-[#F56F53] rounded "
                />
                <label
                  htmlFor="checkbox"
                  className="ml-2 text-sm text-[#121212b6]"
                >
                  Double Seat
                </label>
              </li>
              <li className="my-2">
                <input
                  id="checkbox"
                  type="checkbox"
                  value=""
                  className="findCheckbox w-4 h-4 text-[#F56F53] rounded "
                />
                <label
                  htmlFor="checkbox"
                  className="ml-2 text-sm text-[#121212b6]"
                >
                  Three Seater
                </label>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center py-3">
            <h1 className="text-[20px] ">Arrival Time</h1>
            <p className="text-[#F56F53] ">clear all</p>
          </div>

          <div className="pb-3 border-b">
            <ul>
              <li className="my-2">
                <input
                  id="checkbox"
                  type="checkbox"
                  value=""
                  className="findCheckbox w-4 h-4 text-[#F56F53] rounded "
                />
                <label htmlFor="checkbox" className="ml-2">
                  <span className="text-md font-semibold mr-1">Morning:</span>{" "}
                  <span className="text-[#121212b6]  text-sm">
                    {" "}
                    6 AM - 12 noon
                  </span>
                </label>
              </li>
              <li className="my-2">
                <input
                  id="checkbox"
                  type="checkbox"
                  value=""
                  className="findCheckbox w-4 h-4 text-[#F56F53] rounded "
                />
                <label htmlFor="checkbox" className="ml-2">
                  <span className="text-md font-semibold mr-1">Afternoon:</span>{" "}
                  <span className="text-[#121212b6]  text-sm">
                    {" "}
                    12 noon - 6 PM
                  </span>
                </label>
              </li>
              <li className="my-2">
                <input
                  id="checkbox"
                  type="checkbox"
                  value=""
                  className="findCheckbox w-4 h-4 text-[#F56F53] rounded "
                />
                <label htmlFor="checkbox" className="ml-2">
                  <span className="text-md font-semibold mr-1">Evening:</span>{" "}
                  <span className="text-[#121212b6]  text-sm">
                    {" "}
                    6 PM - 12 midnite
                  </span>
                </label>
              </li>
              <li className="my-2">
                <input
                  id="checkbox"
                  type="checkbox"
                  value=""
                  className="findCheckbox w-4 h-4 text-[#F56F53] rounded "
                />
                <label htmlFor="checkbox" className="ml-2">
                  <span className="text-md font-semibold mr-1">Night:</span>{" "}
                  <span className="text-[#121212b6]  text-sm">
                    {" "}
                    12 midnite - 6 AM
                  </span>
                </label>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center py-3">
            <h1 className="text-[20px] ">Departure Time</h1>
            <p className="text-[#F56F53] ">clear all</p>
          </div>

          <div className="pb-3 border-b">
            <ul>
              <li className="my-2">
                <input
                  id="checkbox"
                  type="checkbox"
                  value=""
                  className="findCheckbox w-4 h-4 text-[#F56F53] rounded "
                />
                <label htmlFor="checkbox" className="ml-2">
                  <span className="text-md font-semibold mr-1">Morning:</span>{" "}
                  <span className="text-[#121212b6]  text-sm">
                    {" "}
                    6 AM - 12 noon
                  </span>
                </label>
              </li>
              <li className="my-2">
                <input
                  id="checkbox"
                  type="checkbox"
                  value=""
                  className="findCheckbox w-4 h-4 text-[#F56F53] rounded "
                />
                <label htmlFor="checkbox" className="ml-2">
                  <span className="text-md font-semibold mr-1">Afternoon:</span>{" "}
                  <span className="text-[#121212b6]  text-sm">
                    {" "}
                    12 noon - 6 PM
                  </span>
                </label>
              </li>
              <li className="my-2">
                <input
                  id="checkbox"
                  type="checkbox"
                  value=""
                  className="findCheckbox w-4 h-4 text-[#F56F53] rounded "
                />
                <label htmlFor="checkbox" className="ml-2">
                  <span className="text-md font-semibold mr-1">Evening:</span>{" "}
                  <span className="text-[#121212b6]  text-sm">
                    {" "}
                    6 PM - 12 midnite
                  </span>
                </label>
              </li>
              <li className="my-2">
                <input
                  id="checkbox"
                  type="checkbox"
                  value=""
                  className="findCheckbox w-4 h-4 text-[#F56F53] rounded "
                />
                <label htmlFor="checkbox" className="ml-2">
                  <span className="text-md font-semibold mr-1">Night:</span>{" "}
                  <span className="text-[#121212b6]  text-sm">
                    {" "}
                    12 midnite - 6 AM
                  </span>
                </label>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center py-3">
            <h1 className="text-[20px] ">Amenities</h1>
            <p className="text-[#F56F53] ">clear all</p>
          </div>

          <div className="pb-3 ">
            <ul>
              <li className="my-2">
                <input
                  id="checkbox"
                  type="checkbox"
                  value=""
                  className="findCheckbox w-4 h-4 text-[#F56F53] rounded "
                />
                <label
                  htmlFor="checkbox"
                  className="ml-2 text-sm text-[#121212b6]"
                >
                  Water Bottle
                </label>
              </li>
              <li className="my-2">
                <input
                  id="checkbox"
                  type="checkbox"
                  value=""
                  className="findCheckbox w-4 h-4 text-[#F56F53] rounded "
                />
                <label
                  htmlFor="checkbox"
                  className="ml-2 text-sm text-[#121212b6]"
                >
                  wifi
                </label>
              </li>
              <li className="my-2">
                <input
                  id="checkbox"
                  type="checkbox"
                  value=""
                  className="findCheckbox w-4 h-4 text-[#F56F53] rounded "
                />
                <label
                  htmlFor="checkbox"
                  className="ml-2 text-sm text-[#121212b6]"
                >
                  Charging Point
                </label>
              </li>
              <li className="my-2">
                <input
                  id="checkbox"
                  type="checkbox"
                  value=""
                  className="findCheckbox w-4 h-4 text-[#F56F53] rounded "
                />
                <label
                  htmlFor="checkbox"
                  className="ml-2 text-sm text-[#121212b6]"
                >
                  CCTV
                </label>
              </li>
              <li className="my-2">
                <input
                  id="checkbox"
                  type="checkbox"
                  value=""
                  className="findCheckbox w-4 h-4 text-[#F56F53] rounded "
                />
                <label
                  htmlFor="checkbox"
                  className="ml-2 text-sm text-[#121212b6]"
                >
                  GPS Tracking
                </label>
              </li>
              <li className="my-2">
                <input
                  id="checkbox"
                  type="checkbox"
                  value=""
                  className="findCheckbox w-4 h-4 text-[#F56F53] rounded "
                />
                <label
                  htmlFor="checkbox"
                  className="ml-2 text-sm text-[#121212b6]"
                >
                  Hand Sanitizer
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};
export default filtering;
