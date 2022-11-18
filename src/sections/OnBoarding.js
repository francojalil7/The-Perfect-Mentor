import React from "react";
import styled from "styled-components";
import {
  Section,
  Rectangle,
  Mentor,
  ButtonOnBoardingGreen,
  ButtonOnBoardingGrey,
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
          {/* <ImageContainer>
            <Saly src={saly} />
          </ImageContainer> */}

          <section>
            <Mentor src={mentor} />
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
  top: -160px;
  left: -190px;

  @media only screen and (max-width: 700px) {
    height: 511px;
    width: 511px;

    /* position: absolute; */
    /* left: 0%;
    top:18%; */
    /* position: absolute;
    left: 1.52%;
    right: 1.52%;
    top: 150px; */

    /* position: absolute;
    top: 0px;
    left: 300px; */
  }
`;

const ImageContainer = styled.div`
  width: 50%;
  @media only screen and (max-width: 700px) {
    width: 10%;
  }

`;

export default OnBoarding;
