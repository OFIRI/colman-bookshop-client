import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookDetails from "./Components/BookDetails/BookDetails";
import HomePage from "./Components/HomePage/HomePage";
import Navbar from "./Components/Navbar/Navbar";
import ShoppingContext from "./contexts/ShoppingContext/ShoppingContext";
import AboutUs from "./Components/AboutUsPage/AboutUs";

function App() {
  return (
    <Router>
      <ShoppingContext>
        <Navbar />
        <div className="App">
          <Routes>
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/BookDetails/:id" element={<BookDetails />} />
          </Routes>
        </div>
      </ShoppingContext>
    </Router>
  );
}

export default App;
