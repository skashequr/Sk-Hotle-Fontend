import { createBrowserRouter } from "react-router-dom";
import Roots from "./Components/Roots/Roots";
import Home from "./Components/Pages/HomePage/Home";
import Regester from "./Components/Pages/Regester/Regester";
import LoginForm from "./Components/Pages/Login/Login";
import Rooms from "./Components/Pages/Rooms/Rooms";
import CardDetails from "./Components/Pages/CardDetails/CardDetails";
import MyBooking from "./Components/Pages/MyBooking/MyBooking";
import UpdateBookinfDate from "./Components/Pages/UpdatBookingDate.jsx/UpdateBookinfDate";
import PrivetRoute from "./Components/PrivetRoute/PrivetRoute";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots></Roots>,
      children: [
        {
          path: "/",
          element:<Home></Home>
        },
        {
          path: "/login",
          element: <LoginForm></LoginForm>
        },
        {
          path: "/regester",
          element: <Regester></Regester>
        },
        {
          path: "/rooms",
          element: <Rooms></Rooms>,
          loader:()=> fetch('http://localhost:5000/roomCount')
        },
        {
          path: "/rooms/description/:id",
          element: <CardDetails></CardDetails>,
          loader: ({ params }) => fetch(`http://localhost:5000/rooms/description/${params.id}`)
        },
        {
          path: "/bookingRooms",
          element: <PrivetRoute><MyBooking></MyBooking></PrivetRoute>,
          loader: () => fetch("http://localhost:5000/bookingRooms")
        },
        {
          path: "/bookingRooms/updateDate/:id",
          element: <UpdateBookinfDate></UpdateBookinfDate>,
          loader: ({ params }) => fetch(`http://localhost:5000/updateDate/${params.id}`)
        }
      ],
    },
  ]);
