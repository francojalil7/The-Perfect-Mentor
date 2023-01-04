import React, { useState, useEffect } from "react";
import { DPagination, MentorSidebar, SearchButton, Ellipse } from "../styles/texts";
import mentor from "../assets/Profile/ProfileVector.png";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Axios from "axios";
import Table from "../components/Table";
import Pagination from "../components/Pagination";
import { getUsersFilter } from "../states/usersFilter";
import { useDispatch } from "react-redux";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(9);
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [value, setValue] = useState("");
  const [view, setView] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
   setView(window.location.href.split("/")[3])
    const fetchUsers = async () => {
      setLoading(true);
      let res;
      if (filter === "" || search === "") {
        res = await Axios.get("http://localhost:5001/user/users");
      } else {
        res = await Axios.get(
          `http://localhost:5001/user/filtered/${filter}/${value}`
        );
      }
      setUsers(res.data);
      setLoading(false);
    };
    fetchUsers();
  }, [search]);

  function useInput() {
    function onChange({ target }) {
      setValue(target.value);
    }
    return { onChange, value };
  }
  const searcher = useInput();

  const handleSearch = function (e) {
    if (filter === "") {
      alert("debe seleccionar un filtro");
    }
    dispatch(getUsersFilter({ value, filter }));
    setSearch("buscar");
  };

  const clearFilter = () => {
    setSearch("");
    setFilter("");
  };
  const filterRole = () => {
    if (search !== "") {
      setSearch("");
    }
    setFilter("role");
  };
  const filterName = () => {
    if (search !== "") {
      setSearch("");
    }
    setFilter("userName");
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <MentorSidebar src={mentor} />
      <Sidebar />
      <DashboardWhiteRectangle>
        <DashboardTopRectangle>
          <DashboardTitle>{view === "users" ? "Users" : "Reports"}</DashboardTitle>
          <DashboardSubtitle>{view === "users" ? "View all the users" : "Check the reports of the users"}</DashboardSubtitle>
        </DashboardTopRectangle>
        <DashboardDetails>
          <FirstImage src="doodle1.svg"></FirstImage>
          <SecondImage src="doodle2.svg"></SecondImage>
          <DashboardSearch>
            <DashboardInput
              placeholder={view === "users" ? "Search" : "Search for id"}
              // onKeyDown={handleSearch}
              {...searcher}
            ></DashboardInput>
            <SearchButton onClick={handleSearch}>Go</SearchButton>
          </DashboardSearch>
          <Ellipse src="ellipse.svg" />
          {view === "users" ? (<> <DashboardFilter>
            <FilterButton mode={filter} onClick={clearFilter}>
              <ButtonTextFilter mode={filter}>No filter</ButtonTextFilter>
            </FilterButton>
            <AgeButton mode={filter} onClick={filterRole}>
              <ButtonTextAge mode={filter}>Role</ButtonTextAge>
            </AgeButton>
            <StatusButton mode={filter} onClick={filterName}>
              <ButtonTextStatus mode={filter}>Name</ButtonTextStatus>
            </StatusButton>
          </DashboardFilter></>) : (<></>)}
         
          <Table users={currentUsers}></Table>
          <DPagination>
            <Pagination
              usersPerPage={usersPerPage}
              totalUsers={users.length}
              paginate={paginate}
            ></Pagination>
          </DPagination>
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

  @media only screen and (max-width: 1400px) {
    width: 880px !important;

    left: 10px !important;
  }

  @media only screen and (max-width: 1080px) {
    width: 680px !important;
    left: 10px !important;
  }
`;

const DashboardWhiteRectangle = styled.div`
  position: absolute;
  width: 1128px;
  height: 944px;
  left: 270px;
  top: 40px;
  background: #ffffff;
  box-shadow: 0px 38px 15px rgba(0, 19, 51, 0.01),
    0px 21px 13px rgba(0, 19, 51, 0.05), 0px 9px 9px rgba(0, 19, 51, 0.09),
    0px 2px 5px rgba(0, 19, 51, 0.1), 0px 0px 0px rgba(0, 19, 51, 0.1);
  border-radius: 35px;

  @media only screen and (max-width: 1400px) {
    width: 900px !important;
  }

  @media only screen and (max-width: 1080px) {
    width: 700px !important;
  }

  @media only screen and (max-width: 900px) {
    width: 500px;
  }
`;

const DashboardTitle = styled.h2`
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

const DashboardSubtitle = styled.h3`
  position: absolute;
  width: 357px;
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

const DashboardTopRectangle = styled.div`
  position: absolute;
  width: 1128px;
  height: 184px;
  display: flex;
  justify-content: center;
  background: #f5f6f7;
  border-radius: 35px 35px 0px 0px;

  @media only screen and (max-width: 1400px) {
    width: 900px !important;
  }

  @media only screen and (max-width: 1080px) {
    width: 700px !important;
  }

  @media only screen and (max-width: 900px) {
    width: 500px;
  }
`;

const DashboardSearch = styled.div`
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

  @media only screen and (max-width: 1080px) {
    height: 50px;
    top: 10px;
  }
`;

const DashboardInput = styled.input`
  position: relative;
  width: 400px;
  height: 21px;
  left: 60px;
  top: 13px;
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

const DashboardFilter = styled.div`
  position: absolute;
  width: 319px;
  height: 55px;
  left: 550px;
  top: 20px;
  mix-blend-mode: normal;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  @media only screen and (max-width: 1080px) {
    left: 20px;
    top: 65px;
    height: 40px;
  }
`;



const FilterButton = styled.button`
  box-sizing: border-box;
  position: absolute;
  width: 128px;
  height: 40px;
  left: 10px;
  top: 9px;
  mix-blend-mode: normal;
  border: 1px solid rgba(68, 68, 68, 0.15);
  border-radius: 40px;
  background-color: ${(props) =>
    props.mode === "" ? "grey" : "rgba(68, 68, 68, 0.15)"};
  @media only screen and (max-width: 1080px) {
    height: 25px;
  }
`;

const AgeButton = styled.button`
  box-sizing: border-box;

  position: absolute;
  width: 75px;
  height: 40px;
  left: 142px;
  top: 9px;
  mix-blend-mode: normal;
  border: 1px solid rgba(68, 68, 68, 0.15);
  border-radius: 40px;
  background-color: ${(props) =>
    props.mode === "role" ? "grey" : "rgba(68, 68, 68, 0.15)"};
  @media only screen and (max-width: 1080px) {
    height: 25px;
  }
`;

const StatusButton = styled.button`
  position: relative;
  width: 92px;
  height: 40px;
  left: 220px;
  top: 9px;
  border: solid 1px rgba(68, 68, 68, 0.15);
  mix-blend-mode: normal;
  border-radius: 40px;
  background-color: ${(props) =>
    props.mode === "userName" ? "grey" : "rgba(68, 68, 68, 0.15)"};
  @media only screen and (max-width: 1080px) {
    height: 25px;
    top: 6px;
  }
`;

const ButtonTextFilter = styled.text`
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
  color: ${(props) => (props.mode === "" ? "white" : "rgba(68, 68, 68, 0.5)")};

  mix-blend-mode: normal;
  @media only screen and (max-width: 1080px) {
    top: 2px;
  }
`;

const ButtonTextAge = styled.text`
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
  color: ${(props) =>
    props.mode === "role" ? "white" : "rgba(68, 68, 68, 0.5)"};

  mix-blend-mode: normal;
  @media only screen and (max-width: 1080px) {
    top: 2px;
  }
`;

const ButtonTextStatus = styled.text`
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
  color: ${(props) =>
    props.mode === "userName" ? "white" : "rgba(68, 68, 68, 0.5)"};

  mix-blend-mode: normal;
  @media only screen and (max-width: 1080px) {
    top: 2px;
  }
`;

const FirstImage = styled.img`
  position: absolute;
  left: 780px;
  right: -1.33%;
  top: -173px;
  bottom: 62.45%;

  background: url(doodle-4.png);
  transform: rotate(1.5deg);

  @media only screen and (max-width: 1400px) {
    left: 580px;
    top: -200px;
  }

  @media only screen and (max-width: 1080px) {
    left: 400px;
    top: -200px;
  }
`;

const SecondImage = styled.img`
  position: absolute;
  left: 720px;
  right: 2.75%;
  top: -180px;
  bottom: 81.02%;
  background: url(doodle-5.png);

  @media only screen and (max-width: 1400px) {
    left: 520px;
  }

  @media only screen and (max-width: 1080px) {
    left: 360px;
  }
`;



export default Dashboard;
