import React, { useEffect, useState } from "react";
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
// import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ChangePassword from "./sections/ChangePassword";
import ForgotPassword from "./sections/ForgotPassword";
import Route404 from "./components/Route404";
import Chat from "./sections/Chat";

function App() {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [userByEmail, setUserByEmail] = useState();

  useEffect(() => {
    if (user.succes) {
      navigate("/verification");
    }
    if(localStorage.getItem("email")){
      setUserByEmail(localStorage.getItem("email"))
    }
    // if (!user.user && email) {
    //   dispatch(getUserMail(email));
    // }
  }, [user.succes]);

  if (localStorage.getItem("email") || userByEmail) {
    return (
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/signin" element={<Profile />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/users" element={<Users />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/stadistics" element={<Stadistics />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="*" element={<Route404/>} />
      </Routes>
    )
  } else if (user.succes) {
    return (
      <Routes>
        <Route path="/" element={<SignInSection />} />
        <Route path="/verification" element={<MailVerification />} />
        <Route path="*" element={<Route404/>} />
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route path="/" element={<SignInSection />} />
        <Route path="/signIn" element={<SignInSection />} />
        <Route path="/signUp" element={<SignUpSection />} />
        <Route path="/forgotpass" element={<ForgotPassword />} />
        <Route path="/changepass/:token" element={<ChangePassword />} />
        <Route path="*" element={<Route404/>} />
      </Routes>
    );
  }
}

export default App;
