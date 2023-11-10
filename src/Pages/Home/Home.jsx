import React from 'react';
import Feedback from '../../Components/Feedback/Feedback';
import HowItWork from '../../Components/HowItWork/HowItWork';
import MainBanner from '../../Components/MainBanner/MainBanner';
import News from '../../Components/News/News';
import NewsSection from '../../Components/NewsSection/NewsSection';
import WhyChooseUs from '../../Components/WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <section className=''>
            <MainBanner />
            <HowItWork />
            <WhyChooseUs />
            {/* <News/> */}
            <NewsSection />
            <Feedback />
        </section>
    );
};

export default Home;