import React from 'react';
import { AppContext } from '@edx/frontend-platform/react';

export default function Header({ menuOpen, setMenuOpen }) {
  const { authenticatedUser } = React.useContext(AppContext);

  return (
    <div className="w-full">
      <div className="z-40 fixed top-0 xl:py-5 w-full xl:flex items-center xl:bg-main px-4 md:px-8 lg:px-10 xl:px-[6%]">
        <div className="hidden xl:block">
          <h1 className="font-semibold text-xl text-dim-black">
            {authenticatedUser?.name?.split(' ')[0]}'s Dashboard - Let's jump back in.
          </h1>
        </div>

        <div className="w-full lg:w-auto flex items-center justify-between xl:hidden bg-white py-5">
          <a href="home.html" className="h-10">
            <img
              src="../asset/ask-logo.png"
              alt="Africa sea of knowledge logo"
              className="h-full object-cover bg-center"
            />
          </a>
          <button onClick={() => setMenuOpen(!menuOpen)} className="inline xl:hidden"> {/* Toggle menuOpen */}
            <img src="../asset/menu.svg" alt="" className="scale-95" />
          </button>
        </div>
      </div>
    </div>
  );
}