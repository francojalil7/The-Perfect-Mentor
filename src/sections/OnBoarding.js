import React from "react";
import styled from "styled-components";
import {
  Section,
  Rectangle,
  Mentor,
  ButtonOnBoardingGreen,
  ButtonOnBoardingGrey,
  ProfileTitle,
} from "../styles/texts";
import mentor from "../assets/OnBoarding/Vector.png";
import saly from "../assets/OnBoarding/Saly-1.png";
import { useNavigate } from "react-router-dom";

const OnBoarding = () => {
  const navigate = useNavigate();
  const goSignIn = () => {
    navigate("/signin");
  };
  const goSignUp = () => {
    navigate("/signup");
  };

  return (
    <>
      <Section>
        <Rectangle>
          <ImageContainer>
            <Saly src={saly} style={{"top": "-20px"}} />
          </ImageContainer>

          <section>
            <Mentor src={mentor} alt="perfect mentor"/>
            <div>
            <ButtonOnBoardingGrey onClick={goSignUp}>
              Sign Up
            </ButtonOnBoardingGrey>
            <ButtonOnBoardingGreen onClick={goSignIn}>
              Log In
            </ButtonOnBoardingGreen>
            </div>
          </section>
        </Rectangle>
      </Section>
    </>
  );
};

const Saly = styled.img`
  position: relative;
  top: -15px;
  left: -270px;

  @media only screen and (max-width: 700px) {
    height: 500px;
    width: 500px;
    position: absolute;
    left: 10px;
    top:80px;
  }
`;

const ImageContainer = styled.div`
  width: 50%;
  @media only screen and (max-width: 700px) {
    width: 10%;
  }

`;

export default OnBoarding;
