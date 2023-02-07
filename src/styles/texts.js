import styled from "styled-components";

// genereal elements
export const Section = styled.div`
  background-color: #bfd732;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 700px) {
    justify-content: center;
    align-items: center;
  }
`;

export const PagesSection = styled.div`
  background-color: #bfd732;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 700px) {
    background-color: #f5f6f7 !important;
    height: ${(props) => props.height + "px"};
  }
`;
export const Rectangle = styled.div`
  display: flex;
  color: #444444;
  box-sizing: border-box;
  width: 886px;
  height: 514px;
  mix-blend-mode: normal;
  border: 2px solid #444444;
  border-radius: 40px;
  justify-content: flex-end;
  align-items: center;
  margin-top: 100px;
  section {
    display: flex;
    flex-direction: column;
    margin-right: 50px;
  }

  @media only screen and (max-width: 700px) {
    width: 100%;
    flex-direction: column !important;
    border: 2px solid #bfd732;
  }
`;

export const SmallRectangle = styled.div`
  display: flex;
  align-items: center;
  color: #444444;
  box-sizing: border-box;
  width: 886px;
  height: 479px;
  mix-blend-mode: normal;
  border: 2px solid #444444;
  border-radius: 40px;

  @media only screen and (max-width: 975px) {
    width: 700px;
    height: 400px;
  }

  @media only screen and (max-width: 700px) {
    width: 315px;
    height: 361px;
  }

  aside {
    position: relative;
    top: 250px;
    right: 270px;

    @media only screen and (max-width: 975px) {
      position: relative;
      top: 310px;
      right: 300px;
    }

    @media only screen and (max-width: 700px) {
      display: none;
    }
  }

  section {
    position: relative;
    left: 120px;
    bottom: 30px;

    @media only screen and (max-width: 975px) {
      position: relative;
      left: 380px;
      bottom: 10px;
    }

    @media only screen and (max-width: 700px) {
      left: 0px;
    }
  }
`;

export const Mentor = styled.img`
  height: 133px;
  width: 248px;

  @media only screen and (max-width: 700px) {
    height: 107px;
    width: 200px;
    margin-right: 50px;
    margin-top: 50px;
  }
`;

export const Button = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  width: 323px;
  height: 55px;
  color: #444444;
  box-sizing: border-box;
  mix-blend-mode: normal;
  border: 2px solid #444444;
  border-radius: 40px;
  margin-top: 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20.56px;

  @media only screen and (max-width: 975px) {
    width: 250px !important;
    margin-left: 20px;
    mix-blend-mode: normal;
    border: 1px solid #444444;
    border-radius: 40px;
  }
  @media only screen and (max-width: 700px) {
    width: 265px !important;
    margin-left: 20px;
    mix-blend-mode: normal;
    border: 1px solid #444444;
    border-radius: 40px;
  }
`;

export const WhiteRectangle = styled.div`
  position: absolute;
  width: 1128px;
  /* height: 980px; */
  left: 272px;
  top: 40px;
  background: #ffffff;
  box-shadow: 0px 38px 15px rgba(0, 19, 51, 0.01),
    0px 21px 13px rgba(0, 19, 51, 0.05), 0px 9px 9px rgba(0, 19, 51, 0.09),
    0px 2px 5px rgba(0, 19, 51, 0.1), 0px 0px 0px rgba(0, 19, 51, 0.1);
  border-radius: 35px;

  height: ${(props) => (props.mode !== "chat" ? "980px" : "750px")};

  @media only screen and (max-width: 700px) {
    display: none;
  }

  @media only screen and (max-width: 1400px) {
    width: 800px !important;

    height: ${(props) => (props.mode !== "chat" ? "984px" : "750px")};
  }

  @media only screen and (max-width: 1080px) {
    width: 620px !important;
  }
`;

export const AdminProfileWhiteRectangle = styled.div`
  position: absolute;
  width: 1128px;
  left: 272px;
  top: 40px;
  background: #ffffff;
  box-shadow: 0px 38px 15px rgba(0, 19, 51, 0.01),
    0px 21px 13px rgba(0, 19, 51, 0.05), 0px 9px 9px rgba(0, 19, 51, 0.09),
    0px 2px 5px rgba(0, 19, 51, 0.1), 0px 0px 0px rgba(0, 19, 51, 0.1);
  border-radius: 35px;

  height:640px;

  @media only screen and (max-width: 700px) {
    display: none;
  }

  @media only screen and (max-width: 1400px) {
    width: 800px !important;
  }

  @media only screen and (max-width: 1080px) {
    width: 620px !important;
  }
