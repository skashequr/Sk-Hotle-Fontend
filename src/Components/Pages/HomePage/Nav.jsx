import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Nav = () => {
  const {user , logOut} = useContext(AuthContext)
  // console.log(user);
  const handleLogOut = ()=>{
    logOut()
    .then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
  const navItem = (
    <>
      <li>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Home
      </NavLink>
      </li>
      <li>
      <NavLink
        to="/messages"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Pricing
      </NavLink>
      </li>
      <li>
      <NavLink
        to="/messages"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Coustomers
      </NavLink>
      </li>
      <li>
      <NavLink
        to="/rooms"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Rooms
      </NavLink>
      </li>
      <li>
      <NavLink
        to="/bookingRooms"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        My Bookings
      </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
             {navItem}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">SkHotel</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {navItem}
          </ul>
        </div>
        {
          user? 
          <div className=" navbar-end gap-6">
            <div>
            <button onClick={handleLogOut} className="btn btn-primary">Logout</button>
            </div>
        <div className="avatar px-5">
  <div className="w-10 h-10  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJUfTPPOjM0vdlDfceo4t0-M9pSp_Aq92uPeCqR57gA&s" alt="" />
  </div>
</div>
      </div>
        :  <div className="navbar-end gap-4">
        <Link to="/login">
        <button className=" h-10 w-36  bg-[#144fcc] text-center text-white rounded-md border border-gray-100 ">Singin</button>
        </Link>
        <Link to="/regester">
        <button className=" h-10 w-36  bg-[#144fcc]  text-white text-center rounded-md border border-gray-100">SingUp</button>
        </Link>
      </div>
        }
      </div>
    </div>
  );
};

export default Nav;
