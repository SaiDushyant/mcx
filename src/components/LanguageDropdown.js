import React, { useState } from "react";
import { FiGlobe } from "react-icons/fi"; // Import a globe icon
import GoogleTranslate from "./GoogleTranslate";

const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Globe Icon Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white bg-transparent hover:text-[#f97316] font-medium rounded-full text-sm p-2"
        title="Select Language"
      >
        <FiGlobe className="w-6 h-6" />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div
          id="langdropdown"
          className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-44 border border-gray-300 absolute right-0 mt-2"
        >
          <ul
            className="py-2 text-sm text-gray-700"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <div className="p-2" id="google_translate_element">
                <GoogleTranslate />
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