`;

export const TopRectangle = styled.div`
  position: absolute;
  width: 1128px;
  display: flex;
  justify-content: center;
  background: #f5f6f7;
  border-radius: 35px 35px 0px 0px;
  display: flex;
  flex-direction: column;

  height: ${(props) => (props.mode !== "chat" ? "184px" : "100px")};

  @media only screen and (max-width: 1400px) {
    width: 800px !important;
    display: flex;
    justify-content: center;
  }

  @media only screen and (max-width: 700px) {
    display: none;
  }
  @media only screen and (max-width: 1080px) {
    width: 620px !important;
  }
`;

// profile, este se puede unificar con otro
export const ProfileTitle = styled.h2`
  font-family: "Heebo";
  font-style: normal;
  font-weight: 500;
  font-size: 50px;
  line-height: 73px;
  color: #444444;
  margin-top: 40px;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 700px) {
    font-style: bold;
    font-size: 35px;
    line-height: 44px;
    font-weight: 700;
  }
`;

// onBoarding, SignIn, SignUp
export const GreyButtonInside = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 323px;
  height: 55px;
  color: white;
  background: #444444;
  mix-blend-mode: normal;
  border-radius: 40px;
  margin-top: 10px;

  @media only screen and (max-width: 975px) {
    width: 250px !important;
    margin-left: 20px;
  }
  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

export const GreyButtonOutside = styled.div`
  display: none;

  @media only screen and (max-width: 700px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 315px;
    height: 55px;
    color: white;
    background: #444444;
    mix-blend-mode: normal;
    border-radius: 40px;
    margin-top: 10px;
    position: relative;
    top: 80px;
    left: 0;
  }
`;

export const H2 = styled.h2`
  font-family: "Heebo";
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  height: 30px;
  margin-bottom: 40px;
  color: #444444;
  mix-blend-mode: normal;

  @media only screen and (max-width: 975px) {
    font-size: 32px !important;
    margin-left: 30px;
    margin-bottom: 25px;
  }
  @media only screen and (max-width: 700px) {
    font-size: 30px !important;
    margin-top: 70px;
    margin-left: 30px;
  }
`;

export const H3 = styled.h3`
  font-family: "Heebo";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 44px;
  color: #444444;
  mix-blend-mode: normal;
  height: 20px;
  @media only screen and (max-width: 975px) {
    font-size: 30px !important;
    margin-left: 30px;
  }
  @media only screen and (max-width: 700px) {
    font-size: 30px !important;
    margin-left: 30px;
  }
`;
export const Line = styled.div`
  border: 1px dashed #444444;
  max-width: 323px;
  margin-bottom: 30px;

  @media only screen and (max-width: 975px) {
    max-width: 250px;
    margin-left: 30px;
  }
  @media only screen and (max-width: 700px) {
    max-width: 285px;
    margin-left: 10px;
  }
`;

export const VerticalLine = styled.img`
  position: relative;
  top: 10px;
  left: 70px;
  height: 400px;

  @media only screen and (max-width: 975px) {
    height: 340px;
    left: 370px;
  }
  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

export const Text = styled.p`
  font-family: "Heebo";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #444444;
  mix-blend-mode: normal;
  @media only screen and (max-width: 975px) {
    margin-left: 30px;
  }
  @media only screen and (max-width: 700px) {
    margin-left: 30px;
  }
`;

export const Input = styled.input`
  background-color: #bfd732;
  border: none;
  :focus {
    outline: none;
  }
  :active {
    outline: none;
  }
`;

export const ButtonOnBoardingGrey = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 315px;
  height: 55px;
  color: white;
  background: #444444;
  mix-blend-mode: normal;
  border-radius: 40px;
  margin-top: 50px;
  cursor: pointer;
  @media only screen and (max-width: 700px) {
    margin-top: 240px !important;
  }
  @media only screen and (max-width: 320px) {
    width: 300px;
  }
`;

export const ButtonOnBoardingGreen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 315px;
  height: 55px;
  color: #444444;
  box-sizing: border-box;
  mix-blend-mode: normal;
  border: 2px solid #444444;
  border-radius: 40px;
  margin-top: 20px;
  cursor: pointer;

  @media only screen and (max-width: 700px) {
    margin-top: 20px !important;
  }

  @media only screen and (max-width: 320px) {
    width: 300px;
  }
`;

export const ErrorMessage = styled.div`
  display: block;
  color: red;
  font-size: 12px;
  margin-top: 5px;

  @media only screen and (max-width: 700px) {
    margin-left: 25px;
  }
`;

