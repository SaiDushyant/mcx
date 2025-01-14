import { ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle body scroll
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="w-full fixed z-40">
      <div className="flex items-center justify-between h-fit px-5 py-2 md:px-3 md:py-2 mx-2 md:mx-10 mt-5 rounded-xl text-green-800 bg-white drop-shadow-[0_0_8px_rgba(0,0,0,0.4)]">
        <NavLink to="/" className="flex items-center">
          <img
            src="https://res.cloudinary.com/dk7uaskcl/image/upload/v1736841505/logo1_kk7oj3.webp"
            alt="logo"
            className="w-52 mt-2"
          />
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
          <button onClick={toggleMenu} className="text-green-700">
            {isMenuOpen ? (
              <span className="text-4xl">×</span> // Close icon
            ) : (
              <span className="text-3xl">☰</span> // Hamburger icon
            )}
          </button>
        </div>
        <div className="hidden md:block">
          <HashLink
            to="/#contact"
            className="inline-flex items-center bg-green-600 text-white font-medium text-xl px-3 py-2 rounded-lg hover:bg-green-700 transition-colors"
            smooth
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </HashLink>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white text-green-600 z-50 flex flex-col space-y-6 p-6 transition-transform duration-500 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="w-full flex justify-between items-center">
          <NavLink to="/" className="flex items-center">
            <img
              src="https://res.cloudinary.com/dk7uaskcl/image/upload/v1736841505/logo1_kk7oj3.webp"
              alt="logo"
              className="w-60 mt-2"
            />
          </NavLink>
          <button onClick={toggleMenu} className="text-5xl text-green-700">
            ×
          </button>
        </div>
        <hr className="h-[2px] bg-gray-500" />
        <div className="flex flex-col gap-6 ml-5 pt-5">
          <NavLink
            to="/"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `text-3xl ${isActive ? "text-green-800 font-semibold" : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `text-3xl ${isActive ? "text-green-800 font-semibold" : ""}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `text-3xl ${isActive ? "text-green-800 font-semibold" : ""}`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/gallery"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `text-3xl ${isActive ? "text-green-800 font-semibold" : ""}`
            }
          >
            Gallery
          </NavLink>
        </div>
        <div>
          <div className="ml-5 mt-1">
            <HashLink
              to="/#contact"
              onClick={toggleMenu} // Close the menu when clicked
              className="inline-flex items-center bg-green-600 text-white font-medium text-xl px-4 py-3 rounded-lg hover:bg-green-700 transition-colors"
              smooth
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </HashLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
