import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Login from "./components/Login";
// import Signup from "./components/Signup";
// import Profile from "./components/Profile";
import AuthContextProvider from "./contexts/AuthContext";
import Homepage from "./components/Homepage";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Contact from "./components/Contact";
import './App.css';
import Footer from "./components/Footer";

// ! PROTECTED ROUTES STILL MISSING!!

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <BrowserRouter>
          <Navigation />
          <Routes>
            {/* <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} /> */}
            {/* <Route path="/profile" element={<Profile />} /> */}
            <Route path="/" element={<Homepage />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="*" element={<Navigate to="/homepage" replace />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