export const MentorSidebar = styled.img`
  position: absolute;
  top: 81px;
  left: 30px;
  height: 107;
  width: 200;
`;

//Dashboard & Table

export const Title = styled.h2`
  font-family: "Heebo";
  font-style: normal;
  font-weight: 500;
  font-size: 50px;
  line-height: 73px;
  color: #444444;
  margin-left: 80px;
  mix-blend-mode: normal;
  height: 0px;

  @media only screen and (max-width: 700px) {
    font-size: 30px;
    font-weight: 800;
    line-height: 44px;

    margin-top: ${(props) => (props.mode !== "chat" ? "50px" : "20px")};
    margin-left: ${(props) => (props.mode !== "chat" ? "80px" : "0px")};
  }
`;

export const SubTitle = styled.h2`
  font-family: "Heebo";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  color: #444444;
  margin-left: 80px;
  margin-bottom: 75px;
  height: 0px;

  @media only screen and (max-width: 700px) {
    font-size: 14px;
    line-height: 15px;
    width: 150px;
    margin-top: 15px;
    margin-left: ${(props) => (props.mode !== "chat" ? "80px" : "0px")};
  }
`;

export const DHead = styled.thead`
  width: 1018px;
  height: 40px;
  flex-direction: row;
  background: #f5f6f7;
  mix-blend-mode: normal;
  border-radius: 20px 20px 0px 0px;
  display: flex;
  align-items: left;
`;

export const DTitle = styled.th`
  position: relative;
  top: 9px;
  font-family: "Heebo";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #444444;
  mix-blend-mode: normal;
  text-align: left;
  padding-left: 10px;
`;

export const DBodyUnverified = styled.tr`
  display: flex;
  width: 1018px;
  height: 60px;
  background: rgba(230, 21, 135, 0.1);
  mix-blend-mode: normal;
  justify-content: space-between;
  margin: 2px;
`;

export const DBodyVerified = styled.tr`
  display: flex;
  width: 1018px;
  height: 60px;
  background: #39b54a1a;
  mix-blend-mode: normal;
  margin: 2px;
`;

export const DData = styled.td`
  font-family: "Heebo";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #444444;
  mix-blend-mode: normal;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

export const DPagination = styled.div`
  position: absolute;
  width: 1018px;
  height: 40px;
  left: 26px;
  top: 710px;
  background: #f5f6f7;
  mix-blend-mode: normal;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: left;

  @media only screen and (max-width: 1400px) {
    width: 850px;
    left: 17px;
  }

  @media only screen and (max-width: 1080px) {
    width: 680px;
    left: 0px !important;
  }
  @media only screen and (max-width: 700px) {
    position: relative;
    width: 380px !important;
    background: transparent;
    top: -30px;
    left: 0px !important;
  }
`;

export const RedBookmark = styled.div`
  position: relative;
  width: 4px;
  height: 40px;
  left: 0px;
  top: 10px;
  background: #e61587;
  border-radius: 0px 10px 10px 0px;
`;

export const GreenBookmark = styled.div`
  position: relative;
  width: 4px;
  height: 40px;
  left: 0px;
  top: 10px;
  background: #39b54a;
  border-radius: 0px 10px 10px 0px;
`;

export const GreyBookmark = styled.div`
  position: relative;
  width: 90px;
  height: 10px;
  left: 0px;
  top: 30px;
  background-color: red;
  border-radius: 0px 10px 10px 0px;
`;

export const MobileScreen = styled.div`
  position: relative;
  width: 93%;
  height: 667px;
  top: 20px;
  padding-top: 109px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  flex-direction: column;

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
    display: grid;
    grid-template-columns: ${(props) =>
      props.mode !== "chat" ? "repeat(2, 1fr)" : "repeat(1, 1fr)"};
    grid-gap: 10px;
    padding-top: 10px;
    top: 10px;
    padding-bottom: 80px;

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
    .class1 {
      padding-left: 65px !important;
    }
    .class2 {
      padding-left: 50px;
    }
    .class3 {
      padding-left: 40px;
    }
    .class4 {
      padding-left: 35px;
    }
    .class5 {
      padding-left: 54px;
    }
  }
`;

export const MobileScreenTable = styled.div`
  position: relative;
  width: 380px;
  /* height: 1000vh; */
  top: 20px;
  padding-top: 109px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  mix-blend-mode: normal;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;

  .usersinfo {
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    align-self: center;
    /* padding: 20px 20px 20px 20px; */
  }

  p {
    font-family: "Heebo";
    font-weight: 700;
    font-size: 12px;
    line-height: 20px;

    height: 2px;
    color: #444444;
  }
