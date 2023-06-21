import React from "react";
import {
  DData,
  DHead,
  DBodyUnverified,
  DBodyVerified,
  DTitle,
  RedBookmark,
  GreenBookmark,
} from "../styles/texts";
import Modals from "../components/Modals";
import styled from "styled-components";
import Axios from "axios";
import Swal from "sweetalert";


const Table = ({ users }) => {
  // const user = useSelector((state) => state.user);

  const filterUsers = () => {
    let arr = [];
    for (let i = 0; i < users.length; i++) {
      let user = {};
      user.name = users[i].userName || "Not defined";
      user.age = users[i].age || 0;
      user.email = users[i].email || "Not defined";
      user.role = users[i].role || "Not defined";
      user.joined =
        new Date(users[i].joinedDate).toDateString().slice(4, 15) ||
        "Not defined";
      user.status = users[i].status;
      arr.push(user);
    }
    return arr;
  };

  const parsedList = filterUsers();
  console.log("parsedList", parsedList)

  //Lógica para crear la relación desde el botón de +
  // Sólo podrá ejecutarla un mentee hacia un mentor
  //Actualiza los valores de relations en la db en ambos usuarios
  const createRelation = async (data) => {
    try {
      let notifier = localStorage.getItem("_id");
      let notifierUserName = localStorage.getItem("userName")
      let search = await Axios.get(`http://localhost:5001/user/me/${data}`);
      let notified = search.data._id;
      let relation = await Axios.put(
        `http://localhost:5001/user/createRelation`,
        { notifier, notified, notifierUserName }
      ).then((response) =>
        response.data.error
          ? Swal({
              title: "Error",
              text: "An error has ocurred. Please try again later.",
              icon: "error",
            })
          : Swal({
              title: "Invite sent",
              text: "You will receive a response from the selected mentor soon.",
              icon: "success",
            })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleMatch = (data) => {
    createRelation(data.email);
  };

  return (
    <TableSection>
      <DHead>
        <tr>
          <DTitle className="nameTitle">Name</DTitle>
          <DTitle className="ageTitle">Age</DTitle>
          <DTitle className="emailTitle">Email</DTitle>
          <DTitle className="roleTitle">Role</DTitle>
          <DTitle className="dateTitle">Joined Date</DTitle>
          <DTitle className="statusTitle">Status</DTitle>
          {localStorage.getItem("isAdmin") === "true" ? (
            <DTitle className="editTitle">Edit</DTitle>
          ) : (
            <></>
          )}
          {localStorage.getItem("role") === "mentee" ? (
            <>
              <DTitle className="matchTitle">Match</DTitle>
            </>
          ) : (
            <></>
          )}
        </tr>
      </DHead>
      <tbody>
        {parsedList.map((data) => {
          if (data.status === "UNVERIFIED") {
            return (
              <DBodyUnverified key={data.email}>
                <RedBookmark />
                <DData className="name">{data.name}</DData>
                <DData className="age">{data.age}</DData>
                <DData className="email">{data.email}</DData>
                <DData className="role">{data.role}</DData>
                <DData className="date">{data.joined}</DData>
                <DData className="status">
                  <img src="unverified.svg" alt="unverified"></img>
                </DData>
                {localStorage.getItem("isAdmin") === "true" ? (
                  <DData className="edit">
                    <Modals props={data} />
                  </DData>
                ) : (
                  <></>
                )}
                {localStorage.getItem("role") === "mentee" ? (
                  <>
                    <DData className="match">
                      <img
                        src="match.svg"
                        alt="pencil"
                        onClick={() => handleMatch(data)}
                      ></img>
                    </DData>
                  </>
                ) : (
                  <></>
                )}
              </DBodyUnverified>
            );
          }
          return (
            <DBodyVerified key={data.email}>
              <GreenBookmark />
              <DData className="name">{data.name}</DData>
              <DData className="age">{data.age}</DData>
              <DData className="email">{data.email}</DData>
              <DData className="role">{data.role}</DData>
              <DData className="date">{data.joined}</DData>
              <DData className="status">
                <img src="verified.svg" alt="verified"></img>
              </DData>
              {localStorage.getItem("isAdmin") === "true" ? (
                <DData className="edit">
                  <Modals props={data} />
                </DData>
              ) : (
                <></>
              )}
              {localStorage.getItem("role") === "mentee" ? (
                <>
                  <DData className="match">
                    <img
                      src="match.svg"
                      alt="pencil"
                      onClick={() => handleMatch(data)}
                    ></img>
                  </DData>
                </>
              ) : (
                <></>
              )}
            </DBodyVerified>
          );
        })}
      </tbody>
    </TableSection>
  );
};

const TableSection = styled.table`
  margin-top: 110px;
  border-collapse: separate;
  box-sizing: border-box;
  text-indent: initial;
  border-spacing: 1px;
  display: block;
  overflow-x: auto;

  @media only screen and (max-width: 1400px) {
    max-width: 850px !important;
  }

  @media only screen and (max-width: 1080px) {
    width: 700px !important;
    margin-top: 110px;
  }

  @media only screen and (max-width: 900px) {
    width: 500px;
  }
`;

export default Table;
