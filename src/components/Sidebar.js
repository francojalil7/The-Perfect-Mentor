import React, { useEffect, useState } from "react";
import styled from "styled-components";
import users from "../assets/Profile/Vector.png";
import stadistics from "../assets/Profile/Rectangle 92.png";
import reports from "../assets/Profile/Vector 8.png";
import profile from "../assets/Profile/Group 163.png";
import usersGreen from "../assets/Profile/GreenIcons/Vector.png";
import reportsGreen from "../assets/Profile/GreenIcons/Group 162.png";
import stadisticsGreen from "../assets/Profile/GreenIcons/Rectangle 92.png";
import profileGreen from "../assets/Profile/GreenIcons/Group 163.png";
import logout from "../assets/Bar/login.png";
import mask from "../assets/Bar/Mask group.svg";
import {setUser} from "../states/user"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [selected, setSelected] = useState("profile");
  const [age, setAge] = useState(0);

  const handleSelected = (view) => {
    setSelected(view);
    navigate(`/${view}`);
  };

  const user = useSelector((state) => state.user);
  console.log("user en sidebar", user)

  useEffect(() => {
    setAge(localStorage.getItem("age"))
  },[])

  console.log("age en sidebar", age)
  const handleLogout = () => {
    localStorage.clear()
    dispatch(setUser({}))
    navigate("/")
  }

  return (

    <SidebarContainer>
        { age === 0   ? (<>
          <SidebarButton onClick={() => handleSelected("profile")}>
        <div>
          <img src={profileGreen} alt="profile" />
        </div>
        <img src={profile} alt="profile" />

        <p>Profile</p>
        <span>
          <img src={mask} alt="mask"/>
        </span>
      </SidebarButton>
        
        </>) : (<>
          <SidebarButton onClick={() => handleSelected("users")}>
        <div>
          <img src={usersGreen} alt="users" />
        </div>

        <img src={users} alt="users" />

        <p>Users</p>
        <span>
          <img src={mask} alt="mask"/>
        </span>
      </SidebarButton>
      <SidebarButton onClick={() => handleSelected("stadistics")}>
        <div>
          <img src={stadisticsGreen} alt="stadistics" />
        </div>
        <img src={stadistics} alt="stadistics" />

        <p>Stadistics</p>
        <span>
          <img src={mask} alt="mask"/>
        </span>
      </SidebarButton>
      <SidebarButton onClick={() => handleSelected("reports")}>
        <div>
          <img src={reportsGreen} alt="reports" />
        </div>
        <img src={reports} alt="reports" />

        <p>Reports</p>
        <span>
          <img src={mask} alt="mask"/>
        </span>
      </SidebarButton>
      <SidebarButton onClick={() => handleSelected("profile")}>
        <div>
          <img src={profileGreen} alt="profile" />
        </div>
        <img src={profile} alt="profile" />

        <p>Profile</p>
        <span>
          <img src={mask} alt="mask"/>
        </span>
      </SidebarButton>
      
      </>)}
      
      

      <LogoutButton 
      onClick={() => handleLogout()}
      >
        <img src={logout} alt="logout"/>
        <p>Logout</p>
      </LogoutButton>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  width: 275px;
  position: absolute;
  top: 240px;
  left: 0;
`;

const SidebarButton = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 25px;
  color: rgba(68, 68, 68, 0.5);
  border:none;
  background:transparent;
  width: 280px;
  p {
    font-family: "Heebo";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }
  img {
    width: 20px;
    height: 21px;
    padding-right: 10px;
  }

  div img {
    display: none;
  }
  span img {
    display: none;
  }

  //hover del boton: texto verde, fondo gris, display none
  :hover {
    background: #444444;
    color: #bfd732 !important;

   

    img {
      display: none;
    }

    div img {
      width: 20px;
      height: 21px;
      padding-right: 10px;
      display: flex;
    }

   

  }
  :focus{
    background: #444444;
    color: #bfd732 !important;

    img {
      display: none;
    }

    div img {
      width: 20px;
      height: 21px;
      padding-right: 10px;
      display: flex;
    }
    span {
      position: absolute;
      left: 223px;
    }
    span img {
      display: inline;
      width: 72px;
      height: 72px;
    }
  }

  
`;

const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  width: 270px;
  background: transparent;
  border: none;
  padding-left: 10px;
  color: rgba(68, 68, 68, 0.5);
  margin-top: 350px;

  p {
    margin-left: 10px;

    font-family: "Heebo";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
  }

  :hover {
    color: #444444 !important;
  }
`;

export default Sidebar;
