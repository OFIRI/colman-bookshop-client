import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookDetails from "./Components/BookDetails/BookDetails";
import HomePage from "./Components/HomePage/HomePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/BookDetails/:id" element={<BookDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
