import React, { useState, useEffect } from "react";
import {
  PagesSection,
  MobileScreenTable,
  DashboardSearch,
  DashboardFilter,
  DashboardInput,
  AgeButton,
  FilterButton,
  StatusButton,
  ButtonTextAge,
  ButtonTextStatus,
  ButtonTextFilter,
  SearchButton,
  DPagination,
  Ellipse,
  UsersHeader,
  Image1,
  Image2,
  Title1,
  SubTitle1
} from "../styles/texts";
import Dashboard from "./Dashboard";
import MobileBar from "../components/MobileBar";
import MobileUsersInfo from "../components/MobileUsersInfo";
import image1 from "../assets/Users/doodle-4 1.png";
import image2 from "../assets/Users/doodle-5 1.png";
import Pagination from "../components/Pagination";
import { getUsersFilter } from "../states/usersFilter";
import { useDispatch } from "react-redux";
import Axios from "axios";

const Users = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(9);
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [value, setValue] = useState("");
  
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));

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
  const medium = 700;

  function useInput() {
    function onChange({ target }) {
      setValue(target.value);
    }
    return { onChange, value };
  }
  const searcher = useInput();

  const handleSearch = function () {
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
  let pageHeight = currentUsers.length * 100 + 510;

  return (
    <PagesSection height={pageHeight}>
      {width >= medium ? (
        <>
          <Dashboard />
        </>
      ) : (
        <>
          <UsersHeader>
            <div></div>
          </UsersHeader>

          <MobileScreenTable>
            <Title1>Users</Title1>
            <SubTitle1>View all the users</SubTitle1>
            <Image1 src={image1} />
            <Image2 src={image2} />
            <DashboardSearch>
              <DashboardInput
                placeholder={searcher.value ? searcher.value : "Search"}
                {...searcher}
              ></DashboardInput>
              <SearchButton onClick={handleSearch}>Go</SearchButton>
            </DashboardSearch>
            <Ellipse src="ellipse.svg" />

            <DashboardFilter>
              <FilterButton mode={filter} onClick={clearFilter}>
                <ButtonTextFilter mode={filter}>No Filter</ButtonTextFilter>
              </FilterButton>
              <AgeButton mode={filter} onClick={filterRole}>
                <ButtonTextAge mode={filter}>Role</ButtonTextAge>
              </AgeButton>
              <StatusButton mode={filter} onClick={filterName}>
                <ButtonTextStatus mode={filter}>Name</ButtonTextStatus>
              </StatusButton>
            </DashboardFilter>

            <MobileUsersInfo users={currentUsers} />
          </MobileScreenTable>
          <DPagination>
            <Pagination
              usersPerPage={usersPerPage}
              totalUsers={users.length}
              paginate={paginate}
            ></Pagination>
          </DPagination>

          <MobileBar />
        </>
      )}
    </PagesSection>
  );
};



export default Users;
