import React from 'react';
import { AppContext } from '@edx/frontend-platform/react';

export default function Header({ menuOpen, setMenuOpen }) {
  const { authenticatedUser } = React.useContext(AppContext);

  return (
    <div className="w-full">
      <div className="z-40 fixed top-0  w-full ">
        <div className="hidden xl:block w-full xl:bg-main  px-[4%] py-2">
          <h1 className="font-semibold text-xl text-dim-black">
            {authenticatedUser?.name?.split(' ')[0]}'s Dashboard - Let's jump back in.
          </h1>
        </div>
        {/* Mobile Navbar */}
        <div className="w-full lg:w-auto flex items-center justify-between xl:hidden bg-white py-2 px-[4%] border-b-2 border-[#E5E7EB] ">
          <a href="home.html" className="h-7">
            <img
              src="../asset/ask-logo.png"
              alt="Africa sea of knowledge logo"
              className="h-full object-cover bg-center"
            />
          </a>
          <button onClick={() => setMenuOpen(!menuOpen)} className="inline xl:hidden"> {/* Toggle menuOpen */}
            <img src="../asset/menu.svg" alt="" className="scale-75" />
          </button>
        </div>
      </div>
    </div>
  );
}