import React from "react";
import OnBoarding from "./sections/OnBoarding";
import SignUpSection from "./sections/SignUpSection";
import SignInSection from "./sections/SignInSection";
import Profile from "./sections/Profile";
import Stadistics from "./sections/Stadistics";
import Users from "./sections/Users";
import Reports from "./sections/Reports";
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
        <Route path="/users" element={<Users />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/stadistics" element={<Stadistics />} />
      </Routes>
    </>
  );
}

export default App;
