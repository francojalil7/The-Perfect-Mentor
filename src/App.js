import React, { useEffect, useState } from "react";
import OnBoarding from "./sections/OnBoarding";
import SignUpSection from "./sections/SignUpSection";
import SignInSection from "./sections/SignInSection";
import Profile from "./sections/Profile";
import Stadistics from "./sections/Stadistics";
import Users from "./sections/Users";
import Reports from "./sections/Reports";
import Dashboard from "./sections/Dashboard"
import { Route, Routes } from "react-router-dom";
import "./App.css";

import { useSelector } from "react-redux";
function App() {
  const user = useSelector((state) => state.user);
  const [userById, setUserById] = useState({});

  useEffect(() => {
    if (!user.user) {
      const id = localStorage.getItem("_id");
      setUserById(id);
    }
  }, []);

  return (
    <>
      <Routes>
        {user.user || userById ? (
          <>
            {" "}
            <Route path="/profile" element={<Profile />} />
            <Route path="/users" element={<Users />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/stadistics" element={<Stadistics />} />
          </>
        ) : (
          <>
            {" "}
            <Route path="/" element={<OnBoarding />} />
            <Route path="/signup" element={<SignUpSection />} />
            <Route path="/signin" element={<SignInSection />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
