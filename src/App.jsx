import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

import Cars from "./Pages/Cars";
import Navbar from "./Pages/Navbar";
import Booking from "./Pages/Booking";
import Contact from "./Pages/Contact";
import About_Us from "./Pages/About_Us";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About_Us />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
