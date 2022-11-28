import React, { useState, useEffect } from "react";
import {
  MentorSidebar,
  Section,
  TopRectangle,
  WhiteRectangle,
  Title,
} from "../styles/texts";
import Sidebar from "../components/Sidebar";
import MobileBar from "../components/MobileBar";
import mentor from "../assets/Profile/ProfileVector.png";
const Reports = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
  const medium = 700;
  return (
    <Section>
      {width >= medium ? (
        <>
          <MentorSidebar src={mentor} />

          <Sidebar />
          <WhiteRectangle>
            <TopRectangle>
              <Title>Reports</Title>
            </TopRectangle>
          </WhiteRectangle>
        </>
      ) : (
        <>
                 <Title>Reports</Title>
          <MobileBar />
        </>
      )}
    </Section>
  );
};

export default Reports;
