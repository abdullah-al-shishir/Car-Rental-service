import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

import Cars from "./Pages/Cars";
import Navbar from "./Pages/Navbar";
import Booking from "./Pages/Booking";
import Contact from "./Pages/Contact";
import About_Us from "./Pages/About_Us";
import Footer from "./Pages/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* Main container to hold all content and enable the sticky footer logic */}
        <div className="flex flex-col min-h-screen">
          <Navbar />

          {/* Main content area that will grow to push the footer down */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cars" element={<Cars />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About_Us />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
