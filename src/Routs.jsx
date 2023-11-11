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
import { Content } from "./Components/Pages/Galler/Gallery";
import { Team } from "./Components/Pages/AboutUs/AboutUs";
import NotFoundPage from "./Components/Pages/ErrorPage/ErrorPage";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots></Roots>,
      errorElement: <NotFoundPage></NotFoundPage>,
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
          loader:()=> fetch('https://asom-backend.vercel.app/roomCount')
        },
        {
          path: "/rooms/description/:id",
          element: <CardDetails></CardDetails>,
          loader: ({ params }) => fetch(`https://asom-backend.vercel.app/rooms/description/${params.id}`)
        },
        {
          path: "/bookingRooms",
          element: <PrivetRoute><MyBooking></MyBooking></PrivetRoute>,
          loader: () => fetch("https://asom-backend.vercel.app/bookingRooms")
        },
        {
          path: "/bookingRooms/updateDate/:id",
          element: <UpdateBookinfDate></UpdateBookinfDate>,
          loader: ({ params }) => fetch(`https://asom-backend.vercel.app/updateDate/${params.id}`)
        },
        {
          path: "/gallery",
          element: <Content/>
        },
        {
          path: "/AboutUs",
          element: <Team></Team>
        }
      ],
    },
  ]);
