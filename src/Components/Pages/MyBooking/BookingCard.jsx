import { GiCancel } from "react-icons/gi";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const BookingCard = ({ booked, handleCancelBooking }) => {
  // console.log(booked);

  // console.log(user);
  const {
    _id,
    name,
    pricePerNight,
    startDate,
    roomSize,
    endDate,
    description,
    specialOffers,
    img1,
    date,
  } = booked || {};

  function canCancelBooking(bookingDate) {
    // Set the cancellation period to 1 day
    const cancellationPeriod = 1;

    // Get the current date
    const currentDate = new Date();

    // Calculate the difference in milliseconds between the booking date and the current date
    const timeDifference = bookingDate - currentDate;

    // Calculate the difference in days
    const daysDifference = timeDifference / (1000 * 60 * 60 * 24);

    // Check if the booking can be canceled
    return daysDifference >= cancellationPeriod;
  }
  const bookingDate = new Date(startDate);

  const canCancel = canCancelBooking(bookingDate);
  console.log(bookingDate, canCancel);
  return (
    <div className="mt-5">
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img className="w-96 h-full" src={img1} alt="Movie" />
        </figure>
        <div className="card-body">
          <div className="card-actions justify-end">
            <Link to={`/bookingRooms/updateDate/${_id}`}>
              <button className="btn btn-primary">Update Date</button>
            </Link>
          </div>
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <p>{date}</p>
          <p>
            {startDate} to {endDate}
          </p>
          <p>{roomSize}</p>
          <div className="card-actions justify-end ">
            <button
              onClick={
                canCancel
                  ? () => handleCancelBooking(_id)
                  : () => toast.error("Cannot cancel booking at this time.")
              }
            >
              <GiCancel className="h-10 w-10" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
