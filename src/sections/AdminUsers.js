import React, { useState, useEffect } from "react";
import {
  PagesSection,
  DashboardWhiteRectangle,
  DashboardTopRectangle,
  DashboardTitle,
  DashboardSubtitle,
  DashboardDetails,
  FirstImage,
  SecondImage,
  DashboardInput,
  DashboardSearch,
  SearchButton,
  Ellipse,
  DashboardFilter,
  FilterButton,
  ButtonTextFilter,
  AgeButton,
  ButtonTextAge,
  StatusButton,
  ButtonTextStatus,
  DPagination,
  UsersHeader,
  MobileScreenTable,
  Title1,
  SubTitle1,
  Image1,
  Image2,
} from "../styles/texts";
import MobileBar from "../components/MobileBar";
import MobileUsersInfo from "../components/MobileUsersInfo";
import image1 from "../assets/Users/doodle-4 1.png";
import image2 from "../assets/Users/doodle-5 1.png";
import mentor from "../assets/Profile/ProfileVector.png";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";
import Pagination from "../components/Pagination";
import { MentorSidebar } from "../styles/texts";
import { useDispatch, useSelector } from "react-redux";
import { getUsersInfo } from "../states/usersInfo";
import { getUsersFilter } from "../states/usersFilter";
import { setUsersFilter } from "../states/usersFilter";

const AdminUsers = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [filter, setFilter] = useState("name");
  const [search, setSearch] = useState("");
  const [value, setValue] = useState("");
  const [view, setView] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(9);
  const dispatch = useDispatch();

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    const fetchUsers = async () => {
      if (filter === "" || search === "") {
        dispatch(getUsersInfo());
      } else {
        dispatch(getUsersFilter({ filter, value }));
      }
    };

    fetchUsers();
  }, [search]);

  const users = useSelector((state) => state.usersInfo);
  const usersFilter = useSelector((state) => state.usersFilter);
  const medium = 700;
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  function useInput() {
    function onChange({ target }) {
      setValue(target.value);
    }
    return { onChange, value };
  }

  const searcher = useInput();

  const handleSearch = function (e) {
    if (filter === "") {
      alert("Must select a filter");
    }
    dispatch(getUsersFilter({ value, filter }));
    setSearch("buscar");
  };

  const clearFilter = () => {
    setSearch("");
    setFilter("");
    dispatch(setUsersFilter([]));
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

  return (
    <PagesSection>
      {width >= medium ? (
        <>
          <Sidebar />
          <MentorSidebar src={mentor} />
          <DashboardWhiteRectangle>
            <DashboardTopRectangle>
              <DashboardTitle>All Users</DashboardTitle>
              <DashboardSubtitle>View all the users</DashboardSubtitle>
            </DashboardTopRectangle>

            <DashboardDetails>
              <FirstImage src="doodle1.svg"></FirstImage>
              <SecondImage src="doodle2.svg"></SecondImage>

              <DashboardSearch>
                <DashboardInput
                  placeholder="Search"
                  {...searcher}
                ></DashboardInput>
                <SearchButton onClick={handleSearch}>Go</SearchButton>
              </DashboardSearch>
              <Ellipse src="ellipse.svg" />

              <DashboardFilter>
                <FilterButton mode={filter} onClick={clearFilter}>
                  <ButtonTextFilter mode={filter}>No filter</ButtonTextFilter>
                </FilterButton>
                {/* {localStorage.getItem("isAdmin") === "true" ? ( */}
                  <>
                    <AgeButton mode={filter} onClick={filterRole}>
                      <ButtonTextAge mode={filter}>Role</ButtonTextAge>
                    </AgeButton>
                    <StatusButton mode={filter} onClick={filterName}>
                      <ButtonTextStatus mode={filter}>Name</ButtonTextStatus>
                    </StatusButton>
                  </>
        
              </DashboardFilter>

              <Table users={usersFilter.length ? usersFilter : users}></Table>
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

            <MobileUsersInfo users={usersFilter.length ? usersFilter : users} />
          </MobileScreenTable>
          <DPagination>
            <Pagination
              usersPerPage={usersPerPage}
              totalUsers={users.length}
              paginate={paginate}
            ></Pagination>
          </DPagination>

          <MobileBar props="users" />
        </>
      )}
    </PagesSection>
  );
};
export default AdminUsers;
