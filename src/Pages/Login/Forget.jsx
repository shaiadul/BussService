import React, { useContext, useRef } from 'react';
import loginPic from '../../assets/undraw_login.png';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { contextForgetEmail,} from '../../App';
import axios from 'axios';

const Forget = () => {
  const { emailForget, setEmailForget} = useContext(contextForgetEmail);
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);

  // handle toggle
  const toggle = () => {
    setOpen(!open);
  };
  const navigate = useNavigate();
  const navigateForgetOtp = () => {
    navigate("/otpForget");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const forgetInfo = {
      email,
    };
    console.log(forgetInfo);

    try {
      const response = await axios.post(
        "https://bus.hoogaaa.com/api/v1/users/forgetPassword",
        forgetInfo
      );
      console.log("successfully hit", response );
      setEmailForget(email)
      console.log('this is forget email',emailForget);
      navigateForgetOtp();
    } catch (error) {
      console.log("Error From Axios Post :::::: ", error.message);
    }
  };
  return (
    <section className='container mx-auto px-5'>
      <Link to='/'>
        <p className='text-black text-lg  my-12'>Logo</p>
      </Link>

      <div className='grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-5 mb-10'>
        <div className='py-5'>
          <h3 className='text-xl lg:text-[30px] text-black '>
            Book your <span className='text-[#F56F53]'>Journey</span> with Ease!
          </h3>
          <h3 className='text-xl lg:text-[30px] text-black pt-2'>
            Anytime, Anywhere!
          </h3>
          <img className='my-20' src={loginPic} alt='loginPic' />
        </div>
        <div className='my-5 w-full  lg:w-[440px] ml-auto'>
          <div className='rounded-xl px-5 py-5 shadow-xl border-t'>
      
            <h1 className='font-semibold text-black text-[25px] py-5'>
            Forget Password
            </h1>
            <form onSubmit={handleSubmit} action=''>
              <input
                type='email'
                defaultValue={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full border-b py-2 my-5 outline-none text-slate-400'
                placeholder='Email Address'
                required
              />
              <button
                type='submit'
                className='w-full py-5 my-10 bg-[#F56F53] text-white rounded-lg font-bold'
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

export default Forget;
