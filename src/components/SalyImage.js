import React from "react";
import styled from "styled-components";
import saly2 from "../assets/Sing/Saly-2.png";
import icon1 from "../assets/Sing/doodle-4 1.png";
import icon2 from "../assets/Sing/doodle-5 1.png";
import icon3 from "../assets/Sing/doodle-7 2.png";
import icon4 from "../assets/Sing/Mask group.png";

const SalyImage = () => {
  return (
    <div>
      <SalySingleImage src={saly2} />
      <Logo1 src={icon1} />
      <Logo2 src={icon2} />
      <Logo3 src={icon3} />
      <Logo4 src={icon4} />
    </div>
  );
};
const SalySingleImage = styled.img`
  height: 512px;
  width: 512px;
  position: absolute;
  bottom: 90px;
  left: 250px;
  @media only screen and (max-width: 975px) {
    height: 450px;
    width: 450px;
    left: 270px;
  }
`;

const Logo1 = styled.img`
  position: relative;
  bottom: 100px;
  left: 260px;
  @media only screen and (max-width: 975px) {
    position: absolute;
    left: 290px;
    bottom: 100px;
    width: 160px;
    height: 160px;
  }
`;
const Logo2 = styled.img`
  position: relative;
  left: 360px;
  bottom: 280px;
  @media only screen and (max-width: 975px) {
    position: absolute;
    left: 530px;
    bottom: 280px;
    width: 160px;
    height: 160px;
  }
`;

const Logo3 = styled.img`
  position: absolute;
  left: 460px;
  bottom: 430px;
  @media only screen and (max-width: 975px) {
    width: 235px;
    height: 240px;
    left: 460px;
    bottom: 400px;
  }
`;

const Logo4 = styled.img`
  position: absolute;
  left: 210px;
  bottom: 520px;
  @media only screen and (max-width: 975px) {
    width: 150px;
    height: 100px;
    left: 290px;
    bottom: 470px;
  }
`;

export default SalyImage;
