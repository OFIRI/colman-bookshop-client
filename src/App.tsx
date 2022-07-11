import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookDetails from "./Components/BookDetails/BookDetails";
import CreateBookPage from "./Components/CreateBookPage/CreateBookPage";
import EditBookPage from "./Components/EditBookPage/EditBookPage";
import HomePage from "./Components/HomePage/HomePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/BookDetails/:id" element={<BookDetails />} />
          <Route path="/EditBook/:id" element={<EditBookPage />} />
          <Route path="/CreateBook" element={<CreateBookPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
