import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  MentorSidebar,
  PagesSection,
  TopRectangle,
  WhiteRectangle,
  Title,
  SubTitle,
} from "../styles/texts";
import Sidebar from "../components/Sidebar";
import MobileBar from "../components/MobileBar";
import mentor from "../assets/Profile/ProfileVector.png";
import figure from "../assets/Stadistics/Group 91.png";
import icon from "../assets/Stadistics/Saly-30.png";
import Chart from "../components/Chart";

const Stadistics = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
  const medium = 700;
  return (
    <PagesSection>
      {width >= medium ? (
        <>
          <MentorSidebar src={mentor} />

          <Sidebar />
          <WhiteRectangle>
            <TopRectangle>
              <Title>Stadistics</Title>
              <SubTitle>Cheeck all the activity of your page</SubTitle>
            </TopRectangle>
            <Screen>
              <Logo src={icon} />
              <Figure src={figure} />

              <div className="small1">
                <h6>TOTAL OF USERS</h6>
                <DashedLine />
                <p>Mentees</p>
                <Line />
                <p>Mentors</p>
                <Line />
                <p>Total users</p>
              </div>
              <div className="small2">
                <h6>NEW USERS</h6>
                <DashedLine />
                <p>New Mentees</p>
                <Line />
                <p>New Mentors</p>
                <Line />
                <p>Total users</p>
              </div>

              <div className="big">
                {" "}
                <h6>SIGN UPS PER MONTHS</h6>
                <LargeDashedLine />
                <Chart />
              </div>
            </Screen>
          </WhiteRectangle>
        </>
      ) : (
        <>
          <Header>
            <div>
              <Title>Stadistics</Title>
              <SubTitle>Cheeck all the activity of your page</SubTitle>
            </div>
            <Figure src={figure} />
          </Header>
          <MobileScreen>
            <div className="small1">
              <h6>TOTAL OF USERS</h6>
              <DashedLine />
              <p>Mentees</p>
              <Line />
              <p>Mentors</p>
              <Line />
              <p>Total users</p>
            </div>
            <div className="small2">
              <h6>NEW USERS</h6>
              <DashedLine />
              <p>New Mentees</p>
              <Line />
              <p>New Mentors</p>
              <Line />
              <p>Total users</p>
            </div>

            <div className="big">
              {" "}
              <h6>SIGN UPS PER MONTHS</h6>
              <LargeDashedLine />
              <Chart />
            </div>
          </MobileScreen>

          <MobileBar />
        </>
      )}
    </PagesSection>
  );
};

const Figure = styled.img`
  position: relative;
  width: 309px;
  height: 309px;
  left: 760px;
  bottom: 952px;

  @media only screen and (max-width: 1400px) {
    left: 490px;
  }

  @media only screen and (max-width: 1080px) {
    left: 330px;
  }
  @media only screen and (max-width: 700px) {
    position: relative;
    width: 225px;
    height: 225px;
    top: 4px !important;
    left: -50px;
  }
`;
const Logo = styled.img`
  position: absolute;
  width: 198px;
  height: 202px;
  left: 600px;
  top: -110px;
  @media only screen and (max-width: 1400px) {
    left: 390px;
  }
  @media only screen and (max-width: 1400px) {
    display: none;
  }
`;

const MobileScreen = styled.div`
  position: relative;
  width: 93%;
  height: 667px;
  top: 20px;
  padding-top: 109px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;

  h6 {
    font-style: normal;
    font-weight: 700;
    font-family: "Heebo";
    font-size: 15px;
    color: #444444;
    height: 0px;
  }

  p {
    font-family: "Heebo";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 26px;
    line-height: 100%;
    height: 2px;
    color: #444444;
  }

  .small1 {
    grid-column: 1 / 2;
    grid-row: 1;
    background-color: #f5f6f7;
    border: 1px solid #f5f6f7;
    border-radius: 20px;
    height: 197px;
    width: 480px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    padding-left: 15px;
    justify-self: center;
  }
  .small2 {
    grid-column: 2 / 4;
    grid-row: 1;
    background-color: #f5f6f7;
    border: 1px solid #f5f6f7;
    border-radius: 20px;
    height: 197px;
    width: 480px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    padding-left: 15px;
    justify-self: center;
  }
  .big {
    grid-column: 1 / 4;
    grid-row: 2 / 4;
    background-color: #f5f6f7;
    width: 1018px;
    height: 423px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: 1px solid #f5f6f7;
    border-radius: 20px;
    padding-left: 15px;
    justify-self: center;
  }

  background: #ffffff;
  mix-blend-mode: normal;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;

  @media only screen and (max-width: 700px) {
    width: 355px !important;
    /* height: 963px !important; */
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    padding-top: 50px;

    h6 {
      font-weight: 900;
      font-family: "Heebo";
      font-size: 14px;
      color: #444444;
      line-height: 22px;
      height: 0px;
      margin-top: 10px;
    }

    p {
      font-family: "Heebo";
      font-weight: 700;
      font-size: 12px;
      line-height: 20px;
      line-height: 100%;
      height: 2px;
      color: #444444;
    }

    .small1 {
      height: 141px;
      width: 142px;
    }
    .small2 {
      height: 141px;
      width: 142px;
    }
    .big {
      width: 315px;
      height: 464px;
    }
  }
`;

