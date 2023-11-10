import React, { useContext, useRef } from "react";
import loginPic from "../../assets/undraw_login.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import showPass from "../../assets/show-pass.png";
import hidePass from "../../assets/hide-pass.png";
import { contextForgetEmail } from "../../App";
import validator from 'validator'
import axios from "axios";

const NewPass = () => {
  const { emailForget, setEmailForget} = useContext(contextForgetEmail);
  const [open, setOpen] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessageConfirm, setErrorMessageConfirm] = useState("");

  // handle toggle
  const NewToggle = () => {
    setOpen(!open);
  };
  const ConfirmToggle = () => {
    setOpenConfirm(!openConfirm);
  };

  const validateNew = (value) => {
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
  const validateConfirm = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMessageConfirm("");
    } else {
      setErrorMessageConfirm("It must contain 1 capital,1 small letter,1 special sign,1 number");
    }
  };

  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/");
  };
  const token = window.localStorage.getItem('accessToken');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const forgetInfo = {
      email: emailForget,
      token,
      password : newPassword == confirmPassword ? confirmPassword : 'nothing'

    };
    console.log(forgetInfo);

    try {
      const response = await axios.post(
        "https://bus.hoogaaa.com/api/v1/users/forgetPassword/changePass",
        forgetInfo
      );
      console.log("successfully hit", response );
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
            <h1 className="font-semibold text-black text-[25px] py-5">
              Enter New Password
            </h1>
            <form onSubmit={handleSubmit} action="">
              <div className="relative">
                <input
                  type={open === false ? "password" : "text"}
                  className="w-full border-b py-2 mt-5 mb-2 outline-none text-slate-400 "
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value) || validateNew(e.target.value)}
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
                    <img src={showPass} alt="showPass" onClick={NewToggle} />
                  ) : (
                    <img src={hidePass} alt="showPass" onClick={NewToggle} />
                  )}
                </div>
              </div>
              <div className="relative">
                <input
                  type={openConfirm === false ? "password" : "text"}
                  className="w-full border-b py-2 mt-5 mb-2 outline-none text-slate-400 "
                  placeholder="Confirm New Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value) || validateConfirm(e.target.value)}
                  required
                />
                {errorMessageConfirm === "" ? null : (
                  <span className="text-xs text-red-600"
                  >
                    {errorMessageConfirm}
                  </span>
                )}
                <div className="text-2xl absolute top-4 right-5 ">
                  {openConfirm === false ? (
                    <img
                      src={showPass}
                      alt="showPass"
                      onClick={ConfirmToggle}
                    />
                  ) : (
                    <img
                      src={hidePass}
                      alt="showPass"
                      onClick={ConfirmToggle}
                    />
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-5 my-10 bg-[#F56F53] text-white rounded-lg font-bold"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewPass;
