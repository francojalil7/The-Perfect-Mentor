import React, { useState, useEffect } from "react";
import {
  PagesSection,
  Title,
  SubTitle,
  MobileScreen,
  DashboardSearch,
  DashboardFilter,DashboardInput, AgeButton,FilterButton,StatusButton, ButtonTextAge, ButtonTextStatus, ButtonTextFilter
} from "../styles/texts";
import styled from "styled-components";
import Dashboard from "./Dashboard";
import MobileBar from "../components/MobileBar";
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
        <Dashboard/>
      
        </>
      ) : (
        <>
        <UsersHeader>
          <div>
            <Title>Users</Title>
            <SubTitle>View all the users</SubTitle>
          </div>
        
        </UsersHeader>
        <MobileScreen>
          
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
       
        </MobileScreen>

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
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
  }
`;
export default Users;