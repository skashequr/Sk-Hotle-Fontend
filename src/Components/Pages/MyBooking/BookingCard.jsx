
import { GiCancel } from "react-icons/gi";

const BookingCard = ({ booked, handleCancelBooking }) => {
  // console.log(booked);

  // console.log(user);
  const { _id, name, pricePerNight, description, specialOffers, img1, date } =
    booked || {};
  


  return (
    <div className="mt-5">
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img className="w-96 h-64" src={img1} alt="Movie" />
        </figure>
        <div className="card-body">
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Update Date</button>
          </div>
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <p>{date}</p>
          <div className="card-actions justify-end ">
            <button onClick={() => handleCancelBooking(_id)}>
              <GiCancel className="h-10 w-10" />
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default BookingCard;
