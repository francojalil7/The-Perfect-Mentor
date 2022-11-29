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

import mask from "../assets/Bar/Mask group mobile.png";
import { useNavigate } from "react-router-dom";
const MobileBar = () => {
  const navigate = useNavigate();
  const [mobileSelected, setMobileSelected] = useState("profile");

  const handleMobileSelected = (view) => {
    console.log("VIEW", view);
    setMobileSelected(view);
    console.log("MOBILE SELECTED", mobileSelected);
    navigate(`/${view}`);
  };
  return (
    <>
      <BottomBar>
        <button
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
        </button>

        <button
          onClick={() => {
            handleMobileSelected("stadistics");
          }}
        >
          <div>
            <img src={mobileStadisticsGreen} alt="stadistics" />
          </div>
          <img src={mobileStadistics} alt="stadistics" />
          <span>
            <img src={mask} alt="mask"/>
          </span>
        </button>
        <button
          onClick={() => {
            handleMobileSelected("reports");
          }}
        >
          <div>
            <img src={mobileReportsGreen} alt="reports" />
          </div>
          <img src={mobileReports} alt="reports" />
          <span>
            <img src={mask} alt="mask"/>
          </span>
        </button>
        <button
          onClick={() => {
            handleMobileSelected("profile");
          }}
        >
          <div>
            <img src={mobileProfileGreen} alt="profile" />
          </div>
          <img src={mobileProfile} alt="profile" />
          <span>
            <img src={mask} alt="mask"/>
          </span>
        </button>
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

  button {
    display: flex;
    flex-direction: column !important;
    border: none;
    background: transparent;

    img {
      width: 20px;
      height: 21px;
    }

    div img {
      display: none;
    }
    span img {
      display: none;
    }

    :hover {
      background: #444444;
      color: #bfd732 !important;

      img {
        display: none;
      }

      div img {
        width: 20px;
        height: 21px;
        display: flex;
      }
      /* span {
        position: absolute;
        top: 40px;
      }
      span img {
        display: inline;
        width: 92px;
        height: 92px;
        position: relative;
        left: -25px;
      } */
    }

    :focus {
      img {
        display: none;
      }

      div img {
        width: 20px;
        height: 21px;
        display: flex;
      }

      span {
        position: absolute;
        top: 40px;
      }
      span img {
        display: inline;
        width: 72px;
        height: 25px;
        position: relative;
        left: -23px;
        top:15px;
      }
    }
  }
`;

export default MobileBar;
