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
} from "../styles/texts";
import styled from "styled-components";
import Dashboard from "./Dashboard";
import MobileBar from "../components/MobileBar";
import MobileUsersInfo from "../components/MobileUsersInfo";
import image1 from "../assets/Users/doodle-4 1.png";
import image2 from "../assets/Users/doodle-5 1.png";
const Users = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
  const medium = 700;

  return (
    <PagesSection>
      {width >= medium ? (
        <>
          <Dashboard />
        </>
      ) : (
        <>
          <UsersHeader>
            <div>
            </div>
          </UsersHeader>

          <MobileScreenTable>
            <Title1>Users</Title1>
            <SubTitle1>View all the users</SubTitle1>
            <Image1 src={image1} />
            <Image2 src={image2} />
            <DashboardSearch>
              <DashboardInput placeholder="Search"></DashboardInput>
            </DashboardSearch>
            {/* <Ellipse src="ellipse.svg" /> */}

            <DashboardFilter>
              <FilterButton>
                <ButtonTextFilter>Filters</ButtonTextFilter>
              </FilterButton>
              <AgeButton>
                <ButtonTextAge>Age</ButtonTextAge>
              </AgeButton>
              <StatusButton>
                <ButtonTextStatus>Status</ButtonTextStatus>
              </StatusButton>
            </DashboardFilter>

            <MobileUsersInfo />
          </MobileScreenTable>

          <MobileBar />
        </>
      )}
    </PagesSection>
  );
};

const UsersHeader = styled.div`
  width: 100%;
  background-color: #bfd732;
  height: 137px;
  border-bottom-right-radius: 45px;
  display: flex;
  justify-content: flex-start;

  div {
    display: flex;
    flex-direction: column;
    height: 137px;
  }
`;

const Image1 = styled.img`
  position: absolute;
  left: 120px;
  top: -160px;
  width: 256px;
  height: 256px;
`;
const Image2 = styled.img`
  position: absolute;
  left: 140px;
  top: -160px;
  width: 140px;
  height: 140px;
`;

const Title1 = styled.h2`
  position: absolute;
  left: -65px;
  top: -160px;
  font-family: "Heebo";
  font-style: normal;

  color: #444444;
  margin-left: 80px;
  mix-blend-mode: normal;
  height: 0px;
  font-size: 30px;
  font-weight: 800;
  line-height: 44px;
  margin-top: 50px;
`;

const SubTitle1 = styled.h2`
  position: absolute;
  left: -65px;
  top: -87px;
  font-family: "Heebo";
  font-style: normal;
  font-weight: 400;
  color: #444444;
  margin-left: 80px;
  margin-bottom: 75px;
  height: 0px;
  font-size: 14px;
  line-height: 15px;
  width: 150px;
  margin-top: 15px;


`;

export default Users;
