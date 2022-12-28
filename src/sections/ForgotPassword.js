import React from "react";
import styled from "styled-components";
import { Section, SmallRectangle, Modal } from "../styles/texts";
import mentor from "../assets/OnBoarding/Vector.png";
import SalyImage from "../components/SalyImage";
import Axios from "axios";
import {
  Button,
  GreyButtonInside,
  GreyButtonOutside,
  Line,
  VerticalLine,
  H2,
  Input
} from "../styles/texts";
import password from "../assets/Sing/icon 32px 3/light/password.png";
import line from "../assets/Sing/Line 2.png";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const stepOne = await Axios.put(
        "http://localhost:5001/auth/forgot-password",
        {email: data.email}
      );
      swal(
        "Congratulations!",
        "Check your email to change your password",
        "success"
      );
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <>
      <Section>
        <Mentor src={mentor} />
        <SmallRectangle>
          <aside>
            <SalyImage />
          </aside>

          <VerticalLine src={line} />
          <section>
            <H2>Forgot Password</H2>
            <Line />
            <form onSubmit={handleSubmit(onSubmit)}>
              <Button>
                <Icon src={password} />
                <Input
                  type="text"
                  autoComplete="off"
                  placeholder="Insert your email"
                  name="email"
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
              </Button>
              <GreyButtonInside onClick={handleSubmit(onSubmit)}>
                Send Email
              </GreyButtonInside>
              <GreyButtonOutside onClick={handleSubmit(onSubmit)}>
                Send Email
              </GreyButtonOutside>
            </form>
          </section>
        </SmallRectangle>
      </Section>
    </>
  );
};

const Icon = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 20px;
  background: #ffffff;
  margin: 0 10px;
`;

const Mentor = styled.img`
  height: 107px;
  width: 200px;
  margin-left: 240px;
  margin-top: 80px;
  margin-bottom: 20px;

  @media only screen and (max-width: 700px) {
    margin-right: 350px !important;
  }
`;

export default ForgotPassword;
