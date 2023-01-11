import React, { useState } from "react";
import styled from "styled-components";
import mobileProfile from "../assets/Profile/MobileIcons/noHover/Frame 7.png";
import mobileUsers from "../assets/Profile/MobileIcons/noHover/Vector.png";
import mobileStadistics from "../assets/Profile/MobileIcons/noHover/Frame 5.png";
import mobileReports from "../assets/Profile/MobileIcons/noHover/Frame 6.png";
import mobileProfileGreen from "../assets/Profile/MobileIcons/Hover/Frame 7 (1).png";
import mobileUsersGreen from "../assets/Profile/MobileIcons/Hover/Vector (1).png";
import mobileStadisticsGreen from "../assets/Profile/MobileIcons/Hover/Rectangle 92.png";
import mobileReportsGreen from "../assets/Profile/MobileIcons/Hover/Frame 6 (1).png";
import chatGreen from "../assets/chat2100.png"
import mask from "../assets/Bar/Mask group mobile.png";
import { useNavigate } from "react-router-dom";

const MobileBar = ({ props }) => {
  const navigate = useNavigate();
  const [mobileSelected, setMobileSelected] = useState("");

  const handleMobileSelected = (view) => {
    setMobileSelected(view);
    navigate(`/${view}`);
  };
  
  return (
    <>
      <BottomBar>
        <ButtonUsers
          mode={props}
          onClick={() => {
            handleMobileSelected("users");
          }}
        >
          <div>
            <img src={mobileUsersGreen} alt="users" />
          </div>
          <img src={mobileUsers} alt="users" />
          <span>
            <img src={mask} alt="mask" />
          </span>
        </ButtonUsers>

        <ButtonStadistics
          mode={props}
          onClick={() => {
            handleMobileSelected("stadistics");
          }}
        >
          <div>
            <img src={mobileStadisticsGreen} alt="stadistics" />
          </div>
          <img src={mobileStadistics} alt="stadistics" />
          <span>
            <img src={mask} alt="mask" />
          </span>
        </ButtonStadistics>
        <ButtonReports
          mode={props}
          onClick={() => {
            handleMobileSelected("reports");
          }}
        >
          <div>
            <img src={mobileReportsGreen} alt="reports" />
          </div>
          <img src={mobileReports} alt="reports" />
          <span>
            <img src={mask} alt="mask" />
          </span>
        </ButtonReports>
        <ButtonProfile
          mode={props}
          onClick={() => {
            handleMobileSelected("profile");
          }}
        >
          <div>
            <img src={mobileProfileGreen} alt="profile" />
          </div>
          <img src={mobileProfile} alt="profile" />
          <span>
            <img src={mask} alt="mask" />
          </span>
        </ButtonProfile>

        <ButtonChat
          mode={props}
          onClick={() => {
            handleMobileSelected("chat");
          }}
        >
          <div>
            <img src={chatGreen} alt="chat" />
          </div>
          <img src={chatGreen}  alt="chat" />
          <span>
            <img src={mask} alt="mask" />
          </span>
        </ButtonChat>
      </BottomBar>
    </>
  );
};

const BottomBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0px;
  background-color: #444444;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  width: 375px;
  height: 82px;
`;

const ButtonUsers = styled.button`
  display: flex;
  flex-direction: column !important;
  border: none;
  background: transparent;

  img {
    display: ${(props) => (props.mode !== "users" ? "flex" : "none")};
    width: 20px;
    height: 21px;
  }

  div img {
    display: ${(props) => (props.mode !== "users" ? "none" : "flex")};
  }

  span {
    position: absolute;
    top: 40px;
  }

  span img {
    display: ${(props) => (props.mode !== "users" ? "none" : "inline")};
    width: 72px;
    height: 25px;
    position: relative;
    left: -23px;
    top: 15px;
  }
`;

const ButtonStadistics = styled.button`
  display: flex;
  flex-direction: column !important;
  border: none;
  background: transparent;

  img {
    display: ${(props) => (props.mode !== "stadistics" ? "flex" : "none")};
    width: 20px;
    height: 21px;
  }

  div img {
    display: ${(props) => (props.mode !== "stadistics" ? "none" : "flex")};
  }

  span {
    position: absolute;
    top: 40px;
  }

  span img {
    display: ${(props) => (props.mode !== "stadistics" ? "none" : "inline")};
    width: 72px;
    height: 25px;
    position: relative;
    left: -23px;
    top: 15px;
  }
`;

const ButtonReports = styled.button`
  display: flex;
  flex-direction: column !important;
  border: none;
  background: transparent;

  img {
    display: ${(props) => (props.mode !== "reports" ? "flex" : "none")};
    width: 20px;
    height: 21px;
  }

  div img {
    display: ${(props) => (props.mode !== "reports" ? "none" : "flex")};
  }

  span {
    position: absolute;
    top: 40px;
  }

  span img {
    display: ${(props) => (props.mode !== "reports" ? "none" : "inline")};
    width: 72px;
    height: 25px;
    position: relative;
    left: -23px;
    top: 15px;
  }
`;

const ButtonProfile = styled.button`
  display: flex;
  flex-direction: column !important;
  border: none;
  background: transparent;

  img {
    display: ${(props) => (props.mode !== "profile" ? "flex" : "none")};
    width: 20px;
    height: 21px;
  }

  div img {
    display: ${(props) => (props.mode !== "profile" ? "none" : "flex")};
  }

  span {
    position: absolute;
    top: 40px;
  }

  span img {
    display: ${(props) => (props.mode !== "profile" ? "none" : "inline")};
    width: 72px;
    height: 25px;
    position: relative;
    left: -23px;
    top: 15px;
  }
`;

const ButtonChat = styled.button`
  display: flex;
  flex-direction: column !important;
  border: none;
  background: transparent;

  img {
    display: ${(props) => (props.mode !== "chat" ? "flex" : "none")};
    width: 20px;
    height: 21px;
  }

  div img {
    display: ${(props) => (props.mode !== "chat" ? "none" : "flex")};
  }

  span {
    position: absolute;
    top: 40px;
  }

  span img {
    display: ${(props) => (props.mode !== "chat" ? "none" : "inline")};
    width: 72px;
    height: 25px;
    position: relative;
    left: -23px;
    top: 15px;
  }
`;

export default MobileBar;
