import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const UpdateBookingDate = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const { id } = useParams(); // Destructure id from useParams directly

  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:5000/updateDate/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ startDate, endDate }),
      });

      console.log('Response Status:', response.status);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      console.log('Success:', responseData);
      toast.success("");
    } catch (error) {
      console.error('Error during fetch:', error);
    }
  };

  return (
    <div>
      <h3 className="text-4xl font-extrabold text-center mt-7">Update Your Booking Date</h3>
      <div className="flex items-center justify-center mt-10">
        <DatePicker
          selected={startDate}
          onChange={(dates) => {
            const [start, end] = dates;
            setStartDate(start);
            setEndDate(end);
          }}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          inline
        />
      </div>
      <div className="flex justify-center items-center">
        <button onClick={handleUpdate} className="btn btn-primary" type="button">
          Submit
        </button>
      </div>
    </div>
  );
};

export default UpdateBookingDate;
