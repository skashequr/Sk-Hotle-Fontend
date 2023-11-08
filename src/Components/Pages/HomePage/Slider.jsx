// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
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
        <div>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSnUrckbhY-wgANF6IS1m6QME0RSM2sFgq66-9JIHWOL-FQXaLG" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSIffvOsKY7B_SwyYz58e_fo_cfmGq_3hzCAFktmLefXqzov5XW" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTokq-FBJjxviEWTz5R1R-wwZ2KKmYxX2BwjL5S0uOrDbcQbgvb" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOxsH8mjU2k37c22opoz3dGS-QTbfgbvkaNKuGbRcqDOIxfP14" alt="" /></SwiperSlide>
      ...
    </Swiper>
        </div>
    );
};

export default Slider;