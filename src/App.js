import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import OnBoarding from "./sections/OnBoarding";
import SignUpSection from "./sections/SignUpSection";
import SignInSection from "./sections/SignInSection";
import Profile from "./sections/Profile";
import Stadistics from "./sections/Stadistics";
import AdminUsers from "./sections/AdminUsers";
import Reports from "./sections/Reports";
import "./App.css";
import ChangePassword from "./sections/ChangePassword";
import ForgotPassword from "./sections/ForgotPassword";
import Route404 from "./components/Route404";
import Chat from "./sections/Chat";
import UsersNew from "./sections/UsersNew";
import MailVerification from "./sections/MailVerification";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (
      localStorage.getItem("email") &&
      localStorage.getItem("status") === "UNVERIFIED"
    ) {
      navigate("/verification");
    }
  }, []);

  if (
    localStorage.getItem("email") &&
    localStorage.getItem("status") === "VERIFIED" && localStorage.getItem("isAdmin") === "true"
  ) {
    return (
      <Routes>
        <>
          <Route path="/profile" element={<Profile />} />
          <Route path="/users" element={<AdminUsers />} />
          {/* <Route path="/reports" element={<Reports />} /> */}
          <Route path="/stadistics" element={<Stadistics />} />
          <Route path="*" element={<Route404/>} />
        </>

      </Routes>
    );
  } 

  if (
    localStorage.getItem("email") &&
    localStorage.getItem("status") === "VERIFIED" && localStorage.getItem("isAdmin") === "false"
  ) {
    return (
      <Routes>
        <>
          <Route path="/profile" element={<Profile />} />
          {/* <Route path="/reports" element={<Reports />} /> */}
          <Route path="/stadistics" element={<Stadistics />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/filtered" element={<UsersNew />} />
          <Route path="*" element={<Route404/>} />
        </>
      </Routes>
    );
  } 
  
  else if (localStorage.getItem("signup") === "ok") {
    return (
      <Routes>
        <Route path="/verification" element={<MailVerification />} />
      </Routes>
    );
  }
  
  else {
    return (
      <Routes>
        <>
          <Route path="/" element={<OnBoarding />} />
          <Route path="/signup" element={<SignUpSection />} />
          <Route path="/signin" element={<SignInSection />} />
          <Route path="/forgotpass" element={<ForgotPassword />} />
          <Route path="/changepass/:token" element={<ChangePassword />} />
          <Route path="*" element={<Route404/>} />
        </>

      </Routes>
    );
  }

  <></>;
}

export default App;