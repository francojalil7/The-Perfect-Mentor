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
import { Bell, Notification } from "../styles/texts";
import axios from "axios";

const UsersNew = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [role, setRole] = useState("");
  const [filter, setFilter] = useState("name");
  const [search, setSearch] = useState("");
  const [value, setValue] = useState("");
  // const [view, setView] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(9);
  const [pendingNotification, setPendingNotification] = useState();
  const [toNotifyUser, setToNotifyUser] = useState();
  const [showNotification, setShowNotification] = useState(true);
  const [responseNotificationValue, setResponseNotificationValue] = useState();
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

  //Lógica notificaciones

  //Consulta si el user tiene una notificación con pending true
  //Espera recibir user email
  //Busca en el user los valores en notifications, si hay alguna pendiente y el user id a notificar y lo mete en un estado
  //Se va a llamar con el chron cada 1 minuto
  const notificationStack = async () => {
    console.log("entre a notif stack")
    let mentor = localStorage.getItem("email");
    let search = await axios
      .get(`http://localhost:5001/user/me/${mentor}`)
      .then((response) => {
        const pending = response.data.notifications[0].pending;
        const id = response.data.notifications[0].id;
        //Setea el valor de pending en true/false
        setPendingNotification(pending);
        //setea el valor del userId a notificar
        setToNotifyUser(id);
      });
    if (pendingNotification) {
      //Estado para lanzar la campanita con botón rojo
      setShowNotification(true);
    }
  };
  notificationStack()

  //Función para el click en la campanita con botón rojo
  //Debe abrir el div y setear el valor de mentee con el que se va a conectar
  //El div debe estar posicionado sobre la campanita
  const openNotificationDiv = async () => {
    //lógica para abrir el div
    //Se abre si el valor de showNotif está en true

  };

  //Setea el valor del botón seleccionado (Si/No)
  const notificationLogic = (e) => {
    setResponseNotificationValue(e.target.value)
    notificationResponse(e)
  };

  //quedé aca<------------------------ me falta lograr q se actualice en pendign/rejected
  //Función para el mentor
  //Actualiza los valores en la db, cierra el div, cambia la imagen de la campanita
  const notificationResponse = async (e) => {
    console.log("entré a notif response")
    const mentorEmail = localStorage.getItem("email");
    const mentorId = localStorage.getItem("id")
    const mentee = await axios
      .get(`http://localhost:5001/user/me/${mentor}`)
      .then((response) => {
        const id = response.data.notifications[0].id;
      });
    const response = await axios.put(
      "http://localhost:5001/user/updateRelation", {user: mentorId, otherUserId: mentee, selectedOption: responseNotificationValue}
    );
  };

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
              {showNotification ? (
                <Bell src="bell-notification-alert.svg"></Bell>
              ) : (
                <Bell src="bell-notification.svg"></Bell>
              )}
              <Notification>
                <p>Accept username as a Mentee?</p>
                <button onClick={notificationLogic} value={"accepted"}>
                  Yes
                </button>
                <button onClick={notificationLogic} value={"rejected"}>
                  No
                </button>
              </Notification>
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
