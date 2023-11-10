import { Transition } from "@headlessui/react";
import { useContext, useRef, useState } from "react";
import "./NavSection.css";
import navLogo01 from "../../assets/navLogo01.svg";
import navLogo02 from "../../assets/navLogo02.svg";
import navLogo03 from "../../assets/navLogo03.svg";
import navLogo04 from "../../assets/navLogo04.svg";
import { Link } from "react-router-dom";
import { contextLogToken, contextUser } from "../../App";

const NavSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const divRef = useRef();
  const { userInfo, setUserInfo } = useContext(contextUser);
  const { logToken, setLogToken } = useContext(contextLogToken);

  console.log(logToken);
  const logOutUser = () =>{
    window.localStorage.removeItem("accessToken");
    setLogToken('')
  }

  return (
    <nav>
      <nav className="bg-white">
        <div className="container mx-auto px-5">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="">
                <Link to="/">
                  <h1 className="text-2xl font-bold text-gray-900">Logo</h1>
                </Link>
              </div>
              <div className="hidden lg:block">
                <div className="ml-5 md:ml-0 lg:ml-10 xl:ml-12 flex items-baseline space-x-4">
                  <a href="#" className="NavLinkRow ">
                    {/* <div className='bg-[#6D9838] text-xs text-white relative top-[-5px]'>coming soon</div> */}
                    <img className="mr-2" src={navLogo01} alt="flights" />{" "}
                    Flights
                  </a>

                  <a href="#" className="NavLinkRow ">
                    <img className="mr-2" src={navLogo02} alt="train" /> Train
                  </a>

                  <a href="#" className="NavLinkRow ">
                    <img className="mr-2" src={navLogo03} alt="buses" />{" "}
                    <span className="HeadColor">Buses</span>
                  </a>

                  <a href="#" className="NavLinkRow">
                    <img className="mr-2" src={navLogo04} alt="hotel" /> Hotel
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden lg:block ">
              {logToken ? (
                <button onClick={logOutUser} className=" border-[#F56F53] border-r border-l px-2 HeadColor text-[15px] md:text-[17px] lg:text-[20px] font-bold py-2">
                  {/* {userInfo?.fullname?.slice(0,1)} */}
                  LogOut
                </button>
                
              ) : (
                <div>
                  <Link to="/login">
                    <button className="loginButton HeadColor text-[15px] md:text-[17px] lg:text-[20px] font-bold py-2 mr-5">
                      Login
                    </button>
                  </Link>
                  <Link to="/signUp">
                    <button className=" loginButton normalColor text-[15px] md:text-[17px] lg:text-[20px] font-bold py-2">
                      sign Up
                    </button>
                  </Link>
                </div>
              )}
            </div>
            <div className="-mr-2 flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className=" inline-flex items-center justify-center p-2 rounded-md HeadColor text-xl hover:text-[#f56e53bd]  "
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
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
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={divRef} className=" pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#"
                  className=" px-auto flex justify-start align-middle ml-4 pr-3 text-xl normalColor"
                >
                  {/* <div className='bg-[#6D9838] text-xs text-white relative top-[-5px]'>coming soon</div> */}
                  <img className="mr-2" src={navLogo01} alt="flights" /> Flights
                </a>

                <a
                  href="#"
                  className=" px-auto flex justify-start align-middle ml-4 pr-3 text-xl normalColor"
                >
                  <img className="mr-2" src={navLogo02} alt="train" /> Train
                </a>

                <a
                  href="#"
                  className=" px-auto flex justify-start align-middle ml-4 pr-3 text-xl "
                >
                  <img className="mr-2" src={navLogo03} alt="buses" />{" "}
                  <span className="HeadColor">Buses</span>
                </a>

                <a
                  href="#"
                  className=" px-auto flex justify-start align-middle ml-4 pr-3 text-xl normalColor"
                >
                  <img className="mr-2" src={navLogo04} alt="hotel" /> Hotel
                </a>

                <div className=" flex justify-start align-middle ml-4 pr-3 text-md ">
                  <button className="loginButton HeadColor text-[15px] md:text-[17px] lg:text-[20px] font-bold py-2 mr-5">
                    <Link to="/signUp"> Login</Link>
                  </button>

                  <button className=" loginButton normalColor text-[15px] md:text-[17px] lg:text-[20px] font-bold py-2">
                    <Link to="/signUp">sign Up</Link>
                  </button>
                </div>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </nav>
  );
};

export default NavSection;
