import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import LogoutButton from "./sidebar/LogoutButton";
import { FaRegFaceSmileBeam } from "react-icons/fa6";

function Navbar() {
  const { authUser, logout } = useAuthContext();

  return (
    <div className="navbar bg-base-200 min-h-14">
      <div className="navbar-start">
        {/* <div className="dropdown"> */}
          {/* <div tabIndex={0} role="button" className="btn btn-ghost btn-circle"> */}
            {/* <svg
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
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {/* <li><Link to="/login" >Homepage</Link></li> */}
            {/* <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/about">About</Link></li> */}
          {/* </ul> */}
        {/* </div> */}
      </div> 
      <div className="navbar-center">
        <Link to='/' className="btn btn-ghost text-xl font-semibold text-blue-500 font-serif">Let's-Chat</Link>
      </div>
      <div className="navbar-end">
        
        {/* <button className="btn btn-ghost btn-circle">
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
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button> */}
        {/* <button className="btn btn-ghost btn-circle">
          <div className="indicator">
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
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button> */}
        {authUser ? (
          <button className="btn btn-ghost btn-circle">
            {/* <FaRegFaceSmileBeam /> */}
            {/* <svg
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg> */}
          </button>
        ) : (
          <>
            <Link to="/login" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mx-3 max-h-8 border border-gray-400 text-blue-500 font-serif hover:bg-gray-400">Login</Link>
            <Link to="/signup" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mr-3 max-h-8 border border-gray-400 text-blue-500 font-serif hover:bg-gray-400">Sign Up</Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
