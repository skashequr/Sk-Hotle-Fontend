import { useLoaderData } from "react-router-dom";
import { AiFillHome, AiOutlineWifi } from "react-icons/ai";
import { MdOutlineBalcony } from "react-icons/md";
import { FaBath } from "react-icons/fa";
import { GiShower } from "react-icons/gi";
import { TbAirConditioning } from "react-icons/tb";
import { IoLogoNoSmoking } from "react-icons/io";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { addDays } from "date-fns";
const CardDetails = () => {
  // const [startDate, setStartDate] = useState(new Date());
  const [reviues , setReviues] = useState([]);
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const arrayDetailsData = useLoaderData();
  const date = startDate.toDateString();
  const [detailsData] = arrayDetailsData;
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
    img5,
    img6,
    Apartments,
    Balcony,
    FreeWiFi,
    Privatebathroom,
    Shower,
    Airconditioning,
    Nonsmokingrooms,
    // Kitchen,
    // Washingmachine ,
    ratting,
  } = detailsData || {};

  const bookingData = {
    name,
    description,
    pricePerNight,
    roomSize,
    availability,
    specialOffers,
    img1,
    img2,
    img3,
    ratting,
    email,
    date,
    startDate,
    endDate,
  };
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/reviues?name=${name}`);
  
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
  
        const data = await response.json();
        // Handle the data here, for example, set it in state
        console.log(data);
        setReviues(data);
      } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, [name]);




  
  console.log();
  const handleDateClick = () => {
    console.log("Selected Date:", startDate.toDateString());
    fetch("http://localhost:5000/mybookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Handle the successful response data
        console.log("Success:", data);
      });

    // console.log();
  };
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex w-full mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
              Room Gallery
            </h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
              Welcome to my rooms gallery, where I showcase the different rooms
              and spaces in my home. Each room has its own unique style and
              personality, reflecting my taste and creativity. Explore the
              gallery to get a glimpse of how Ive designed and decorated these
              spaces.
            </p>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={img1}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={img2}
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src={img3}
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src={img4}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={img5}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={img6}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-wrap justify-center items-center gap-8">
        <div>
          {Apartments ? (
            <>
              <AiFillHome className="h-16 w-16" />
              <span>Apartment</span>
            </>
          ) : (
            " "
          )}
        </div>
        <div>
          {Balcony ? (
            <>
              <MdOutlineBalcony className="h-16 w-16" />
              <span>Balcony</span>
            </>
          ) : null}
        </div>
        <div>
          {FreeWiFi ? (
            <>
              <AiOutlineWifi className="h-16 w-16" />
              <span>Free Wifi</span>
            </>
          ) : null}
        </div>
        <div>
          {Privatebathroom ? (
            <>
              <FaBath className="h-16 w-16" />
              <span>Privet Bathreem</span>
            </>
          ) : null}
        </div>
        <div>
          {Shower ? (
            <>
              <GiShower className="h-16 w-16" />
              <span>Shower</span>
            </>
          ) : null}
        </div>
        <div>
          {Airconditioning ? (
            <>
              <TbAirConditioning className="h-16 w-16" />
              <span>Airconditioning</span>
            </>
          ) : null}
        </div>
        <div>
          {Nonsmokingrooms ? (
            <>
              <IoLogoNoSmoking className="h-16 w-16" />
              <span>No Smoking</span>
            </>
          ) : null}
        </div>
      </div>
      <div className="flex mt-9">
        <div className="w-2/3">
          <div className="my-5 p-5">
            <p className="mb-3">
              {description}
            </p>
            <p>
              Set in Madrid City Centre, just a 1-minute walk from the Royal
              Palace and 400 metres from Plaza Mayor Square, Oriente Palace
              offers apartments and rooms with free WiFi.
            </p>
            <p className="mb-3">
              All accommodation have air-conditioning, a flat-screen TV, and a
              private bathroom with a shower. Some also include a well-equipped
              kitchen and a dining table.
            </p>
            <p className="mb-3">
              A continental breakfast is offered at the cafeteria located under
              the property.
            </p>
            <p className="mb-3">
              Guests will find a wide range of shops, restaurants and bars
              within a 5-minute walk of Oriente Palace Apartments. Opera Metro
              Station is 300 metres from the property, while the famous Gran Via
              is 800 metres away. Madrid-Barajas Airport in 14 km from Oriente
              Palace Apartments.
            </p>
            <p className="mb-3">
              Couples particularly like the location — they rated it 9.8 for a
              two-person trip.{" "}
            </p>
            <div className="flex justify-between">
              <p className="text-lg text-3xl font-semibold">
                Price Per Night{" "}
                <span className="bg-orange-400 p-2 rounded-lg">
                  {pricePerNight}
                </span>
              </p>
              <p className="bg-orange-400 p-2 rounded-lg">{specialOffers}</p>
            <p  className="bg-orange-400 p-2 rounded-lg">{availability}
</p>
              <p className="text-lg text-3xl font-semibold">
                {" "}
                Room Size{" "}
                <span className="bg-orange-400 p-2 rounded-lg">{roomSize}</span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <p className="font-extrabold text-center text-xl">
              Selectr Your Booking Date
            </p>
            <div className="card-body items-center text-center">
              <div className="flex items-center justify-center">
                <DatePicker
                  selected={startDate}
                  onChange={onChange}
                  startDate={startDate}
                  endDate={endDate}
                  selectsRange
                  inline
                />
              </div>
              <div className="card-actions">
                <button onClick={handleDateClick} className="btn btn-primary">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
            
     

    <div className="grid grid-rows-1 md:grid-cols-3 grid-cols-4 justify-center items-center">
    {
      reviues?.map(reviue => (
        <div key={reviue.id} className="flex justify-center relative top-1/3">
          <div className="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg">
          <div className="flex justify-center relative top-1/3">
      <div className="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg">
        <div className="relative flex gap-4">
          <img
            src="https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/charlie-chaplin-icon.png"
            className="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20"
            alt=""
            loading="lazy"
          />
          <div className="flex flex-col w-full">
            <div className="flex flex-row justify-between">
              <p className="relative text-xl whitespace-nowrap truncate overflow-hidden">{reviue?.userName}</p>
              <a className="text-gray-500 text-xl" href="#">
                <i className="fa-solid fa-trash"></i>
              </a>
            </div>
            <p className="text-gray-400 text-sm">{reviue?.selectedValue}</p>
          </div>
        </div>
        <p className="-mt-4 text-gray-500">
        {reviue?.comment}
        </p>
      </div>
    </div>
          </div>
        </div>
      )) 
    }
    </div>
    </div>
  );
};

export default CardDetails;
