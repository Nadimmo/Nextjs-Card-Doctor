import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    const user = true;
  const Links = (
    <>
      <li>
        {" "}
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        {" "}
        <Link href={"/about"}>About</Link>
      </li>
      <li>
        {" "}
        <Link href={"/services"}>Services</Link>
      </li>
      <li>
        {" "}
        <Link href={"/myBooking"}>My Booking</Link>
      </li>
    </>
  );

 

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {Links}
            </ul>
          </div>
          <Link href={"/"}>
            {" "}
            <h3 className="text-xl">Your Logo Here</h3>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{Links}</ul>
        </div>
        <div className="navbar-end">
          <div>
            {user ? (
              <>
                <p>
                  {user.displayName}{" "}
                  <Link href={""} className="btn btn-info" >
                    Sign Out
                  </Link>{" "}
                </p>
              </>
            ) : (
              <Link href={""} className="btn btn-info mr-4" >
                Sign in
              </Link>
            )}
          </div>
          <a className="btn btn-error btn-outline">Appointment</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
