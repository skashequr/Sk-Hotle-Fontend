import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Link } from "react-router-dom";
const RoomsCurd = ({ curdData }) => {
  // console.log(curdData);
  const {
    name,
    description,
    pricePerNight,
    roomSize,
    availability,
    specialOffers,
    img1,
    img2,
    img3,
    img4,
  } = curdData;
  return (
    <div className="mb-5">
      <div>
        <div className="flex">
          <div className="w-1/3">
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => {}}
              onSlideChange={() => {}}
            >
              <SwiperSlide>
                <img className="h-[250px] w-full" src={img1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="h-[250px] w-full" src={img2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="h-[250px] w-full" src={img3} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="h-[250px] w-full" src={img4} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="flex flex-1">
            <div className=" w-full ">
              <div className="card-body border border-cyan-500 h-[250px] rounded-md">
                <h2 className="text-4xl text-center">{name}</h2>
                <p>{description}</p>
                <p> Price Per Night : {pricePerNight} </p>
                <div className="rating gap-1">
                  <input
                    type="radio"
                    name="rating-3"
                    className="mask mask-heart bg-red-400"
                  />
                  <input
                    type="radio"
                    name="rating-3"
                    className="mask mask-heart bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-3"
                    className="mask mask-heart bg-yellow-400"
                  />
                  <input
                    type="radio"
                    name="rating-3"
                    className="mask mask-heart bg-lime-400"
                  />
                  <input
                    type="radio"
                    name="rating-3"
                    className="mask mask-heart bg-green-400"
                  />
                </div>
                
                <div className="card-actions justify-end">
                  <Link to={`/rooms/description/${name}`} ><button className="btn btn-primary">See Details</button></Link>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default RoomsCurd;
