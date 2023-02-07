import React, { useState, useEffect } from "react";
import {
  PagesSection,
  MobileScreenTable,
  DashboardSearch,
  DashboardInput,
  SearchButton,
  DPagination,
  Ellipse,
  UsersHeader,
  Image1,
  Image2,
  Title1,
  SubTitle1,
} from "../styles/texts";

import MobileBar from "../components/MobileBar";
import image1 from "../assets/Users/doodle-4 1.png";
import image2 from "../assets/Users/doodle-5 1.png";


const Reports = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
 
  }, []);
  const medium = 700;

  function useInput() {
    // function onChange({ target }) {
    //   setValue(target.value);
    // }
    // return { onChange, value };
  }
  const searcher = useInput();

  const handleSearch = function () {
    // if (filter === "") {
    //   alert("debe seleccionar un filtro");
    // }
    // dispatch(getUsersFilter({ value, filter }));
    // setSearch("buscar");
  };
  return (
    <PagesSection /*height={pageHeight}*/>
      {width >= medium ? (
        <>
         
        </>
      ) : (
        <>
          <UsersHeader>
            <div></div>
          </UsersHeader>

          <MobileScreenTable>
  
            <Title1>Reports</Title1>
            <SubTitle1>Check the reports of the users</SubTitle1>
       
            <Image1 src={image1} />
            <Image2 src={image2} />
            <DashboardSearch>
              <DashboardInput
                placeholder="Search for id"
                // {...searcher}
              ></DashboardInput>
              <SearchButton onClick={handleSearch}>Go</SearchButton>
            </DashboardSearch>
            <Ellipse src="ellipse.svg" />

   


           {/* <MobileUsersInfo users={currentUsers} /> */}

            
          </MobileScreenTable>
          <DPagination>
            {/* <Pagination
              usersPerPage={usersPerPage}
              totalUsers={users.length}
              paginate={paginate}
            ></Pagination> */}
          </DPagination>

          <MobileBar props="reports"/>
        </>
      )}
    </PagesSection>
  );
};


export default Reports;
