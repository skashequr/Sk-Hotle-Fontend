import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "date-fns";
import { useLoaderData } from 'react-router-dom';

const UpdateBookingDate = () => {
  const data = useLoaderData();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  // Use an object to store the selected dates
  const dates = { startDate, endDate };

  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:5000/updateDate/${data?._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dates),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      console.log("Success:", responseData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  

  return (
    <div>
      <h3 className='text-4xl font-extrabold text-center mt-7'>Update Your Booking Date</h3>
      <div className='flex items-center justify-center mt-10'>
        <DatePicker
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          inline
        />
      </div>
      <div className='flex justify-center items-center'>
        <button onClick={handleUpdate} className='btn btn-primary' type="button">
          Submit
        </button>
      </div>
    </div>
  );
};

export default UpdateBookingDate;
