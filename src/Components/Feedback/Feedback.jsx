import React from 'react';
import Slider from "react-slick";
import './Feedback.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import FeedbackCard from './FeedbackCard';


const Feedback = () => {


    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1600 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 1600, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


    return (



        <div className='container mx-auto'>

            <h3 className=' font-semibold text-4xl uppercase text-gray-900 text-center mt-16 mb-5  '>our  <span className='HeadColor'>passenger’s</span> words</h3>
            <p className='SectionTitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua consectetur adipiscing.</p>

            <div className='mb-[100px] mx-auto md:mx-auto lg:mx-auto xl:mx-auto'>
                <Carousel 
                responsive={responsive} 
                arrows={true}
                showArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                >
                   <FeedbackCard/>
                   <FeedbackCard/>
                   <FeedbackCard/>
                   <FeedbackCard/>
                   <FeedbackCard/>
                   <FeedbackCard/>
                   <FeedbackCard/>
                   <FeedbackCard/>
                </Carousel>
            </div>

        </div>
    );
};

export default Feedback;


// const Feedback = () => {

//   // const responsive = {
//   //   superLargeDesktop: {
//   //     // the naming can be any, depends on you.
//   //     breakpoint: { max: 4000, min: 1600 },
//   //     items: 3
//   //   },
//   //   desktop: {
//   //     breakpoint: { max: 1600, min: 1024 },
//   //     items: 3
//   //   },
//   //   tablet: {
//   //     breakpoint: { max: 1024, min: 464 },
//   //     items: 2
//   //   },
//   //   mobile: {
//   //     breakpoint: { max: 464, min: 0 },
//   //     items: 1
//   //   }
//   // };

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           initialSlide: 1,
//         },
//       },
//     ]
//   }

//   return (
   
//     <div className='p-10 bg-indigo-500' >
//       <Slider {...settings}  >
//         <div  > 
//           <FeedbackCard />
//           </div>
//           <div >
//           <FeedbackCard />
//           </div>
//         <div >
//           <FeedbackCard />
//           </div>
//         <div >
//           <FeedbackCard />
//           </div>
//         <div >
//           <FeedbackCard />
//           </div>
//         <div >
//           <FeedbackCard />
//           </div>
//         <div >
//           <FeedbackCard />
//           </div>
//         </Slider>
//       </div>
//   );
// };

// export default Feedback;


// function NextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block" }}
//       onClick={onClick}
//     />
//   );
// }

// function PrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block" }}
//       onClick={onClick}
//     />
//   );
// }
