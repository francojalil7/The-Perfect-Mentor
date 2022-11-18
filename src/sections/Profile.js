import React from "react";
import { Section, TopRectangle, WhiteRectangle } from "../styles/texts";
import mentor from "../assets/Profile/ProfileVector.png";
import styled from "styled-components";
import edit from "../assets/Profile/Group 5.png";
import profile from "../assets/Profile/Group 163.png";
import profileImg from "../assets/Profile/philip.png";
import users from "../assets/Profile/Vector.png";
import stadistics from "../assets/Profile/Rectangle 92.png";
import reports from "../assets/Profile/Vector 8.png";
import ProfileForm from "../components/ProfileForm";

const Profile = () => {
  return (
    <>
      <Section>
        <Mentor src={mentor} />

        <Sidebar>
          <SidebarButton>
            <img src={users} alt='users'/>
            <p>Users</p>
          </SidebarButton>
          <SidebarButton>
            <img src={stadistics} alt='stadistics'/>
            <p>Stadistics</p>
          </SidebarButton>
          <SidebarButton>
            <img src={reports} alt='reports'/>
            <p>Reports</p>
          </SidebarButton>
          <SidebarButton>
            <img style={{ color: "#444444" }} src={profile} alt='profile'/>
            <p>Profile</p>
          </SidebarButton>
        </Sidebar>
        <WhiteRectangle>
          <TopRectangle>
            <Title>Profile</Title>
          </TopRectangle>

          <ProfileDetails>
            <ProfilePicture src={profileImg} />
            <EditButton>
              <p>Edit</p>
              <img src={edit} alt='edit'/>
            </EditButton>



            <ProfileForm/>
          </ProfileDetails>
        </WhiteRectangle>
      </Section>
    </>
  );
};

const Mentor = styled.img`
  position: absolute;
  top: 81px;
  left: 30px;
  height: 107;
  width: 200;
`;

const ProfileDetails = styled.div`
  position: relative;
  width: 548px;
  height: 767px;
  left: 290px;
  top: 137px;

  display: flex;
  justify-content: center;

  background: #ffffff;
  mix-blend-mode: normal;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
`;

const Title = styled.h2`
  font-family: "Heebo";
  font-style: normal;
  font-weight: 500;
  font-size: 50px;
  line-height: 73px;
  color: #444444;
  margin-top: 40px;
`;

const ProfilePicture = styled.img`
  position: absolute;
  top: -30px;
  width: 130px;
  height: 130px;
  border-radius: 50%;
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
`;

const Sidebar = styled.div`
  width: 270px;
  position: absolute;
  top: 240px;
  left: 0;
`;

const SidebarButton = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 25px;
  color: rgba(68, 68, 68, 0.5);
  p {
    font-family: "Heebo";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;

    /* :hover{
        color: #bfd732 !important;
    } */
  }
  img {
    width: 20px;
    height: 21px;
    padding-right: 10px;
    :hover {
    background: #444444;
    color: #bfd732 !important;
  }
  }

  :hover {
    background: #444444;
    color: #bfd732 !important;
  }
`;

export default Profile;
