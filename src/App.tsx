import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookDetails from "./Components/BookDetails/BookDetails";
import CreateBookPage from "./Components/CreateBookPage/CreateBookPage";
import EditBookPage from "./Components/EditBookPage/EditBookPage";
import HomePage from "./Components/HomePage/HomePage";
import Navbar from "./Components/Navbar/Navbar";
import ShoppingContext from "./contexts/ShoppingContext/ShoppingContext";
import AboutUs from "./Components/AboutUsPage/AboutUs";
import Register from "./Components/Register/Register";
import SessionContext from "./contexts/SessionContext/SessionContext";
import Login from "./Components/Login/Login";
import AdminProtectedRoute from "./Components/ProtectedRoutes/AdminProtectedRoutes";
import AdminPage from "./Components/Admin/AdminPage";

function App() {
  return (
    <Router>
      <SessionContext>
        <ShoppingContext>
          <Navbar />
          <div className="App">
            <Routes>
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/BookDetails/:id" element={<BookDetails />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/admin" element={
                <AdminProtectedRoute>
                  <AdminPage />
                </AdminProtectedRoute>}/>
            </Routes>
          </div>
        </ShoppingContext>
      </SessionContext>
    </Router>
  );
}

export default App;
