import React from 'react';
import star06 from '../../assets/Star 6.svg';
import star02 from '../../assets/Star 2.svg';

const FeedbackCard = () => {
    return (


        // w-[280px]
        <div className="swiperCard mt-10 w-[320px] md:w-[320px] lg:w-[320px] xl:w-[370px] h-[352px] mx-auto hover:bg-slate-100 border-none ">
        {/* head */}
        <div className='flex justify-start align-middle'>
            <img className='w-12 h-12 rounded-full mr-5' src="https://www.matthewdevaney.com/wp-content/uploads/2021/08/powerapps-userphoto-featured-1.jpg" alt="image slide 1" />
            <h1 className='text-[20px] font-[500px] text-[#121212]'>Md Saidul Basar <br />
                <span className='flex justify-start align-middle'>
                    <img src={star02} alt="" />
                    <img src={star02} alt="" />
                    <img src={star02} alt="" />
                    <img src={star02} alt="" />
                    <img src={star06} alt="" />

                </span>
            </h1>
        </div>
        {/* body */}
        <p className='swiperBodyText mt-8'>I recently booked a bus ticket
            through this website and was
            extremely impressed with the
            ease & convenience of the
            process. The website was user
            friendly and intuitive, making
            it easy for me to find and book
            the perfect ticket for my travel
            needs.</p>
            <img className='w-full mx-auto' src="https://i.ibb.co/dr0Rjv6/images-removebg-preview.png" alt="svg" />
    </div>
    );
};

export default FeedbackCard;