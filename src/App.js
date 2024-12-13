import React from "react";
import { Route, Routes } from "react-router-dom";
import { About, Gallery, Home, Services } from "./pages"; // Importing from pages/index.js

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