`;

export const DashboardSearch = styled.div`
  position: absolute;
  width: 513px;
  height: 55px;
  left: 20px;
  top: 20px;
  background: #ffffff;
  mix-blend-mode: normal;
  border-radius: 40px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  border: none;
  outline: none;
  ::placeholder {
    color: #444444;
    right: 100px;
  }

  @media only screen and (max-width: 700px) {
    width: 315px !important;
    top: -50px !important;
    left: 30px !important;
  }
`;

export const DashboardInput = styled.input`
  position: relative;
  width: 400px;
  height: 21px;
  left: 60px;
  top: 10px;
  font-family: "Heebo";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  outline: none;
  border: 0;
  color: #444444;
  mix-blend-mode: normal;

  @media only screen and (max-width: 700px) {
    width: 200px !important;
    top: 13px;
  }
`;

export const DashboardFilter = styled.div`
  position: absolute;
  width: 319px;
  height: 55px;
  left: 550px;
  top: 20px;
  mix-blend-mode: normal;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;

  @media only screen and (max-width: 700px) {
    width: 315px !important;
    height: 50px !important;
    left: 30px !important;
  }
`;

export const FilterButton = styled.button`
  box-sizing: border-box;
  position: absolute;
  width: 128px;
  height: 40px;
  left: 10px;
  top: 9px;
  mix-blend-mode: normal;
  border: 1px solid rgba(68, 68, 68, 0.15);
  border-radius: 40px;
  background-color: ${(props) =>
    props.mode === "" ? "grey" : "rgba(68, 68, 68, 0.15)"};

  @media only screen and (max-width: 700px) {
    top: 4px;
    width: 80px !important;
    left: 10px;
    border: none;
    background-color: transparent;
    background-color: ${(props) =>
      props.mode === "" ? "grey" : "rgba(68, 68, 68, 0.15)"};
  }
`;

export const AgeButton = styled.button`
  box-sizing: border-box;
  position: absolute;
  width: 75px;
  height: 40px;
  left: 142px;
  top: 9px;
  mix-blend-mode: normal;
  border: 1px solid rgba(68, 68, 68, 0.15);
  border-radius: 40px;
  background-color: ${(props) =>
    props.mode === "role" ? "grey" : "rgba(68, 68, 68, 0.15)"};
  @media only screen and (max-width: 700px) {
    top: 4px;
    left: 122px;
    background-color: ${(props) =>
      props.mode === "role" ? "grey" : "rgba(68, 68, 68, 0.15)"};
  }
`;

export const StatusButton = styled.button`
  position: relative;
  width: 92px;
  height: 40px;
  left: 220px;
  top: 9px;
  border: solid 1px rgba(68, 68, 68, 0.15);
  mix-blend-mode: normal;
  border-radius: 40px;
  background-color: ${(props) =>
    props.mode === "userName" ? "grey" : "rgba(68, 68, 68, 0.15)"};

  @media only screen and (max-width: 700px) {
    top: 4px;
    left: 210px;
    background-color: ${(props) =>
      props.mode === "userName" ? "grey" : "rgba(68, 68, 68, 0.15)"};
  }
`;

export const ButtonTextFilter = styled.text`
  position: absolute;
  width: 80px;
  height: 22px;
  left: 2px;
  top: 10px;
  font-family: "Heebo";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  color: ${(props) => (props.mode === "" ? "white" : "rgba(68, 68, 68, 0.5)")};
  mix-blend-mode: normal;
`;

export const ButtonTextAge = styled.text`
  position: absolute;
  width: 27px;
  height: 22px;
  left: 24px;
  top: 10px;

  font-family: "Heebo";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  color: ${(props) =>
    props.mode === "role" ? "white" : "rgba(68, 68, 68, 0.5)"};
  mix-blend-mode: normal;
`;

export const ButtonTextStatus = styled.text`
  position: absolute;
  width: 44px;
  height: 22px;
  left: 23px;
  top: 10px;
  font-family: "Heebo";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  color: ${(props) =>
    props.mode === "userName" ? "white" : "rgba(68, 68, 68, 0.5)"};
  mix-blend-mode: normal;
