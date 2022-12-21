import React from "react";
import {
  DData,
  DHead,
  DBodyUnverified,
  DBodyVerified,
  DTitle,
  DPagination,
  RedBookmark,
  GreenBookmark,
  BulletPagination
} from "../styles/texts";

const Table = ({ users }) => {
  const filterUsers = () => {
    let arr = [];
    for (let i = 0; i < users.length; i++) {
      let user = {};
      user.name = users[i].userName || "No definido";
      user.age = users[i].age || 0;
      user.email = users[i].email || "No definido";
      user.role = users[i].role || "No definido";
      user.joined = new Date(users[i].joinedDate).toDateString().slice(4, 15) || "No definido";
      user.status = users[i].status;
      arr.push(user);
    }
    return arr;
  };

  const parsedList = filterUsers();

  return (
    <table>
      <DHead>
        <tr>
          <DTitle>Name</DTitle>
          <DTitle>Age</DTitle>
          <DTitle>Email</DTitle>
          <DTitle>Role</DTitle>
          <DTitle>Joined Date</DTitle>
          <DTitle>Status</DTitle>
          <DTitle></DTitle>
        </tr>
      </DHead>
      {parsedList.map((data) => {
        if (data.status == "UNVERIFIED") {
          return (
            <DBodyUnverified>
              <RedBookmark/>
              <DData>{data.name}</DData>
              <DData>
                <b>{data.age}</b>
              </DData>
              <DData>
                <b>{data.email}</b>
              </DData>
              <DData>
                <b>{data.role}</b>
              </DData>
              <DData>
                <b>{data.joined}</b>
              </DData>
              <DData>
                <img src="unverified.svg"></img>
              </DData>
              <DData>
                <img src="pencil.svg"></img>
              </DData>
            </DBodyUnverified>
          );
        }
        return (
          <DBodyVerified>
            <GreenBookmark/>
            <DData>{data.name}</DData>
            <DData>
              <b>{data.age}</b>
            </DData>
            <DData>
              <b>{data.email}</b>
            </DData>
            <DData>
              <b>{data.role}</b>
            </DData>
            <DData>
              <b>{data.joined}</b>
            </DData>
            <DData>
              <img src="verified.svg"></img>
            </DData>
            <DData>
              <img src="pencil.svg"></img>
            </DData>
          </DBodyVerified>
        );
      })}
    </table>
  );
};

export default Table;
