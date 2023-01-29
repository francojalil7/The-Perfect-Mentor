import React from "react";
import { H2, H3, Section } from "../styles/texts";
import styled from "styled-components";
import saly2 from "../assets/Sing/Saly-2.png";


const MailVerification = () => {
  return (
    <Section>
      <VerificationRectangle>
        <H2>¡Oh no! Página no encontrada.</H2>
        <H3>No pudimos encontrar la página que estás buscando.</H3>
        <SalySingleImage src={saly2} />
      </VerificationRectangle>
    </Section>
  );
};

const SalySingleImage = styled.img`
  height: 412px;
  width: 412px;

  @media only screen and (max-width: 975px) {
    height: 350px;
    width: 350px;

  } 
`;



const VerificationRectangle = styled.div`
  display: flex;
  flex-direction: column !important;
  color: #444444;
  box-sizing: border-box;
  width: 886px;
  height: 614px;
  mix-blend-mode: normal;
  border: 2px solid #444444;
  border-radius: 40px;
  justify-content: flex-end;
  align-items: center;
  margin-top: 80px;

  @media only screen and (max-width: 700px) {
    width: 100%;
    flex-direction: column !important;
    border: 2px solid #bfd732;
  }
`;

export default MailVerification;