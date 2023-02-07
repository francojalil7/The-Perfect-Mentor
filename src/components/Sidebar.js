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
import { setUser } from "../states/user";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import chatGreen from "../assets/greenchat24.png";
import chatGrey from "../assets/greychat30.png";

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selected, setSelected] = useState("");
  const [age, setAge] = useState(0);
  const [view, setView] = useState("");
  const [role, setRole] = useState("");

  const handleSelected = (view) => {
    setSelected(view);
    navigate(`/${view}`);
  };

  useEffect(() => {
    setRole(localStorage.getItem("role"));
    setAge(localStorage.getItem("age"));
    setView(window.location.href.split("/")[3]);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    dispatch(setUser({}));
    navigate("/");
  };

  return (
    <SidebarContainer>
      <>
        {localStorage.getItem("isAdmin") === "true" ? (
          <>
            <SidebarButtonProfile
              mode={view}
              onClick={() => handleSelected("profile")}
            >
              <div>
                <img src={profileGreen} alt="profile" />
              </div>
              <img src={profile} alt="profile" />

              <p>Profile</p>
              <span>
                <img src={mask} alt="mask" />
              </span>
            </SidebarButtonProfile>
            <SidebarButtonUsers
              mode={view}
              onClick={() => handleSelected("users")}
            >
              <div>
                <img src={usersGreen} alt="users" />
              </div>

              <img src={users} alt="users" />

              <p>Users</p>
              <span>
                <img src={mask} alt="mask" />
              </span>
            </SidebarButtonUsers>
            <SidebarButtonStadistics
              mode={view}
              onClick={() => handleSelected("stadistics")}
            >
              <div>
                <img src={stadisticsGreen} alt="stadistics" />
              </div>
              <img src={stadistics} alt="stadistics" />

              <p>Stadistics</p>
              <span>
                <img src={mask} alt="mask" />
              </span>
            </SidebarButtonStadistics>
            <SidebarButtonReports
              mode={view}
              onClick={() => handleSelected("reports")}
            >
              <div>
                <img src={reportsGreen} alt="reports" />
              </div>
              <img src={reports} alt="reports" />

              <p>Reports</p>
              <span>
                <img src={mask} alt="mask" />
              </span>
            </SidebarButtonReports>
          </>
        ) : (
          <>
            {age === 0 ? (
              <>
                <SidebarButtonProfile onClick={() => handleSelected("profile")}>
                  <div>
                    <img src={profileGreen} alt="profile" />
                  </div>
                  <img src={profile} alt="profile" />

                  <p>Profile</p>
                  <span>
                    <img src={mask} alt="mask" />
                  </span>
                </SidebarButtonProfile>
              </>
            ) : (
              <>
                <SidebarButtonProfile
                  mode={view}
                  onClick={() => handleSelected("profile")}
                >
                  <div>
                    <img src={profileGreen} alt="profile" />
                  </div>
                  <img src={profile} alt="profile" />

                  <p>Profile</p>
                  <span>
                    <img src={mask} alt="mask" />
                  </span>
                </SidebarButtonProfile>

                <SidebarButtonFilteredUsers
                  mode={view}
                  onClick={() => handleSelected("filtered")}
                >
                  <div>
                    <img src={usersGreen} alt="filtered" />
                  </div>
                  <img src={users} alt="filtered" />

                  <p>{role === "mentor" ? "Mentees" : "Mentors"}</p>
                  <span>
                    <img src={mask} alt="mask" />
                  </span>
                </SidebarButtonFilteredUsers>
                <SidebarButtonStadistics
                  mode={view}
                  onClick={() => handleSelected("stadistics")}
                >
                  <div>
                    <img src={stadisticsGreen} alt="stadistics" />
                  </div>
                  <img src={stadistics} alt="stadistics" />

                  <p>Stadistics</p>
                  <span>
                    <img src={mask} alt="mask" />
                  </span>
                </SidebarButtonStadistics>
                <SidebarButtonChat
                  mode={view}
                  onClick={() => handleSelected("chat")}
                >
                  <div>
                    <img src={chatGreen} alt="chat" />
                  </div>
                  <img src={chatGrey} alt="chat" />

                  <p>Chat</p>
                  <span>
                    <img src={mask} alt="mask" />
                  </span>
                </SidebarButtonChat>
              </>
            )}
          </>
        )}
      </>
      <LogoutButton mode={view} onClick={() => handleLogout()}>
        <img src={logout} alt="logout" />
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
const SidebarButtonUsers = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 25px;
  border: none;
  background-color: ${(props) =>
    props.mode !== "users" ? "#bfd732" : "#444444"};
  width: 280px;
  p {
    font-family: "Heebo";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: ${(props) =>
      props.mode !== "users" ? "rgba(68, 68, 68, 0.5)" : "#bfd732"};
  }

  img {
    display: ${(props) => (props.mode !== "users" ? "flex" : "none")};
    width: 20px;
    height: 21px;
    padding-right: 10px;
  }

  div img {
    display: ${(props) => (props.mode !== "users" ? "none" : "flex")};
  }

  span {
    position: absolute;
    left: 223px;
  }
  span img {
    width: 72px;
    height: 72px;
    display: ${(props) => (props.mode !== "users" ? "none" : "inline")};
  }

  :hover {
    background: #444444;
    p {
      color: #bfd732 !important;
    }

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
`;
const SidebarButtonStadistics = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 25px;
  border: none;
  background-color: ${(props) =>
    props.mode !== "stadistics" ? "#bfd732" : "#444444"};
  width: 280px;
  p {
    font-family: "Heebo";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: ${(props) =>
      props.mode !== "stadistics" ? "rgba(68, 68, 68, 0.5)" : "#bfd732"};
  }

  img {
    display: ${(props) => (props.mode !== "stadistics" ? "flex" : "none")};
    width: 20px;
    height: 21px;
    padding-right: 10px;
  }

  div img {
    display: ${(props) => (props.mode !== "stadistics" ? "none" : "flex")};
  }

  span {
    position: absolute;
    left: 223px;
  }
  span img {
    width: 72px;
    height: 72px;
    display: ${(props) => (props.mode !== "stadistics" ? "none" : "inline")};
  }

  :hover {
    background: #444444;
    p {
      color: #bfd732 !important;
    }

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
`;
const SidebarButtonReports = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 25px;
  border: none;
  background-color: ${(props) =>
    props.mode !== "reports" ? "#bfd732" : "#444444"};
  width: 280px;
  p {
    font-family: "Heebo";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: ${(props) =>
      props.mode !== "reports" ? "rgba(68, 68, 68, 0.5)" : "#bfd732"};
  }

  img {
    display: ${(props) => (props.mode !== "reports" ? "flex" : "none")};
    width: 20px;
    height: 21px;
    padding-right: 10px;
  }

  div img {
    display: ${(props) => (props.mode !== "reports" ? "none" : "flex")};
  }

  span {
    position: absolute;
    left: 223px;
  }
  span img {
    width: 72px;
    height: 72px;
    display: ${(props) => (props.mode !== "reports" ? "none" : "inline")};
  }

  :hover {
    background: #444444;
    p {
      color: #bfd732 !important;
    }

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
`;
const SidebarButtonProfile = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 25px;
  border: none;
  background-color: ${(props) =>
    props.mode !== "profile" ? "#bfd732" : "#444444"};
  width: 280px;
  p {
    font-family: "Heebo";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: ${(props) =>
      props.mode !== "profile" ? "rgba(68, 68, 68, 0.5)" : "#bfd732"};
  }

  img {
    display: ${(props) => (props.mode !== "profile" ? "flex" : "none")};
    width: 20px;
    height: 21px;
    padding-right: 10px;
  }

  div img {
    display: ${(props) => (props.mode !== "profile" ? "none" : "flex")};
  }

  span {
    position: absolute;
    left: 223px;
  }
  span img {
    width: 72px;
    height: 72px;
    display: ${(props) => (props.mode !== "profile" ? "none" : "inline")};
  }

  :hover {
    background: #444444;
    p {
      color: #bfd732 !important;
    }

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
`;
const SidebarButtonChat = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 25px;
  border: none;
  background-color: ${(props) =>
    props.mode !== "chat" ? "#bfd732" : "#444444"};
  width: 280px;
  p {
    font-family: "Heebo";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: ${(props) =>
      props.mode !== "chat" ? "rgba(68, 68, 68, 0.5)" : "#bfd732"};
  }

  img {
    display: ${(props) => (props.mode !== "chat" ? "flex" : "none")};
    width: 20px;
    height: 21px;
    padding-right: 10px;
  }

  div img {
    display: ${(props) => (props.mode !== "chat" ? "none" : "flex")};
  }

  span {
    position: absolute;
    left: 223px;
  }
  span img {
    width: 72px;
    height: 72px;
    display: ${(props) => (props.mode !== "chat" ? "none" : "inline")};
  }

  :hover {
    background: #444444;
    p {
      color: #bfd732 !important;
    }

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
`;

const SidebarButtonFilteredUsers = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 25px;
  border: none;
  background-color: ${(props) =>
    props.mode !== "filtered" ? "#bfd732" : "#444444"};
  width: 280px;
  p {
    font-family: "Heebo";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: ${(props) =>
      props.mode !== "filtered" ? "rgba(68, 68, 68, 0.5)" : "#bfd732"};
  }

  img {
    display: ${(props) => (props.mode !== "filtered" ? "flex" : "none")};
    width: 20px;
    height: 21px;
    padding-right: 10px;
  }

  div img {
    display: ${(props) => (props.mode !== "filtered" ? "none" : "flex")};
  }

  span {
    position: absolute;
    left: 223px;
  }
  span img {
    width: 72px;
    height: 72px;
    display: ${(props) => (props.mode !== "filtered" ? "none" : "inline")};
  }

  :hover {
    background: #444444;
    p {
      color: #bfd732 !important;
    }

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
`;
const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  width: 270px;
  background: transparent;
  border: none;
  padding-left: 10px;
  color: rgba(68, 68, 68, 0.5);
  margin-left: 10px;
  margin-top: 10px;

  /* margin-top: ${(props) => (props.mode !== "chat" ? "300px" : "100px")}; */

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
