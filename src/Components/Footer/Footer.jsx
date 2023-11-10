import React from 'react';
import './Footer.css';
import footerFacebook from '../../assets/footerFacebook.svg';
import footerIn from '../../assets/footerIn.svg';
import footerTelegram from '../../assets/footerTelegram.svg';
import footerTwit from '../../assets/footerTwit.svg';
import Vector01 from '../../assets/Vector01.svg';
import Vector02 from '../../assets/Vector02.svg';
import Vector03 from '../../assets/Vector03.svg';
import Vector04 from '../../assets/Vector04.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-[#F56F53] mt-auto'>
      <div className='container mx-auto px-5 '>
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-between items-start gap-5 pt-10 border-b-[1px] border-[#ffffff30] pb-10'>
          {/* footer left */}
          <div className='footerLeft'>
            <h1 className='FooterHeading '>Subscribe for updates</h1>
            <div className='FooterInputDiv'>
              <input
                className='FooterInput '
                type='text'
                placeholder='Enter Your Email Hear'
              />
              <button className='FooterInputBtn hover:bg-slate-100'>Subscribe</button>
            </div>
            {/* footer left grid section */}
            <div className='FooterLeftGrid grid justify-between grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-1 gap-3'>
              {/* ____1____ */}
              <div>
                <h1 className='FooterHeading '>know more</h1>
                <ul className='mt-3'>
                  <li className='FooterList hover:text-white'>About Us</li>
                  <Link to='blog'>
                    <li className='FooterList hover:text-white'>Our blogs</li>
                  </Link>
                  <li className='FooterList hover:text-white'>Privacy Policy</li>
                  <li className='FooterList hover:text-white'>Terms & Conditions</li>
                </ul>
              </div>
              {/* ____2____ */}
              {/* <div>

                            </div> */}
              {/* ____3____ */}
              <div>
                <h1 className='FooterHeading '>Other services</h1>
                <ul className='mt-3'>
                  <Link to='/bookOnline'>
                    <li className='FooterList hover:text-white'>Online booking</li>
                  </Link>

                  <Link to='/payment'>
                    <li className='FooterList hover:text-white'>Online payment</li>
                  </Link>
                  <li className='FooterList hover:text-white'>Seat availability</li>
                  <li className='FooterList hover:text-white'>Customer service</li>
                </ul>
              </div>
            </div>
          </div>
          {/* footer middle */}
          <div></div>
          {/* footer right */}
          <div className='footerRight'>
            <h1 className='FooterHeading '>Reach Us At</h1>
            <div className='my-4 flex justify-start align-middle'>
              <img className='mr-5' src={footerFacebook} alt='footerFacebook' />
              <img className='mr-5' src={footerIn} alt='footerIn' />
              <img className='mr-5' src={footerTelegram} alt='footerTelegram' />
              <img src={footerTwit} alt='footerTwit' />
            </div>
            <ul className='mt-8'>
              <li className='FooterList hover:text-white flex justify-start align-middle'>
                <img className='mr-4 w-8 ' src={Vector01} alt='Vector01' />
                <a href='tel:022-4011-5448' alt='022-4011-5448'>
                  022-4011-5448
                </a>
              </li>
              <li className='FooterList hover:text-white flex justify-start align-middle'>
                <img className='mr-4 w-8 ' src={Vector02} alt='Vector02' />
                <a href='tel:+91-9987575606' alt='+91-9987575606'>
                  +91-9987575606
                </a>
              </li>
              <li className='FooterList hover:text-white flex justify-start align-middle'>
                <img className='mr-4 w-8 ' src={Vector03} alt='Vector03' />
                <a href='mailto:mail@trainticket.in' alt='mail@trainticket.in'>
                  mail@trainticket.in
                </a>
              </li>
              <li className='FooterList hover:text-white flex justify-start align-middle'>
                <img className='mr-4 w-8 ' src={Vector04} alt='Vector04' />
                501,603 Sunshine T-39, <br />
                Andheri (W), Mumbai 400053
              </li>
            </ul>
          </div>
        </div>
        {/* ___________last section of footer ____________ */}
        <div>
          <p className='py-[25px]  text-center text-[18px]'>
            © BusTicketBooking.com 2023,
            <span className='border-b'>Privacy Policy</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
