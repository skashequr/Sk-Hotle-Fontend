import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingCard from "./BookingCard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { confirmAlert } from "react-confirm-alert"; // Import react-confirm-alert
import "react-confirm-alert/src/react-confirm-alert.css"; // Import CSS
import { AuthContext } from "../../AuthProvider/AuthProvider";
import "react-toastify/dist/ReactToastify.css";
const MyBooking = () => {
  const [selectedValue, setSelectedValue] = useState("");
  console.log(selectedValue);
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const uname = user?.displayName;
  // const userbookingFetch = useLoaderData();
  const [userbookingFetch, setUserbookingFetch] = useState([])
  const [userbooking , setUserBooking] = useState(userbookingFetch)
  useEffect(() => {
    fetch(`https://asom-backend.vercel.app/bookingRooms?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserbookingFetch(data);
      });
  }, [email]);

  useEffect(() => {
    setUserBooking(userbookingFetch);
  }, [userbookingFetch]);
  



  
  console.log(userbooking);
  console.log(userbookingFetch);
  const confirmCancelBooking = (_id) => {
    confirmAlert({
      title: "Confirm cancellation",
      message: "Are you sure you want to cancel this booking?",
      buttons: [
        {
          label: "Yes",
          onClick: () => handleCancelBooking(_id),
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };

  const handleCancelBooking = (_id) => {
    fetch(`https://asom-backend.vercel.app/bookingRooms/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          // Filter the user array based on the _id to remove the canceled booking
          const remaining = userbooking.filter((item) => item._id !== _id);
          setUserBooking(remaining);
          toast("Booking canceled");
          console.log(userbookingFetch);
        }
      });
  };
  
  

  const [selectedRating, setSelectedRating] = useState(5); // Initialize with a default value
  const [obCount, setCount] = useState({});
  const [roomsdata, setRoomsData] = useState([]);
  // console.log(obCount.count);
  const handleRatingChange = (event) => {
    setSelectedRating(event.target.value);
  };
  useEffect(() => {
    fetch("https://asom-backend.vercel.app/roomdInfo")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Handle the data here, for example, set it in state
        console.log(data);
        setRoomsData(data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch
        console.error("Error fetching data:", error);
      });
  }, []);
  console.log(roomsdata);
  const namesArray = roomsdata.map((entry) => entry.name);
  console.log(namesArray);
  useEffect(() => {
    fetch("https://asom-backend.vercel.app/bookingRoomsCount")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Handle the data here, for example, set it in state
        console.log(data);
        setCount(data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch
        console.error("Error fetching data:", error);
      });
  }, []);

  const handlerrevius = (event) => {
    event.preventDefault();
    const userName = event.target.userName.value;
    const userEmail = event.target.userEmail.value;
    const comment = event.target.comment.value;
    // console.log(userName,userEmail,comment,selectedRating);
    const reviue = {
      userName,
      userEmail,
      comment,
      selectedRating,
      selectedValue
    };
    console.log(reviue);
    fetch("https://asom-backend.vercel.app/usersReviues", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviue),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse the response JSON
      })
      .then((data) => {
        // Handle the successful response data here
        console.log("Review submitted successfully:", data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the POST request
        console.error("Error submitting review:", error);
      });
  };
  const handleMassage = (e) => {
    e.preventDefault();
    toast("At frist booking a room");
  };

  const handleSelectChange = (e) => {
    setSelectedValue(event.target.value);
    console.log(selectedValue);
  };
  return (
    <div>
      <h1 className="text-center text-5xl">Your Booking</h1>
      <div className="sm:px-7 md:px-14 lg:px-36 gap-5">
        {userbooking?.map((booked) => (
          <BookingCard
            key={booked.id}
            handleCancelBooking={() => confirmCancelBooking(booked._id)}
            // handleUpdate = {() => handleUpdate(booked._id , booked.startDate, booked?.endDate)}
            booked={booked}
          />
        ))}
      </div>

      {/* reviue  */}

      {
        user? <div className=" flex justify-center items-center">
        <form
          onSubmit={obCount.count > 0 ? handlerrevius : handleMassage}
          className="flex w-full max-w-sm space-x-3"
        >
          <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-800">
            <div className="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
              Your Reviues
            </div>
            <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
              <div className="col-span-2 lg:col-span-1">
                <div className="relative">
                  <input
                    defaultValue={uname}
                    type="text"
                    name="userName"
                    required
                    id="contact-form-name"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <div className="relative">
                  <input
                    type="text"
                    name="userEmail"
                    required
                    id="contact-form-email"
                    defaultValue={email}
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="col-span-2">
                <label className="text-gray-700" htmlFor="comment">
                  <textarea
                    className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    id="comment"
                    placeholder="Enter your reviue"
                    name="comment"
                    required
                    rows="5"
                    cols="40"
                  />
                </label>
              </div>
              <div className="rating gap-1 flex justify-center items-center">
                <input
                  type="radio"
                  name="rating-3"
                  value="1"
                  className="mask mask-heart bg-red-400"
                  onChange={handleRatingChange}
                  checked={selectedRating === "1"}
                />
                <input
                  type="radio"
                  name="rating-3"
                  value="2"
                  className="mask mask-heart bg-orange-400"
                  onClick={handleRatingChange}
                  checked={selectedRating === "2"}
                />
                <input
                  type="radio"
                  name="rating-3"
                  value="3"
                  className="mask mask-heart bg-yellow-400"
                  onChange={handleRatingChange}
                  checked={selectedRating === "3"}
                />
                <input
                  type="radio"
                  name="rating-3"
                  value="4"
                  className="mask mask-heart bg-lime-400"
                  onChange={handleRatingChange}
                  checked={selectedRating === "4"}
                />
                <input
                  type="radio"
                  value="5"
                  name="rating-3"
                  className="mask mask-heart bg-green-400"
                  onChange={handleRatingChange}
                  checked={selectedRating === " 5"}
                />
              </div>
              <select
                onChange={handleSelectChange}
                className="select select-primary w-full max-w-xs"
              >
                <option value="" disabled>
                  What is the best TV show?
                </option>
                {namesArray.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
              <div className="col-span-2 text-right">
                <button
                  type="submit"
                  className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </form>
      </div> : <p className=" text-center">Login User Can Reviue a post</p>
      }
      
    </div>
  );
};

export default MyBooking;
