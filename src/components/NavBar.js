import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Logo1 } from "../assets/images/images";
import LanguageDropdown from "./LanguageDropdown";

function NavBar() {
  // State to control the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full fixed z-50">
      <div className="flex items-center justify-between h-fit px-5 py-2 md:px-5 md:py-3 mx-2 md:mx-10 mt-5 rounded-xl text-green-800 bg-white drop-shadow-xl">
        <NavLink to="/" className="flex items-center">
          <img src={Logo1} alt="logo" className="w-52 mt-2" />
        </NavLink>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-10">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-green text-2xl ${
                isActive ? "text-green font-semibold" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:text-green text-2xl ${
                isActive ? "text-green font-semibold" : ""
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `hover:text-green text-2xl ${
                isActive ? "text-green font-semibold" : ""
              }`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `hover:text-green text-2xl ${
                isActive ? "text-green font-semibold" : ""
              }`
            }
          >
            Gallery
          </NavLink>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden flex items-center">
          {/* Hamburger icon */}
          <button onClick={toggleMenu} className="text-green-700">
            {isMenuOpen ? (
              <span className="text-4xl">×</span> // Cross icon
            ) : (
              <span className="text-3xl">☰</span> // Hamburger icon
            )}
          </button>
        </div>

        <LanguageDropdown />
      </div>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-green-700 text-white flex flex-col items-center space-y-4 py-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-green-200 ${
                isActive ? "text-green-200 font-semibold" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:text-green-200 ${
                isActive ? "text-green-200 font-semibold" : ""
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `hover:text-green-200 ${
                isActive ? "text-green-200 font-semibold" : ""
              }`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `hover:text-green-200 ${
                isActive ? "text-green-200 font-semibold" : ""
              }`
            }
          >
            Gallery
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