`;

export const SearchButton = styled.button`
  background-color: lightgray;
  border: none;
  border-radius: 10px;
  padding: 10px;
  color: grey;
  position: relative;
  top: 5px;
  left: ${(props) => (props.mode !== "chat" ? "0px" : "40px")};
  @media only screen and (max-width: 1080px) {
    top: ${(props) => (props.mode !== "chat" ? "5px" : "0px")};
    left: ${(props) => (props.mode !== "chat" ? "0px" : "10px")};
  }
  @media only screen and (max-width: 1400px) {
    top: ${(props) => (props.mode !== "chat" ? "5px" : "0px")};
    left: ${(props) => (props.mode !== "chat" ? "0px" : "10px")};
  }
  @media only screen and (max-width: 700px) {
    top: ${(props) => (props.mode !== "chat" ? "5px" : "0px")};
    left: ${(props) => (props.mode !== "chat" ? "0px" : "40px")};
  }
`;

export const Ellipse = styled.img`
  position: absolute;
  left: 50px;
  right: 74.19%;
  top: 40px;
  bottom: 76.37%;
  @media only screen and (max-width: 1080px) {
    top: 30px;
  }

  @media only screen and (max-width: 700px) {
    position: absolute;
    top: -30px;
  }
`;

export const UsersHeader = styled.div`
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

export const Image1 = styled.img`
  position: absolute;
  left: 120px;
  top: -160px;
  width: 256px;
  height: 256px;
`;
export const Image2 = styled.img`
  position: absolute;
  left: 140px;
  top: -160px;
  width: 140px;
  height: 140px;
`;

export const Title1 = styled.h2`
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

export const SubTitle1 = styled.h2`
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



export const DashboardWhiteRectangle = styled.div`
  position: absolute;
  width: 1128px;
  height: 944px;
  left: 270px;
  top: 40px;
  background: #ffffff;
  box-shadow: 0px 38px 15px rgba(0, 19, 51, 0.01),
    0px 21px 13px rgba(0, 19, 51, 0.05), 0px 9px 9px rgba(0, 19, 51, 0.09),
    0px 2px 5px rgba(0, 19, 51, 0.1), 0px 0px 0px rgba(0, 19, 51, 0.1);
  border-radius: 35px;

  @media only screen and (max-width: 1400px) {
    width: 900px !important;
  }

  @media only screen and (max-width: 1080px) {
    width: 700px !important;
  }

  @media only screen and (max-width: 900px) {
    width: 500px;
  }
`;


export const DashboardTopRectangle = styled.div`
  position: absolute;
  width: 1128px;
  height: 184px;
  display: flex;
  justify-content: center;
  background: #f5f6f7;
  border-radius: 35px 35px 0px 0px;

  @media only screen and (max-width: 1400px) {
    width: 900px !important;
  }

  @media only screen and (max-width: 1080px) {
    width: 700px !important;
  }

  @media only screen and (max-width: 900px) {
    width: 500px;
  }
`;


export const DashboardTitle = styled.h2`
  position: absolute;
  width: 210px;
  height: 73px;
  left: 50px;
  top: -10px;
  font-family: "Heebo";
  font-style: normal;
  font-weight: 500;
  font-size: 50px;
  line-height: 73px;
  color: #444444;
`;

export const DashboardSubtitle = styled.h3`
  position: absolute;
  width: 357px;
  height: 29px;
  left: 54px;
  top: 70px;
  font-family: "Heebo";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  color: #444444;
`;

export const DashboardDetails = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 1070px;
  height: 790px;
  left: 30px;
  top: 130px;

  background: #ffffff;
  box-shadow: 0px 38px 15px rgba(0, 19, 51, 0.01),
    0px 21px 13px rgba(0, 19, 51, 0.05), 0px 9px 9px rgba(0, 19, 51, 0.09),
    0px 2px 5px rgba(0, 19, 51, 0.1), 0px 0px 0px rgba(0, 19, 51, 0.1);
  border-radius: 35px;

  @media only screen and (max-width: 900px) {
    width: 500px;
  }

  @media only screen and (max-width: 1400px) {
    width: 880px !important;

    left: 10px !important;
  }

  @media only screen and (max-width: 1080px) {
    width: 680px !important;
    left: 10px !important;
  }
`;


export const FirstImage = styled.img`
  position: absolute;
  left: 780px;
  right: -1.33%;
  top: -173px;
  bottom: 62.45%;

  background: url(doodle-4.png);
  transform: rotate(1.5deg);

  @media only screen and (max-width: 1400px) {
    left: 580px;
    top: -200px;
  }

  @media only screen and (max-width: 1080px) {
    left: 400px;
    top: -200px;
  }
`;

export const SecondImage = styled.img`
  position: absolute;
  left: 720px;
  right: 2.75%;
  top: -180px;
  bottom: 81.02%;
  background: url(doodle-5.png);

  @media only screen and (max-width: 1400px) {
    left: 520px;
  }

  @media only screen and (max-width: 1080px) {
    left: 360px;
  }
`;