const Screen = styled.div`
  position: relative;
  width: 93%;
  height: 710px;
  left: 52px;
  top: 150px;
  padding-top: 109px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;

  h6 {
    font-style: normal;
    font-weight: 700;
    font-family: "Heebo";
    font-size: 15px;
    color: #444444;
    height: 0px;
  }

  p {
    font-family: "Heebo";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 26px;
    line-height: 100%;
    height: 2px;
    color: #444444;
  }

  .small1 {
    grid-column: 1 / 2;
    grid-row: 1;
    background-color: #f5f6f7;
    border: 1px solid #f5f6f7;
    border-radius: 20px;
    height: 197px;
    width: 480px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    padding-left: 15px;
    justify-self: center;
  }
  .small2 {
    grid-column: 2 / 4;
    grid-row: 1;
    background-color: #f5f6f7;
    border: 1px solid #f5f6f7;
    border-radius: 20px;
    height: 197px;
    width: 480px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    padding-left: 15px;
    justify-self: center;
  }
  .big {
    grid-column: 1 / 4;
    grid-row: 2 / 4;
    background-color: #f5f6f7;
    width: 1018px;
    height: 470px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: 1px solid #f5f6f7;
    border-radius: 20px;
    padding-left: 15px;
    justify-self: center;
  }

  background: #ffffff;
  mix-blend-mode: normal;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;

  @media only screen and (max-width: 1400px) {
    width: 780px !important;
    left: 10px;

    .small1 {
      height: 197px;
      width: 340px;
      margin-left: 0px !important;
    }
    .small2 {
      height: 197px;
      width: 340px;
      margin-left: 0px !important;
    }
    .big {
      width: 750px;
    }
  }

  @media only screen and (max-width: 1080px) {
    width: 580px !important;
    padding-right: 20px;

    .small1 {
      height: 197px;
      width: 230px;
    }
    .small2 {
      height: 197px;
      width: 230px;
    }
    .big {
      width: 540px;
    }
  }

  @media only screen and (max-width: 700px) {
    width: 355px !important;
    height: 563px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;

    padding-top: 50px;
    h6 {
      font-weight: 900;
      font-family: "Heebo";
      font-size: 14px;
      color: #444444;
      line-height: 22px;
      height: 0px;
      margin-top: 10px;
    }

    p {
      font-family: "Heebo";
      font-weight: 700;
      font-size: 12px;
      line-height: 20px;
      line-height: 100%;
      height: 2px;
      color: #444444;
    }

    .small1 {
      height: 141px;
      width: 152px;
    }
    .small2 {
      height: 141px;
      width: 152px;
    }
    .big {
      width: 315px;
      height: 284px;
    }
  }
`;

const Line = styled.div`
  border: 0.5px solid rgba(68, 68, 68, 0.3);
  max-width: 450px;
  margin-top: 5px;

  @media only screen and (max-width: 700px) {
    width: 122px !important;
  }
`;

const DashedLine = styled.div`
  border: 0.5px dashed rgba(68, 68, 68, 1);
  max-width: 450px;

  @media only screen and (max-width: 700px) {
    width: 122px !important;
  }
`;

const LargeDashedLine = styled.div`
  border: 0.5px dashed rgba(68, 68, 68, 1);
  max-width: 968px;

  @media only screen and (max-width: 700px) {
    width: 285px !important;
  }
`;

const Header = styled.div`
  width: 100%;
  background-color: #bfd732;
  height: 229px;
  border-bottom-right-radius: 45px;
  display: flex;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
  }
`;

export default Stadistics;
