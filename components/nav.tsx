import React, { useState } from "react";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  function menuToggle(e: any): void {
    setMenuOpen(!menuOpen);
  }
  return (
    <>
      <nav className="z-50">
        <div className=" container h-24  w-screen">
          <div className="flex justify-between items-center w-full h-full ">
            <div className="logo flex-1 font-Poppins text-[20px] text-secondary-color ">
              <span className="bg-secondary-color px-4 py-1 rounded-md text-white ">
                Gym
              </span>
              &nbsp; baran
            </div>
            <div
              className="hamburger cursor-pointer md:hidden"
              onClick={menuToggle}
            >
              <div className="w-6 h-[2px] bg-slate-800 my-1 "></div>
              <div className="w-4 h-[2px] bg-slate-800 my-1 "></div>
              <div className="w-4 h-[2px] bg-slate-800 my-1 "></div>
            </div>
            <ul
              className={`absolute ${
                menuOpen ? "left-0" : "left-[-1000px]"
              }  top-24  w-full min-h-[300px]  flex flex-col gap-4 px-4 md:static md:flex-row md:items-center md:justify-self-end md:min-h-fit md:w-auto ease-in duration-200 bg-slate-50 md:bg-transparent pt-8 `}
            >
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Program</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <button className="w-[114px] h-[50px]  block bg-primary-color text-slate-50 rounded-lg ">
                Login
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
