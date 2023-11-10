import React, { useContext } from "react";
import loginPic from "../../assets/undraw_login.png";
import googleIcon from "../../assets/google-icon.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import axios from "axios.jsx";
import { useEffect } from "react";
import showPass from "../../assets/show-pass.png";
import hidePass from "../../assets/hide-pass.png";
import validator from 'validator'
import { contextUser } from "../../App";

const SignUp = () => {
  // handle toggle
  const toggle = () => {
    setOpen(!open);
  };
  const navigate = useNavigate();
  const navigateOtp = () => {
    navigate("/otp");
  };

  const {userInfo, setUserInfo} = useContext(contextUser)

  const [fullname, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMessage("");
    } else {
      setErrorMessage("It must contain 1 capital,1 small letter,1 special sign,1 number");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userInfo = { fullname, phone, email, password };
    console.log(userInfo);

    try {
      const response = await axios.post(
        "https://bus.hoogaaa.com/api/v1/users/register",
        userInfo
      );
      console.log("successfully hit");
      setUserInfo(userInfo)
      navigateOtp();
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
          <img className="my-20" src={loginPic} alt="loginPic" />
        </div>
        <div className="my-5 w-full  lg:w-[440px] ml-auto">
          <div className="rounded-xl px-5 py-5 shadow-xl border-t">
            <div className="mx-auto text-center  py-5 flex justify-center">
              <div className=" bg-[#fef1ee] px-4 py-2 rounded-lg">
                <Link to="/login">
                  <button className="text-[#F56F53] font-semibold">
                    Login
                  </button>
                </Link>
                <button className="bg-[#F56F53] py-2 px-4 rounded-lg font-semibold ml-2">
                  Sign Up
                </button>
              </div>
            </div>
            <h1 className="font-semibold text-black text-[25px] py-5">
              welcome!
            </h1>

            <form onSubmit={handleSubmit}>
              <input
                value={fullname}
                onChange={(e) => setFullName(e.target.value)}
                type="text"
                className="w-full border-b py-2 mt-5 mb-3 outline-none text-slate-400"
                placeholder="Full Name"
                required
              />
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="text"
                className="w-full border-b py-2 my-1 outline-none text-slate-400"
                placeholder="Phone Number"
                required
              />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="w-full border-b py-2 my-1 outline-none text-slate-400"
                placeholder="Email"
                required
              />
              <div className="relative">
                <input
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value) || validate(e.target.value)
                  }
                  type={open === false ? "password" : "text"}
                  className="w-full border-b py-2 mb-2 mt-3 outline-none text-slate-400 "
                  placeholder="Password"
                  required
                />
                {errorMessage === "" ? null : (
                  <span className="text-xs text-red-600"
                  >
                    {errorMessage}
                  </span>
                )}
                <div className="text-2xl absolute top-4 right-5 ">
                  {open === false ? (
                    <img src={showPass} alt="showPass" onClick={toggle} />
                  ) : (
                    <img src={hidePass} alt="showPass" onClick={toggle} />
                  )}
                </div>
              </div>

              <button
                type="submit"
                // onClick={handleSubmit}
                className="w-full py-5 my-10 bg-[#F56F53] text-white rounded-lg font-bold"
              >
                Sign Up
              </button>
              <div className="flex justify-between items-center gap-x-3">
                <div className=" w-full border "></div>
                <span className="text-slate-400">Or</span>
                <div className=" w-full border "></div>
              </div>
              <div className="border my-5">
                <Link>
                  <div className="text-center flex justify-center items-center py-3">
                    <img className="mr-2" src={googleIcon} alt="google" />

                    <span className="text-xl text-black font-bold">
                      Login with Google
                    </span>
                  </div>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
