import { useContext } from 'react';
import { contextBlogs } from '../../App';

const BlogCard = ({ blog }) => {
  const { setCurrentBlog } = useContext(contextBlogs);
  const setActive = (id, title, body, photo, date, publisher, thumbnail) => {
    setCurrentBlog({
      title: title,
      body: body,
      thumbnail: thumbnail,
      publisher: publisher,
      photo: photo,
      date: date,
    });
  };

  const { id, title, body, photo, date, publisher, thumbnail } = blog;
  // console.log(id);
  return (
    <div
      onClick={() =>
        setActive(id, title, body, photo, date, publisher, thumbnail)
      }
      className='grid grid-cols-1 lg:grid-cols-2 justify-start align-start items-start gap-2 mb-3 hover:bg-slate-100 p-2 cursor-pointer rounded-lg w-full mx-auto'
    >
      <img
        className='w-full h-[130px] rounded-xl col-span-1 md:col-span-2 lg:col-span-1'
        src={thumbnail}
        alt='thumbnail'
      />

      <div className='col-span-1 md:col-span-2 lg:col-span-1'>
        <h3 className='text-[#121212] text-sm md:text-md lg:text-md xl:text-lg font-semibold pb-3'>
          {title}
        </h3>
        <div className='flex justify-start align-middle'>
          <img className='RightCardFooterImg mr-3' src={photo} alt='user01' />
          <p className='RightCardFooterTitle'>
            {publisher}
            <br />
            <span className='RightCardFooterDate'>{date}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default BlogCard;
