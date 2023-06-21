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
import schedule from "node-schedule";
import swal from "sweetalert";

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
  const [showNotification, setShowNotification] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);

  const dispatch = useDispatch();

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    const fetchData = async () => {
      setRole(localStorage.getItem("role"));
      if (localStorage.getItem("role") === "mentee") {
        await dispatch(getMentorsUsers());
      }
      if (localStorage.getItem("role") === "mentor") {
        await dispatch(getMenteesUsers());
      }
    };

    fetchData();
  }, [search]);

  const mentees = useSelector((state) => state.menteesUsers);
  const mentors = useSelector((state) => state.mentorsUsers);

  useEffect(() => {
    dispatch(getMenteesUsers());
    dispatch(getMentorsUsers());
  }, [dispatch]);
  
  function useInput() {
    function onChange({ target }) {
      setValue(target.value);
    }
    return { onChange, value };
  }
  const searcher = useInput();

  const handleSearch = function (e) {
    if (filter === "") {
      alert("¡Debe seleccionar un filtro!");
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

  //-------Inicio Lógica notificaciones------

  //La función "notificationStack" consulta si el mentor tiene una notificación que está pendiente de ser mostrada y lo muestra en el frontend.
  //Esta función se ejecuta cada 1 minuto de manera persistente para chequear si existe una notificación pendiente
  const notificationStack = async () => {
    let mentor = localStorage.getItem("email");
    let search = await axios
      .get(`http://localhost:5001/user/me/${mentor}`)
      .then((response) => {
        const pendingValue = response.data.notifications[0].pending;
        const userName = response.data.relations[0].userName;
        //Setea el valor de pendingNotification en true/false, según exista o no una notificación pendiente
        setPendingNotification(pendingValue);
        //Setea el valor del userName a mostrar en la notificación (el mentee que quiere conectar, y se le muestra al mentor)
        setToNotifyUser(userName);
      });
      if (pendingNotification) {
        //Estado para lanzar la campanita con botón rojo si existe una notificación
        setShowNotification(true);
      }
  };

  // Ejecución de la función notifStack cada 60 secs
  const ScheduledJob = schedule.scheduleJob("*/1 * * * *", async () => {
    notificationStack();
  });

  //La función "openNotificationDiv" se ejecuta al hacer click sobre la campanita de notificación con botón rojo
  //Abre el div de notificación con el nombre del username a conectar
  //El div se posicionará sobre la campanita, ahora sin botón rojo
  const openNotificationDiv = () => {
    setOpenNotification(true);
  };

  //La función "notificationLogic" captura el valor del botón seleccionado para aceptar o rechazar la solicitud de relación
  const notificationLogic = (e) => {
    notificationResponse(e.target.value);
  };

  //La función notificationResponse tiene la finalidad de actualizar en la db los valores de en user.relations

  //Actualiza los valores en la db, cierra el div, cambia la imagen de la campanita
  const notificationResponse = async (optionSelected) => {
    const mentorEmail = localStorage.getItem("email");

    // Obtener menteeId mediante una solicitud GET y esperar la respuesta
    const usersData = await axios.get(
      `http://localhost:5001/user/me/${mentorEmail}`
    );
    const mentorId = usersData.data._id;
    const menteeId = usersData.data.relations[0].id;

    // Realizar la solicitud PUT con los datos actualizados
    const response = await axios.put(
      "http://localhost:5001/user/updateRelation",
      { user: mentorId, otherUserId: menteeId, selectedOption: optionSelected }
    )
    //Cierra el div y cambia la imagen de la campanita sin botón rojo
    setOpenNotification(false);
    setShowNotification(false);
  };

  //-------Fin Lógica notificaciones------

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
              {/* Bell Logic */}
              {showNotification ? (
                <Bell
                  onClick={openNotificationDiv}
                  src="bell-notification-alert.svg"
                ></Bell>
              ) : (
                <Bell src="bell-notification.svg"></Bell>
              )}
              {/* Notification Div Logic */}
              {openNotification ? (
                <Notification>
                  <p>Accept {toNotifyUser} as a Mentee?</p>
                  <SearchButton onClick={notificationLogic} value={"accepted"}>
                    Accept
                  </SearchButton>
                  {"   "}
                  <SearchButton onClick={notificationLogic} value={"rejected"}>
                    Decline
                  </SearchButton>
                </Notification>
              ) : (
                <>
                </>
              )}
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

              <Table
                users={
                  localStorage.getItem("role") === "mentee" ? mentors : mentees
                }
              ></Table>
              <DPagination>
                <Pagination
                  usersPerPage={usersPerPage}
                  totalUsers={
                    (localStorage.getItem("role") === "mentee") === "mentee"
                      ? mentors.length
                      : mentees.length
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
