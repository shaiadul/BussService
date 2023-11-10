import React from 'react';
import './Blog.css';
import BlogCard from './BlogCard';
import { useContext } from 'react';
import { contextBlogs } from '../../App';

const Blog = () => {
    const {currentBlog} = useContext(contextBlogs)
    const {title, photo, thumbnail, publisher, body, date} = currentBlog
  const blogs = [
    {
      id: 1,
      title: 'Bus strike across Punjab over outsourcing of drivers',
      body: 'A bus strike occurs when bus drivers and other public transportation employees go on strike, refusing to work in protest of various issues such as pay, benefits, and working conditions. This can cause  widespread disruption to the public transportation system and inconvenience for commuters , Strikes can last for a few hours to several days, depending on the issue & negotiations between the workers and their employers.A bus strike occurs when bus drivers and other public transportation employees go on strike, refusing to work in protest of various issues such as pay, benefits, and working conditions. This can cause widespread disruption to the public transportation system & inconvenience for commuters. Strikes can last for a few hours to several days, depending on the issue and negotiations between the workers and their employers.',
      thumbnail: 'https://nashvillelifestyles.com/downloads/34488/download/thumbnail-2.jpg?cb=85f63dcc10ac58ec93e7d9d8fc33a4a7&w=1200',
      publisher: 'Olivia Thomas',
      photo:
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80',
      date: '20 Jan, 2023',
    },
    {
      id: 2,
      title: 'Bus strike across Punjab over outsourcing of drivers',
      body: 'A bus strike occurs when bus drivers and other public transportation employees go on strike, refusing to work in protest of various issues such as pay, benefits, and working conditions. This can cause  widespread disruption to the public transportation system and inconvenience for commuters , Strikes can last for a few hours to several days, depending on the issue & negotiations between the workers and their employers.A bus strike occurs when bus drivers and other public transportation employees go on strike, refusing to work in protest of various issues such as pay, benefits, and working conditions. This can cause widespread disruption to the public transportation system & inconvenience for commuters. Strikes can last for a few hours to several days, depending on the issue and negotiations between the workers and their employers.',
      thumbnail: 'https://japanbusonline.com/Images/Search/0368_02.jpg',
      publisher: 'Olivia Thomas',
      photo: 'http://127.0.0.1:5173/src/assets/user01.svg',
      date: '20 Jan, 2023',
    },
    {
      id: 3,
      title: 'Bus strike across Punjab over outsourcing of drivers',
      body: 'A bus strike occurs when bus drivers and other public transportation employees go on strike, refusing to work in protest of various issues such as pay, benefits, and working conditions. This can cause  widespread disruption to the public transportation system and inconvenience for commuters , Strikes can last for a few hours to several days, depending on the issue & negotiations between the workers and their employers.A bus strike occurs when bus drivers and other public transportation employees go on strike, refusing to work in protest of various issues such as pay, benefits, and working conditions. This can cause widespread disruption to the public transportation system & inconvenience for commuters. Strikes can last for a few hours to several days, depending on the issue and negotiations between the workers and their employers.',
      thumbnail: 'https://resources.matcha-jp.com/resize/720x2000/2022/02/15-122665.webp',
      publisher: 'Olivia Thomas',
      photo:
        'https://images.pexels.com/photos/3228899/pexels-photo-3228899.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      date: '20 Jan, 2023',
    },
    {
      id: 4,
      title: 'Bus strike across Punjab over outsourcing of drivers',
      body: 'A bus strike occurs when bus drivers and other public transportation employees go on strike, refusing to work in protest of various issues such as pay, benefits, and working conditions. This can cause  widespread disruption to the public transportation system and inconvenience for commuters , Strikes can last for a few hours to several days, depending on the issue & negotiations between the workers and their employers.A bus strike occurs when bus drivers and other public transportation employees go on strike, refusing to work in protest of various issues such as pay, benefits, and working conditions. This can cause widespread disruption to the public transportation system & inconvenience for commuters. Strikes can last for a few hours to several days, depending on the issue and negotiations between the workers and their employers.',
      thumbnail: 'https://images.unsplash.com/photo-1570118054363-ff4d296962f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFuJTIwYnVzfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
      publisher: 'Olivia Thomas',
      photo:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      date: '20 Jan, 2023',
    },
    {
      id: 5,
      title: 'Bus strike across Punjab over outsourcing of drivers',
      body: 'A bus strike occurs when bus drivers and other public transportation employees go on strike, refusing to work in protest of various issues such as pay, benefits, and working conditions. This can cause  widespread disruption to the public transportation system and inconvenience for commuters , Strikes can last for a few hours to several days, depending on the issue & negotiations between the workers and their employers.A bus strike occurs when bus drivers and other public transportation employees go on strike, refusing to work in protest of various issues such as pay, benefits, and working conditions. This can cause widespread disruption to the public transportation system & inconvenience for commuters. Strikes can last for a few hours to several days, depending on the issue and negotiations between the workers and their employers.',
      thumbnail: 'https://media.istockphoto.com/id/1134704572/photo/traditional-mumbai-double-decker-bus-still-remaining-after-the-english-colonization.jpg?s=612x612&w=0&k=20&c=Yxct7pTTOPXLiCmxEfTAZBJCxE6_nskDwwkcSGIEpTQ=',
      publisher: 'Dolly Thomas',
      photo:
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      date: '20 Jan, 2023',
    },
    {
      id: 6,
      title: 'Bus strike across Punjab over outsourcing of drivers',
      body: 'A bus strike occurs when bus drivers and other public transportation employees go on strike, refusing to work in protest of various issues such as pay, benefits, and working conditions. This can cause  widespread disruption to the public transportation system and inconvenience for commuters , Strikes can last for a few hours to several days, depending on the issue & negotiations between the workers and their employers.A bus strike occurs when bus drivers and other public transportation employees go on strike, refusing to work in protest of various issues such as pay, benefits, and working conditions. This can cause widespread disruption to the public transportation system & inconvenience for commuters. Strikes can last for a few hours to several days, depending on the issue and negotiations between the workers and their employers.',
      thumbnail: 'https://media.istockphoto.com/id/1131076922/photo/colors-of-india.jpg?s=612x612&w=0&k=20&c=GAFoapN14-1gIcMej_MOySS6UJyUM7uREQPcVkmRYJA=',
      publisher: 'Olivia Thomas',
      photo:
        'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      date: '20 Jan, 2023',
    },
    {
      id: 7,
      title: 'Bus strike across Punjab over outsourcing of drivers',
      body: 'A bus strike occurs when bus drivers and other public transportation employees go on strike, refusing to work in protest of various issues such as pay, benefits, and working conditions. This can cause  widespread disruption to the public transportation system and inconvenience for commuters , Strikes can last for a few hours to several days, depending on the issue & negotiations between the workers and their employers.A bus strike occurs when bus drivers and other public transportation employees go on strike, refusing to work in protest of various issues such as pay, benefits, and working conditions. This can cause widespread disruption to the public transportation system & inconvenience for commuters. Strikes can last for a few hours to several days, depending on the issue and negotiations between the workers and their employers.',
      thumbnail: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/5900/production/_96348722_8dfbacc2-cb9d-4a43-9b85-3852a0e9effb.jpg',
      publisher: 'Olivia Thomas',
      photo:
        'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      date: '20 Jan, 2023',
    },
  ];

  return (
    <section className='mt-2 pt-[5px] container px-5 border-t mx-auto'>
      <h1 className='font-semibold text-xl lg:text-4xl uppercase text-red-500 text-left mt-16 mb-5 '>latest news & blogs</h1>

      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3  xl:grid-cols-3 justify-between align-start gap-y-3 gap-x-5 lg:gap-x-10 xl:gap-x-16'>
        <div className='col-span-3 md:col-span-2 lg:col-span-2 xl:col-span-2'>
          <img
            className='w-full h-56 lg:h-[500px] rounded-lg'
            src={thumbnail}
            alt='thumbnail'
          />
          <h3 className='text-[#121212] text-lg md:text-md lg:text-[32px] font-semibold py-5'>
            {title}
          </h3>
          <p className='text-justify text-[#121212] py-3'>{body}
          </p>
          <div className='RightCardFooter flex justify-between align-middle mb-2'>
            <div className='flex justify-center align-middle'>
              <img
                className='RightCardFooterImg mr-3'
                src={photo}
                alt='user01'
              />
              <p className='RightCardFooterTitle'>
                {publisher} <br />
                <span className='RightCardFooterDate'>{date}</span>
              </p>
            </div>
          </div>
        </div>

        <div className='col-span-2 md:col-span-1 lg:col-span-1'>
          <h3 className='text-xl lg:text-[30px] text-[#121212] mb-6'>Recent Blogs</h3>
          {blogs.map((blog, i) => {
            return <BlogCard blog={blog} key={i} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
