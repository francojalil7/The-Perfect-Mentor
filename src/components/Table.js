import React from "react";
import {
  DData,
  DHead,
  DBodyUnverified,
  DBodyVerified,
  DTitle,
  RedBookmark,
  GreenBookmark,
  GreyBookmark
} from "../styles/texts";
import styled from "styled-components";

const Table = ({ users }) => {
  const filterUsers = () => {
    let arr = [];
    for (let i = 0; i < users.length; i++) {
      let user = {};
      user.name = users[i].userName || "No definido";
      user.age = users[i].age || 0;
      user.email = users[i].email || "No definido";
      user.role = users[i].role || "No definido";
      user.joined =
        new Date(users[i].joinedDate).toDateString().slice(4, 15) ||
        "No definido";
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
          <DTitle>Name</DTitle>
          <DTitle className="age">Age</DTitle>
          <DTitle className="email">Email</DTitle>
          <DTitle className="role">Role</DTitle>
          <DTitle className="date">Joined Date</DTitle>
          <DTitle>Status</DTitle>
          <DTitle></DTitle>
        </tr>
      </DHead>
      {parsedList.map((data) => {
        if (data.status === "UNVERIFIED") {
          return (
            <DBodyUnverified>
              <RedBookmark/>
              <DData >{data.name}</DData>
              <DData>
                <b>{data.age}</b>
              </DData>
              <DData >
                <b >{data.email}</b>
              </DData>
              <DData>
                <b >{data.role}</b>
              </DData>
              <DData>
                <b>{data.joined}</b>
              </DData>
              <DData>
                <img src="unverified.svg" alt="unverified"></img>
              </DData>
              <DData>
                <img src="pencil.svg" alt="pencil"></img>
              </DData>
            </DBodyUnverified>
          );
        }
        return (
          <DBodyVerified>
            <GreenBookmark/>
            <DData >{data.name}</DData>
            <DData>
              <b>{data.age}</b>
            </DData>
            <DData >
              <b >{data.email}</b>
            </DData>
            <DData>
              <b >{data.role}</b>
            </DData>
            <DData>
              <b>{data.joined}</b>
            </DData>
            <DData>
              <img src="verified.svg" alt="verified"></img>
            </DData>
            <DData>
              <img src="pencil.svg" alt="pencil"></img>
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
