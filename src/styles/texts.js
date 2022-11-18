import styled from "styled-components";

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

  /* aside {
    display: flex;
    /* position: relative;
    top: 110px;
    right: 270px; 
  } */

  section {
    display: flex;
    flex-direction: column;
    margin-right: 50px;
  }

  @media only screen and (max-width: 700px) {
    width: 100%;
    flex-direction: column !important;
    border: 2px solid #bfd732;

    section {
    }
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

  @media only screen and (max-width: 700px) {
    width: 315px;
    height: 361px;
  }

  aside {
    position: relative;
    top: 250px;
    right: 270px;

    @media only screen and (max-width: 700px) {
      display: none;
    }
  }

  section {
    position: relative;
    left: 120px;

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
  @media only screen and (max-width: 700px) {
    width: 265px !important;
    margin-left: 20px;
    mix-blend-mode: normal;
    border: 1px solid #444444;
    border-radius: 40px;
  }
`;

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
  @media only screen and (max-width: 700px) {
    display: none;
    /* margin-top: 30px;
    width: 315px !important; */
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
    /* margin-top: 30px;
    width: 315px !important; */
  }
`;

export const H2 = styled.h2`
  font-family: "Heebo";
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  height: 30px;
  /* line-height: 59px; */
  color: #444444;
  mix-blend-mode: normal;
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
  @media only screen and (max-width: 700px) {
    font-size: 30px !important;
    margin-left: 30px;
  }
`;
export const Line = styled.div`
  border: 1px dashed #444444;
  max-width: 323px;
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
`;

export const WhiteRectangle = styled.div`
  position: absolute;
  width: 1128px;
  height: 944px;
  left: 272px;
  top: 40px;
  background: #ffffff;
  box-shadow: 0px 38px 15px rgba(0, 19, 51, 0.01),
    0px 21px 13px rgba(0, 19, 51, 0.05), 0px 9px 9px rgba(0, 19, 51, 0.09),
    0px 2px 5px rgba(0, 19, 51, 0.1), 0px 0px 0px rgba(0, 19, 51, 0.1);
  border-radius: 35px;
`;

export const TopRectangle = styled.div`
  position: absolute;
  width: 1128px;
  height: 184px;
  display: flex;
  justify-content: center;
  background: #f5f6f7;
  border-radius: 35px 35px 0px 0px;
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
    /* position: absolute !important;
    bottom: 130px;
    left: 30px; */
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
    /* position: absolute !important;
    bottom: 60px;
    left: 30px; */
    margin-top: 20px !important;
  }

  @media only screen and (max-width: 320px) {
    width: 300px;
  }
`;
