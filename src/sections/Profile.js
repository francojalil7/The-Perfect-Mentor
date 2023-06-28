import React, { useState, useEffect } from "react";
import {
  MentorSidebar,
  Section,
  TopRectangle,
  WhiteRectangle,
  ProfileTitle,
  AdminProfileWhiteRectangle,
} from "../styles/texts";
import mentor from "../assets/Profile/ProfileVector.png";
import styled from "styled-components";
import profileImg from "../assets/Profile/Jane-Doe.jpeg";
import MobileBar from "../components/MobileBar.js";
import ProfileForm from "../components/ProfileForm";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";

const Profile = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
  const medium = 700;

  let user = useSelector((state) => state.user);

  return (
    <>
      <Section>
        {width >= medium ? (
          <>
            <MentorSidebar src={mentor} />
            <Sidebar />

            {localStorage.getItem("isAdmin") === "true" ? (
              <>
                <AdminProfileWhiteRectangle>
                  <TopRectangle>
                    <ProfileTitle>Admin Profile</ProfileTitle>
                  </TopRectangle>

                  <ProfileDetails mode="admin">
                    <ProfilePicture src={profileImg} />

                    <ProfileForm />
                  </ProfileDetails>
                </AdminProfileWhiteRectangle>
              </>
            ) : (
              <>
                <WhiteRectangle>
                  <TopRectangle>
                    <ProfileTitle>Profile</ProfileTitle>
                  </TopRectangle>

                  <ProfileDetails>
                    <ProfilePicture src={profileImg} />

                    <ProfileForm />
                  </ProfileDetails>
                </WhiteRectangle>
              </>
            )}
          </>
        ) : (
          <>
          <MobileBar/>
            <Header>
              <ProfileTitle>
                {localStorage.getItem("isAdmin") === "true"
                  ? "Admin Profile"
                  : "Profile"}
              </ProfileTitle>
              <ProfilePicture src={profileImg} />
            </Header>

            <ProfileDetailsMobile
              mode={
                localStorage.getItem("isAdmin") === "true" ? "admin" : "users"
              }
            >
              <ProfileForm />
            </ProfileDetailsMobile>
            <MobileBar props="profile" />
          </>
        )}
      </Section>
    </>
  );
};

const ProfileDetails = styled.div`
  position: relative;
  width: 548px;
  left: 290px;
  display: flex;
  justify-content: center;
  background: #ffffff;
  mix-blend-mode: normal;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  height: ${(props) => (props.mode !== "admin" ? "805px" : "405px")};
  top: ${(props) => (props.mode !== "admin" ? "137px" : "197px")};
  @media only screen and (max-width: 1400px) {
    left: 120px;
  }

  @media only screen and (max-width: 1080px) {
    left: 35px;
  }
`;

const ProfileDetailsMobile = styled.div`
  display: flex;
  justify-content: center;
  width: 355px;
  /* height: 805px; */
  background: #ffffff;
  mix-blend-mode: normal;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;

  height: ${(props) => (props.mode !== "admin" ? "805px" : "600px")};
`;

const ProfilePicture = styled.img`
  position: absolute;
  top: -30px;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  left: 370px;

  @media only screen and (max-width: 700px) {
    position: absolute;
    width: 120px;
    height: 120px;
    top: 60px;
    left: 170px;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: row !important;
  position: relative;
  left: -95px;

  div {
    position: relative;
    top: 45px;
    left: 15px;
    background-color: white;
    width: 32px;
    height: 32px;
    border-radius: 20px;

    img {
      position: relative;
      top: 8px;
      left: 8px;
      width: 16px;
      height: 16px;
    }
  }
`;

export default Profile;
