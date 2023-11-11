// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const Slider = () => {
  const {logIn} = useContext(AuthContext)
  console.log(logIn);
    return (
        <div className='flex items-center justify-center mx-6'>
    <Swiper
    
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img className='lg:w-[400px]  lg:h-[300px]' src="https://i.ibb.co/KXyh1s3/Untitled.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-[400px] h-[300px]' src="https://i.ibb.co/wSyMLpH/Untitled.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-[400px] h-[300px]' src="https://i.ibb.co/kJfjv2d/Untitled.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-[400px] h-[300px]' src="https://i.ibb.co/wQWx54f/Untitled.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-[400px] h-[300px]' src="https://i.ibb.co/wQWx54f/Untitled.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-[400px] h-[300px]' src="https://i.ibb.co/wQWx54f/Untitled.jpg" alt="" /></SwiperSlide>
    </Swiper>
        </div>
    );
};

export default Slider;