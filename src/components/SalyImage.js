import React from "react";
import styled from "styled-components";
import saly2 from "../assets/SingUp/Saly-2.png";
import icon1 from "../assets/SingUp/doodle-4 1.png";
import icon2 from "../assets/SingUp/doodle-5 1.png";
import icon3 from "../assets/SingUp/doodle-7 2.png";

const SalyImage = () => {
  return (
    <div>
      <SalySingleImage src={saly2} />
      <Logo1 src={icon1} />
      <Logo2 src={icon2} />
      {/* <Logo3 src={icon3} /> */}
    </div>
  );
};
const SalySingleImage = styled.img`
  height: 572px;
  width: 572px;
  position: absolute;
  bottom: 90px;
  left: 200px;
`;

const Logo1 = styled.img`
  position: relative;
  top: 160px;
  left: 250px;
`;
const Logo2 = styled.img`
  position: relative;
  left: 360px;
  bottom: 40px;
`;

const Logo3 = styled.img`
  position: absolute;
  left: 460px;
  bottom: 430px;
`;

export default SalyImage;
