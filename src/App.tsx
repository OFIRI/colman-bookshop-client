import React, { useEffect } from "react";
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
import ViewCart from "./Components/ShoppingCart/ViewCart";
import BookTableContainer from "./Components/BookTable/BookTableContainer";
import { io } from "socket.io-client";
import AuthorTable from "./Components/AuthorTable/AuthorTable";
import AuthorByPriceTable from "./Components/AuthorByPriceTable/AuthorByPriceTable";

const socket = io("ws://localhost:5000");

function App() {
  useEffect(() => {
    const id = localStorage.getItem("userId");
    if (id) {
      socket.emit("sendUser", id);
    }

    return () => {
      socket.emit("dc");
    };
  }, []);

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
              <Route path="/cart" element={<ViewCart />} />
              <Route path="/AuthorTable" element={<AuthorTable />} />
              <Route
                path="/AuthorPriceTable"
                element={<AuthorByPriceTable />}
              />

              <Route
                path="/admin/*"
                element={
                  <AdminProtectedRoute>
                    <AdminPage />
                  </AdminProtectedRoute>
                }
              />
            </Routes>
          </div>
        </ShoppingContext>
      </SessionContext>
    </Router>
  );
}

export default App;
