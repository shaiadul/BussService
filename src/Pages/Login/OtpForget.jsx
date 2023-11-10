import React, { useEffect } from "react";
import otpPic from "../../assets/undraw_authentication.png";
import { FiEdit2 } from "react-icons/fi";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { contextForgetEmail, contextLogToken } from "../../App";
import axios from "axios";

const OtpForget = () => {
  const { emailForget, setEmailForget } = useContext(contextForgetEmail);
  const { logToken, setLogToken } = useContext(contextLogToken);
  const [edit, setEdit] = useState(false);
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [emailE, setEmailE] = useState(emailForget);

  // console.log(userInfo.phone);
  const navigate = useNavigate();
  const navigateNewPass = () => {
    navigate("/NewPass");
  };

  const editing = () => {
    setEdit(!edit);
  };

  const handleChange = (element, index) => {
    setEmailE(emailForget);
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  const handleVerify = async (e) => {
    e.preventDefault();
    const email = emailForget;
    const verify = { otp: otp.join(""), email };
    console.log(verify);

    try {
      const response = await axios.post(
        "https://bus.hoogaaa.com/api/v1/users/forgetPassword/otpValidation",
        verify
      );
      window.localStorage.setItem("accessToken", response.data.data.token);
      setLogToken(response.data.data.token)
      navigateNewPass();
    } catch (error) {
      console.log("Error From Axios Post :::::: ", error.message);
    }
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
              onClick={handleVerify}
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

export default OtpForget;
