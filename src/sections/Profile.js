import React, { useState, useEffect } from "react";
import {
  MentorSidebar,
  Section,
  TopRectangle,
  WhiteRectangle,
  ProfileTitle,
} from "../styles/texts";
import mentor from "../assets/Profile/ProfileVector.png";
import styled from "styled-components";
import edit from "../assets/Profile/Group 5.png";
import profileImg from "../assets/Profile/philip.png";
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

  console.log("USER EN PROFILE", user);
  return (
    <>
      <Section>
        {width >= medium ? (
          <>
            <MentorSidebar src={mentor} />
            {user.registerForm ? <Sidebar /> : <></>}

            <WhiteRectangle>
              <TopRectangle>
                <ProfileTitle>Profile</ProfileTitle>
              </TopRectangle>

              <ProfileDetails>
                <ProfilePicture src={profileImg} />
                <EditButton>
                  <p>Edit</p>
                  <Logo src={edit} alt="edit" />
                </EditButton>

                {/* {user.user ? (<>
                  <ProfileForm  props={user.user}/>
                </>) : (<></>)} */}
                <ProfileForm />
              </ProfileDetails>
            </WhiteRectangle>
          </>
        ) : (
          <>
            <Header>
              <ProfileTitle>Profile</ProfileTitle>
              <div>
                <img src={edit} alt="edit" />
              </div>
              <ProfilePicture src={profileImg} />
            </Header>

            <ProfileDetailsMobile>
              <ProfileForm />
            </ProfileDetailsMobile>
            <MobileBar />
          </>
        )}
      </Section>
    </>
  );
};

const ProfileDetails = styled.div`
  position: relative;
  width: 548px;
  height: 805px;
  left: 290px;
  top: 137px;

  display: flex;
  justify-content: center;

  background: #ffffff;
  mix-blend-mode: normal;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;

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
  height: 805px;
  background: #ffffff;
  mix-blend-mode: normal;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
`;

const ProfilePicture = styled.img`
  position: absolute;
  top: -30px;
  width: 130px;
  height: 130px;
  border-radius: 50%;

  @media only screen and (max-width: 700px) {
    position: absolute;
    width: 120px;
    height: 120px;
    top: 60px;
    left: 170px;
  }
`;

const EditButton = styled.button`
  box-sizing: border-box;
  position: absolute;
  width: 100px;
  height: 32px;
  top: 128px;
  border: 1px solid rgba(68, 68, 68, 0.15);
  background: transparent;
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  p {
    font-family: "Heebo";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 22px;
    color: rgba(68, 68, 68, 0.5);
    mix-blend-mode: normal;
    padding-right: 10px;
  }

  /* @media only screen and (max-width: 700px) {

    position: absolute;

    top: 48px;
    left: 250px;
    width: 32px;
    height: 32px;
    background-color: white;

    p {
      display: none;
    }
  } */
`;

const Logo = styled.img`
  width: 20px;
  height: 21px;
  padding-right: 10px;
  :hover {
    display: none;
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
