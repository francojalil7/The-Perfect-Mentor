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
  MentorSidebar,
} from "../styles/texts";
import Table from "../components/Table";
import Pagination from "../components/Pagination";
import MobileBar from "../components/MobileBar";
import MobileUsersInfo from "../components/MobileUsersInfo";
import image1 from "../assets/Users/doodle-4 1.png";
import image2 from "../assets/Users/doodle-5 1.png";
import Sidebar from "../components/Sidebar";
import mentor from "../assets/Profile/ProfileVector.png";
import { useDispatch, useSelector } from "react-redux";
import { getMentorsUsers } from "../states/mentorsUsers";
import { getMenteesUsers } from "../states/menteesUsers";
import { getUsersFilter } from "../states/usersFilter";
import { setUsersFilter } from "../states/usersFilter";

const UsersNew = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [role, setRole] = useState("");
  const [filter, setFilter] = useState("name");
  const [search, setSearch] = useState("");
  const [value, setValue] = useState("");
  // const [view, setView] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(9);
  const dispatch = useDispatch();

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    setRole(localStorage.getItem("role"));
    if (localStorage.getItem("role") === "mentee") {
      dispatch(getMentorsUsers());
    }
    if (localStorage.getItem("role") === "mentor") {
      dispatch(getMenteesUsers());
    }
  }, [search]);

  const mentees = useSelector((state) => state.menteesUsers);
  const mentors = useSelector((state) => state.mentorsUsers);

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

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  // const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const medium = 700;

  return (
    <PagesSection>
      {width >= medium ? (
        <>
          <Sidebar />
          <MentorSidebar src={mentor} />
          <DashboardWhiteRectangle>
            <DashboardTopRectangle>
              <DashboardTitle>
                {role === "mentor" ? " Mentees" : "Mentors"}
              </DashboardTitle>
              <DashboardSubtitle>View all the users</DashboardSubtitle>
            </DashboardTopRectangle>
            <DashboardDetails>
              <FirstImage src="doodle1.svg"></FirstImage>
              <SecondImage src="doodle2.svg"></SecondImage>

              <DashboardSearch>
                <DashboardInput
                  placeholder="Search by name"
                  {...searcher}
                ></DashboardInput>
                <SearchButton onClick={handleSearch}>Go</SearchButton>
              </DashboardSearch>
              <Ellipse src="ellipse.svg" />

              {localStorage.getItem("isAdmin") === "true" ? (
                <>
                  <DashboardFilter>
                    <FilterButton mode={filter} onClick={clearFilter}>
                      <ButtonTextFilter mode={filter}>
                        No filter
                      </ButtonTextFilter>
                    </FilterButton>
                    <>
                      <AgeButton mode={filter} onClick={filterRole}>
                        <ButtonTextAge mode={filter}>Role</ButtonTextAge>
                      </AgeButton>
                      <StatusButton mode={filter} onClick={filterName}>
                        <ButtonTextStatus mode={filter}>Name</ButtonTextStatus>
                      </StatusButton>
                    </>
                  </DashboardFilter>
                </>
              ) : (
                <></>
              )}

              <Table users={role === "mentee" ? mentors : mentees}></Table>
              <DPagination>
                <Pagination
                  usersPerPage={usersPerPage}
                  totalUsers={
                    role === "mentee" ? mentors.length : mentees.length
                  }
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

            {localStorage.getItem("isAdmin") === "true" ? (
              <>
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
              </>
            ) : (
              <></>
            )}

            <MobileUsersInfo users={role === "mentee" ? mentors : mentees} />
          </MobileScreenTable>
          <DPagination>
            <Pagination
              usersPerPage={usersPerPage}
              totalUsers={role === "mentee" ? mentors.length : mentees.length}
              paginate={paginate}
            ></Pagination>
          </DPagination>

          <MobileBar props="users" />
        </>
      )}
    </PagesSection>
  );
};

export default UsersNew;
