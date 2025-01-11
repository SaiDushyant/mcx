import React, { useEffect } from "react";

const GoogleTranslate = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"; // Use HTTPS explicitly
    script.async = true;

    script.onerror = () => {
      console.error("Google Translate script failed to load.");
    };

    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      try {
        new window.google.translate.TranslateElement(
          { pageLanguage: "en" },
          "google_translate_element"
        );
      } catch (error) {
        console.error("Error initializing Google Translate:", error);
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Placeholder for Google Translate */}
      <div id="google_translate_element"></div>
    </div>
  );
};

export default GoogleTranslate;
