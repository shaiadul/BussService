import React, { useEffect } from "react";
import otpPic from "../../assets/undraw_authentication.png";
import { FiEdit2 } from "react-icons/fi";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { contextUser } from "../../App";
import axios from "axios";

const Otp = () => {
  const { userInfo, setUserInfo } = useContext(contextUser);
  const [edit, setEdit] = useState(false);
  const [verify, setVerify] = useState(false);
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [emailE, setEmailE] = useState(userInfo.email);

  // console.log(userInfo.phone);
  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate("/login");
  };

  const editing = () => {
    setEdit(!edit);
  };

  const handleChange = (element, index) => {
    setEmailE(userInfo.email);
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  const handleVerify = async (e) => {
    e.preventDefault();
    const email = userInfo.email;
    const verify = { otp: otp.join(""), email };
    console.log(verify);

    try {
      const response = await axios.post(
        "https://bus.hoogaaa.com/api/v1/users/verify",
        verify
      );
      // setVerify(true);
      CreateUserDb();
      navigateLogin();
    } catch (error) {
      console.log("Error From Axios Post :::::: ", error.message);
    }
  };
  const CreateUserDb = async () => {
    // useEffect(() => {
      // if (verify) {
        console.log(userInfo);
        try {
          const response = await axios.post(
            "https://bus.hoogaaa.com/api/v1/users/register/createUser/",
            userInfo
          );
          console.log("Successfully Created User", response);
          navigateHome();
        } catch (error) {
          console.log("Error From Axios UserDB :::::: ", error.message);
        }
      // }
    // }, [verify]);
  };

  return (
    <section className="container mx-auto px-5">
      <Link to="/">
        <p className="text-black text-lg  my-12">Logo</p>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-5 mb-10">
        <div className="py-5">
          <h3 className="text-xl lg:text-[30px] text-black ">
            Book your <span className="text-[#F56F53]">Journey</span> with Ease!
          </h3>
          <h3 className="text-xl lg:text-[30px] text-black pt-2">
            Anytime, Anywhere!
          </h3>
          <img className="my-20" src={otpPic} alt="loginPic" />
        </div>
        <div className="my-5 w-full  lg:w-[440px] ml-auto">
          <div className="rounded-xl px-5 py-5 shadow-xl border-t text-center">
            <h1 className="text-xl font-semibold text-black">
              Verification Code
            </h1>
            <p className="text-md text-slate-700 pt-2">
              We have send the code verification to
            </p>
            <div className="text-[#F56F53] py-3 flex justify-center items-center gap-2">
              <input
                type="email"
                className="text-center border-none focus:outline-none"
                readOnly={!edit}
                defaultValue={emailE}
              />
              <span onClick={editing}>
                <FiEdit2 className="text-[#F56F53] cursor-pointer" />
              </span>
            </div>

            <div className="flex justify-center items-center gap-2">
              {otp.map((data, index) => {
                return (
                  <input
                    className="w-10 mr-2 pl-3 h-10 border-b-2 border-slate-500 my-10 focus:outline-none text-xl font-semibold text-slate-500"
                    type="number"
                    name="otp"
                    maxLength="1"
                    key={index}
                    value={data}
                    onChange={(e) => handleChange(e.target, index)}
                    onFocus={(e) => e.target.select()}
                  />
                );
              })}
            </div>
            <div className="text-md text-black">
              Didn’t receive the code?{" "}
              <span className="text-[#F56F53]">Resend</span>
            </div>
            <button
              onClick={handleVerify }
              className="w-full py-5 my-10 bg-[#F56F53] text-white rounded-lg font-bold"
            >
              Verify & Proceed
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Otp;
