import { useContext } from "react";
import { AppContext } from "../context/AppProvider";
import { BiAdjust } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const { toggled, handleToggleSidebar, handleThemeSwitch } =
    useContext(AppContext);
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 mb-5 border-b-2">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Optima Inmobiliaria
          </span>
        </a>
        <div className="space-x-5 mt-3">
          <button
            type="button"
            onClick={() => {
              handleThemeSwitch();
            }}
          >
            <BiAdjust size={25} />
          </button>
          <button
            type="button"
            onClick={() => {
              handleToggleSidebar(!toggled);
            }}
          >
            <GiHamburgerMenu size={25} />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
