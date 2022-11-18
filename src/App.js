import React from "react";
import OnBoarding from "./sections/OnBoarding";
import SignUpSection from "./sections/SignUpSection";
import SignInSection from "./sections/SignInSection";
import Profile from "./sections/Profile";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<OnBoarding />} />
        <Route path="/signup" element={<SignUpSection />} />
        <Route path="/signin" element={<SignInSection />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
