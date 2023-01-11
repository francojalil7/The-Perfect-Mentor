import React from "react";
import {
  DData,
  DHead,
  DBodyUnverified,
  DBodyVerified,
  DTitle,
  RedBookmark,
  GreenBookmark,
  GreyBookmark,
} from "../styles/texts";
import styled from "styled-components";

const Table = ({ users }) => {
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
          <DTitle className="editTitle">Edit</DTitle>
          <DTitle className="matchTitle">Match</DTitle>
        </tr>
      </DHead>
      {parsedList.map((data) => {
        if (data.status === "UNVERIFIED") {
          return (
            <DBodyUnverified>
              <RedBookmark />
              <DData className="name">{data.name}</DData>
              <DData  className="age">{data.age}</DData>
              <DData  className="email">{data.email}</DData>
              <DData  className="role">{data.role}</DData>
              <DData  className="date">{data.joined}</DData>
              <DData  className="status">
                <img src="unverified.svg" alt="unverified"></img>
              </DData>
              <DData  className="edit">
                <img src="Group 6.png" alt="pencil"></img>
              </DData>
              <DData  className="match">
                <img  src="match.svg" alt="pencil"></img>
              </DData>
            </DBodyUnverified>
          );
        }
        return (
          <DBodyVerified>
            <GreenBookmark />
            <DData className="name">{data.name}</DData>
            <DData  className="age">{data.age}</DData>
              <DData  className="email">{data.email}</DData>
              <DData  className="role">{data.role}</DData>
              <DData  className="date">{data.joined}</DData>
            <DData className="status">
              <img src="verified.svg" alt="verified"></img>
            </DData>
            <DData className="edit">
            <img src="Group 6.png" alt="pencil"></img>
            </DData>
            <DData className="match">
            <img src="match.svg" alt="pencil"></img>
            </DData>
          </DBodyVerified>
        );
      })}
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
