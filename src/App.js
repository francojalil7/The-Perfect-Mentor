import React, { useEffect, useState } from "react";
import OnBoarding from "./sections/OnBoarding";
import SignUpSection from "./sections/SignUpSection";
import SignInSection from "./sections/SignInSection";
import Profile from "./sections/Profile";
import Stadistics from "./sections/Stadistics";
import Users from "./sections/Users";
import Reports from "./sections/Reports";
import MailVerification from "./sections/MailVerification";
import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./sections/Dashboard";
import "./App.css";
import { getUserMail } from "./states/user";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import ChangePassword from "./sections/ChangePassword";
function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [userByEmail, setUserByEmail] = useState({});

  useEffect(() => {
    const email = localStorage.getItem("email");
    setUserByEmail(email);

    if(user.succes){
      navigate("/verification")
    }
    if (!user.user && email) {
      dispatch(getUserMail(email));
    }
  }, [user.succes]);



  if (user.user || userByEmail) {
    return (
      <Routes>
        {user.user !== "undefined" ? (
          <>
            <Route path="/profile" element={<Profile />} />
            <Route path="/users" element={<Users />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/stadistics" element={<Stadistics />} />
            <Route path="/changepass" element={<ChangePassword />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </>
        ) : (
          <>
            <Route path="/signin" element={<SignInSection />} />
          </>
        )}
      </Routes>
    );
  } else {
    return (
      <Routes>
        {user.succes ? (
          <>
            <Route path="/verification" element={<MailVerification />} />
          </>
        ) : (
          <>
            <Route path="/" element={<OnBoarding />} />
            <Route path="/signup" element={<SignUpSection />} />
            <Route path="/signin" element={<SignInSection />} />
          </>
        )}
        <></>
      </Routes>
    );
  }
}

export default App;


