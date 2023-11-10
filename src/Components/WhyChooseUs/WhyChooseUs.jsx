import React from 'react';
import './WhyChooseUs.css';
import choose01 from '../../assets/choose01.svg';
import choose02 from '../../assets/choose02.svg';
import choose03 from '../../assets/choose03.svg';
import choose04 from '../../assets/choose04.svg';
import choose05 from '../../assets/choose05.svg';
import choose06 from '../../assets/choose06.svg';

const WhyChooseUs = () => {
    return (
        <div className='container mx-auto '>
            <div className='chooseContainer mx-auto'>
                <h3 className=' font-semibold text-4xl uppercase text-gray-900 text-center mt-16 mb-5 pt-12'>why <span className='HeadColor'>choose</span> us?</h3>
                <p className='SectionTitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua consectetur adipiscing.</p>

                <div className='WhyChooseCardContainer grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-y-5 lg:gap-y-16 justify-center align-middle  mx-5 lg:mx-auto pb-16 mb-20'>
                    {/* _________01_________ */}
                    <div className='WhyChooseCard mx-auto'>
                        <div className='WhyChooseCardImgDiv'>
                            <img src={choose01} alt="mobile" />
                        </div>
                        <h4 className='WhyChooseCardHead text-[22px] md:text-[19px] lg:text-[19px] '>Convenient online booking</h4>
                        <p className='WhyChooseCardText text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] px-0 md:px-0 lg:px-0 xl:px-16 py-3'>Our website is user-friendly & easy 
                            to navigate, making it simple to
                            book your bus tickets online.</p>
                    </div>
                    {/* _________02_________ */}
                    <div className='WhyChooseCard mx-auto'>
                        <div className='WhyChooseCardImgDiv'>
                            <img src={choose02} alt="mobile" />
                        </div>
                        <h4 className='WhyChooseCardHead text-[22px] md:text-[19px] lg:text-[19px] '>Real-time tracking</h4>
                        <p className='WhyChooseCardText text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] px-0 md:px-0 lg:px-0 xl:px-16 py-3'>We provide real-time tracking of buses 
                            and also send notifications of the 
                            bus status via Email/SMS.</p>
                    </div>
                    {/* _________03_________ */}
                    <div className='WhyChooseCard mx-auto'>
                        <div className='WhyChooseCardImgDiv'>
                            <img src={choose03} alt="mobile" />
                        </div>
                        <h4 className='WhyChooseCardHead text-[22px] md:text-[19px] lg:text-[19px] '>Discounts and offers</h4>
                        <p className='WhyChooseCardText text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] px-0 md:px-0 lg:px-0 xl:px-16 py-3'>We offer regular discounts & special  
                            deals to our customers, making it  
                            even more affordable to travel.</p>
                    </div>
                    {/* _________04_________ */}
                    <div className='WhyChooseCard mx-auto'>
                        <div className='WhyChooseCardImgDiv'>
                            <img src={choose04} alt="mobile" />
                        </div>
                        <h4 className='WhyChooseCardHead text-[22px] md:text-[19px] lg:text-[19px] '>Reliable and safe travel</h4>
                        <p className='WhyChooseCardText text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] px-0 md:px-0 lg:px-0 xl:px-16 py-3'>We work with only the best bus  
                            operators to ensure a safe &  
                            comfortable journey.</p>
                    </div>
                    {/* _________05_________ */}
                    <div className='WhyChooseCard mx-auto'>
                        <div className='WhyChooseCardImgDiv'>
                            <img src={choose05} alt="mobile" />
                        </div>
                        <h4 className='WhyChooseCardHead text-[22px] md:text-[19px] lg:text-[19px] '>24*7 customer support</h4>
                        <p className='WhyChooseCardText text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] px-0 md:px-0 lg:px-0 xl:px-16 py-3'>Our customer support team is  
                            available 24*7 to assist you with  
                            any queries or issues you may have.</p>
                    </div>
                    {/* _________06_________ */}
                    <div className='WhyChooseCard mx-auto'>
                        <div className='WhyChooseCardImgDiv'>
                            <img src={choose06} alt="mobile" />
                        </div>
                        <h4 className='WhyChooseCardHead text-[22px] md:text-[19px] lg:text-[19px] '>Easy & secure payment </h4>
                        <p className='WhyChooseCardText text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] px-0 md:px-0 lg:px-0 xl:px-16 py-3'>We accept multiple payment options  
                            such as debit card, credit card,  
                            net banking and wallet.</p>
                    </div>
                </div>
            </div>
            {/* ________________________________
            Why choose us card section
            _____________________________________ */}



        </div>
    );
};

export default WhyChooseUs;