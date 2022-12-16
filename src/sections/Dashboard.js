import React, { useState, useEffect } from "react";
import { MentorSidebar } from "../styles/texts";
import mentor from "../assets/Profile/ProfileVector.png";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";
import Axios from "axios";
import Table from "../components/Table";
import Pagination from "../components/Pagination";

const Dashboard = () => {
  const user = useSelector((state) => state.user);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(9);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const res = await Axios.get("http://localhost:5001/user/users");
      setUsers(res.data);
      setLoading(false);
    };
    fetchUsers();
  }, []);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <MentorSidebar src={mentor} />
      <Sidebar />
      <DashboardWhiteRectangle>
        <DashboardTopRectangle>
          <DashboardTitle>Users</DashboardTitle>
          <DashboardSubtitle>View all the users</DashboardSubtitle>
        </DashboardTopRectangle>
        <DashboardDetails>
          <FirstImage src="doodle1.svg"></FirstImage>
          <SecondImage src="doodle2.svg"></SecondImage>
          <DashboardSearch>
            <DashboardInput placeholder="Search"></DashboardInput>
          </DashboardSearch>
          <Ellipse src="ellipse.svg" />
          <DashboardFilter>
            <FilterButton>
              <ButtonTextFilter>Clear filters</ButtonTextFilter>
            </FilterButton>
            <AgeButton>
              <ButtonTextAge>Age</ButtonTextAge>
            </AgeButton>
            <StatusButton>
              <ButtonTextStatus>Status</ButtonTextStatus>
            </StatusButton>
          </DashboardFilter>
          <Table users={currentUsers}></Table>
          <Pagination
            usersPerPage={usersPerPage}
            totalUsers={users.length}
            paginate={paginate}
          ></Pagination>
        </DashboardDetails>
      </DashboardWhiteRectangle>
    </>
  );
};

const DashboardDetails = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 1070px;
  height: 790px;
  left: 30px;
  top: 130px;

  background: #ffffff;
  box-shadow: 0px 38px 15px rgba(0, 19, 51, 0.01),
    0px 21px 13px rgba(0, 19, 51, 0.05), 0px 9px 9px rgba(0, 19, 51, 0.09),
    0px 2px 5px rgba(0, 19, 51, 0.1), 0px 0px 0px rgba(0, 19, 51, 0.1);
  border-radius: 35px;

  @media only screen and (max-width: 900px) {
    width: 500px;
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

export const DashboardWhiteRectangle = styled.div`
  position: relative;
  width: 1128px;
  height: 944px;
  left: 272px;
  top: 40px;
  background: #ffffff;
  box-shadow: 0px 38px 15px rgba(0, 19, 51, 0.01),
    0px 21px 13px rgba(0, 19, 51, 0.05), 0px 9px 9px rgba(0, 19, 51, 0.09),
    0px 2px 5px rgba(0, 19, 51, 0.1), 0px 0px 0px rgba(0, 19, 51, 0.1);
  border-radius: 35px;
`;

export const DashboardTitle = styled.h2`
  position: absolute;
  width: 129px;
  height: 73px;
  left: 50px;
  top: -10px;
  font-family: "Heebo";
  font-style: normal;
  font-weight: 500;
  font-size: 50px;
  line-height: 73px;
  color: #444444;
`;

export const DashboardSubtitle = styled.h3`
  position: absolute;
  width: 157px;
  height: 29px;
  left: 54px;
  top: 70px;
  font-family: "Heebo";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  color: #444444;
`;

export const DashboardTopRectangle = styled.div`
  position: absolute;
  width: 1128px;
  height: 184px;
  display: flex;
  justify-content: center;
  background: #f5f6f7;
  border-radius: 35px 35px 0px 0px;
`;

export const DashboardSearch = styled.div`
  position: absolute;
  width: 513px;
  height: 55px;
  left: 20px;
  top: 20px;
  background: #ffffff;
  mix-blend-mode: normal;
  border-radius: 40px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  border: none;
  outline: none;
  ::placeholder {
    color: #444444;
    right: 100px;
  }
`;

export const DashboardInput = styled.input`
  position: relative;
  width: 400px;
  height: 21px;
  left: 60px;
  top: 18px;

  font-family: "Heebo";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  outline: none;
  border: 0;

  color: #444444;

  mix-blend-mode: normal;
`;

export const DashboardFilter = styled.div`
  position: absolute;
  width: 319px;
  height: 55px;
  left: 550px;
  top: 20px;
  mix-blend-mode: normal;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
`;

export const Ellipse = styled.img`
  position: absolute;
  left: 50px;
  right: 74.19%;
  top: 40px;
  bottom: 76.37%;
`;

export const FilterButton = styled.button`
  box-sizing: border-box;

  position: absolute;
  width: 128px;
  height: 40px;
  left: 10px;
  top: 9px;

  mix-blend-mode: normal;
  border: 1px solid rgba(68, 68, 68, 0.15);
  border-radius: 40px;
`;

export const AgeButton = styled.button`
  box-sizing: border-box;

  position: absolute;
  width: 75px;
  height: 40px;
  left: 142px;
  top: 9px;

  mix-blend-mode: normal;
  border: 1px solid rgba(68, 68, 68, 0.15);
  border-radius: 40px;
`;

export const StatusButton = styled.button`
  position: relative;
  width: 92px;
  height: 40px;
  left: 220px;
  top: 9px;

  background: #444444;
  mix-blend-mode: normal;
  border-radius: 40px;
`;

export const ButtonTextFilter = styled.text`
  position: absolute;
  width: 80px;
  height: 22px;
  left: 24px;
  top: 10px;

  font-family: "Heebo";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  /* identical to box height */

  color: rgba(68, 68, 68, 0.5);

  mix-blend-mode: normal;
`;

export const ButtonTextAge = styled.text`
  position: absolute;
  width: 27px;
  height: 22px;
  left: 24px;
  top: 10px;

  font-family: "Heebo";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  /* identical to box height */

  color: rgba(68, 68, 68, 0.5);

  mix-blend-mode: normal;
`;

export const ButtonTextStatus = styled.text`
  position: absolute;
  width: 44px;
  height: 22px;
  left: 23px;
  top: 10px;

  font-family: "Heebo";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  /* identical to box height */

  color: #dadada;

  mix-blend-mode: normal;
`;

export const FirstImage = styled.img`
  position: absolute;
  left: 780px;
  right: -1.33%;
  top: -173px;
  bottom: 62.45%;

  background: url(doodle-4.png);
  transform: rotate(1.5deg);
`;

export const SecondImage = styled.img`
  position: absolute;
  left: 720px;
  right: 2.75%;
  top: -180px;
  bottom: 81.02%;
  background: url(doodle-5.png);
`;

export default Dashboard;
