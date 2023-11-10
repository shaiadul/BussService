import React, { useContext, useRef } from "react";
import loginPic from "../../assets/undraw_login.png";
import googleIcon from "../../assets/google-icon.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import showPass from "../../assets/show-pass.png";
import hidePass from "../../assets/hide-pass.png";
import { contextLogToken, contextUser } from "../../App";
import axios from "axios";

const Login = () => {
  const [open, setOpen] = useState(false);
  const [check, setCheck] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userInfo, setUserInfo } = useContext(contextUser);
  const { logToken, setLogToken } = useContext(contextLogToken);

  // handle toggle
  const toggle = () => {
    setOpen(!open);
  };
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginInfo = {
      email,
      password,
      type: check ? "checkbox" : "notcheckbox",
    };
    console.log(loginInfo);

    try {
      const response = await axios.post(
        "https://bus.hoogaaa.com/api/v1/users/login",
        loginInfo
      );
      console.log("successfully hit", response.data.data.userId);
      setLogToken(response.data.data.token);
      window.localStorage.setItem("accessToken", response.data.data.token);
      window.localStorage.setItem("UserId", response.data.data.userId);
      navigateHome();
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
                <button className="bg-[#F56F53] py-2 px-4 rounded-lg font-semibold mr-2">
                  Login
                </button>
                <Link to="/signUp">
                  <button className="text-[#F56F53] font-semibold">
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>
            <h1 className="font-semibold text-black text-[25px] py-5">
              welcome back, olivia
            </h1>
            <form onSubmit={handleSubmit} action="">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="w-full border-b py-2 my-5 outline-none text-slate-400"
                placeholder="Email Address"
                required
              />
              <div className="relative">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={open === false ? "password" : "text"}
                  className="w-full border-b py-2 mt-5 mb-2 outline-none text-slate-400 "
                  placeholder="Password"
                  required
                />
                <div className="text-2xl absolute top-4 right-5 ">
                  {open === false ? (
                    <img src={showPass} alt="showPass" onClick={toggle} />
                  ) : (
                    <img src={hidePass} alt="showPass" onClick={toggle} />
                  )}
                </div>
              </div>
              <Link to="/forget">
                {" "}
                <p className="text-end text-[#F56F53] mt-0 cursor-pointer hover:opacity-70">
                  Forgot password?
                </p>{" "}
              </Link>

              <div className="mt-5">
                <input
                  type="checkbox"
                  name=""
                  checked={check}
                  onChange={() => setCheck(!check)}
                  id="login-text"
                  className="findCheckbox w-4 h-4 text-[#F56F53] rounded  mr-2"
                />
                <label className="text-black " htmlFor="login-text ">
                  Remember for 30 days
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-5 my-10 bg-[#F56F53] text-white rounded-lg font-bold"
              >
                Login
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

export default Login;
