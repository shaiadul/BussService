import './Error.css';
const Error = () => {
  return (
    <div className='flex justify-center items-center mx-auto my-[25vh]'>
      <div
        aria-label='Orange and tan hamster running in a metal wheel'
        role='img'
        className='wheel-and-hamster'
      >
        <div className='wheel'></div>
        <div className='hamster'>
          <div className='hamster__body'>
            <div className='hamster__head'>
              <div className='hamster__ear'></div>
              <div className='hamster__eye'></div>
              <div className='hamster__nose'></div>
            </div>
            <div className='hamster__limb hamster__limb--fr'></div>
            <div className='hamster__limb hamster__limb--fl'></div>
            <div className='hamster__limb hamster__limb--br'></div>
            <div className='hamster__limb hamster__limb--bl'></div>
            <div className='hamster__tail'></div>
          </div>
        </div>
        <div className='spoke'></div>
      </div>{' '}
      <br />
      <h1 className='text-[50px] text-orange-600 text-center ml-10'>
        Error 404{' '}
      </h1>
    </div>
  );
};
export default Error;
