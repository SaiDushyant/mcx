import React, { useState } from "react";
import { FiGlobe } from "react-icons/fi"; // Import a globe icon
import GoogleTranslate from "./GoogleTranslate";

const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white bg-[#f97316] hover:bg-[#e1620f] font-medium rounded-lg text-sm px-4 py-2 inline-flex items-center"
      >
        <FiGlobe className="w-5 h-5 mr-2" />
        Language
        <svg
          className="w-4 h-4 ml-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1l4 4 4-4"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          id="langdropdown"
          className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-[white] border border-gray-300 absolute mt-2"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <div className="p-0" id="google_translate_element">
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
