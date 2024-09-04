import React from 'react';
import arrow from '../../assets/svg/arrow.svg';
import star1 from '../../assets/svg/star1.svg';
import shape from '../../assets/svg/shape.svg';
import spiral from '../../assets/svg/spiral.svg';
import SvgAnimation1 from './SvgAnimation';
import SvgAnimation from './SvgAnimation';

function CApproach() {
  return (
    <>
      <div className='flex flex-col justify-center items-center mt-5 md:mt-10 lg:mt-16 pb-14 md:pb-20  font-roboto mx-auto space-y-5 md:space-y-6 lg:space-y-8'>
        
        <div className='text-white text-2xl md:text-3xl font-bold relative '>
          Our Approach
        </div>
        
        
        <div className='font-roboto grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 text-white gap-x-7 gap-y-10 lg:gap-y-16'>
          <div>
            <img src={arrow} alt="" className='mx-auto h-16 lg:h-20'/>
            <div className='text-lg text-center mb-2 md:text-lg lg:text-2xl text-[#FF6EC7]'>Client-Centric</div>
            <div className='text text-center md:text-md lg:text-lg lg:leading-snug'>
              We tailor solutions to your needs, ensuring they fit your requirements.
            </div>
          </div>
          <div>
            <img src={star1} alt="" className='mx-auto h-16 lg:h-20'/>
            <div className='text-lg text-center mb-2 md:text-lg lg:text-xl text-[#f5f5a8]'>Innovation-Driven</div>
            <div className='text text-center md:text-md lg:text-lg lg:leading-snug'>
              We use the latest tech to provide cutting-edge solutions.
            </div>
          </div>
          <div>
            <img src={shape} alt="" className='mx-auto h-16 lg:h-20'/>
            <div className='text-lg text-center mb-2 md:text-lg lg:text-xl text-[#5d7ef9]'>Collaborative</div>
            <div className='text text-center md:text-md lg:text-lg lg:leading-snug'>
              We work closely with you, ensuring transparency throughout.
            </div>
          </div>
          <div>
            <img src={spiral} alt="" className='mx-auto h-16 lg:h-20 fill-[#ff833b]'/>
            <div className='text-lg text-center mb-2 md:text-lg lg:text-xl text-[#ff833b]'>Quality-Focused</div>
            <div className='text text-center md:text-md lg:text-lg lg:leading-snug'>
              We prioritize quality, ensuring robust and reliable software.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CApproach;
