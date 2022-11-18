import React from "react";
import styled from "styled-components";
import {
  Section,
  SmallRectangle,
  Button,
  GreyButtonInside,
  GreyButtonOutside,
  H2,
  H3,
  Line,
  VerticalLine,
  Text,
  Input,
} from "../styles/texts";
import mentor from "../assets/OnBoarding/Vector.png";
import SalyImage from "../components/SalyImage";
import email from "../assets/SingUp/icon 32px 2/light/email.png";
import password from "../assets/SingUp/icon 32px 3/light/password.png";
import line from "../assets/SingUp/Line 2.png";
import { useForm } from "react-hook-form";

// Messages
const required = "Este campo es requerido";

// Error Component
const errorMessage = (error) => {
  return <div>{error}</div>;
};

const SignInSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <Section>
        <Mentor src={mentor} />
        <SmallRectangle >
          <aside>
            <SalyImage />
          </aside>

          <VerticalLine src={line} />
          <section>
            <H2>Sign In</H2>
            <Line />

            <H3>Hi, name!</H3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Button>
                <Icon src={email} />

                <Input
                  type="text"
                  autoComplete="off"
                  placeholder="username"
                  name="username"
                  {...register("username", { required: true })}
                />
              </Button>
              {errors.username &&
                errors.username.type === "required" &&
                errorMessage(required)}
              <Button>
                <Icon src={password} />

                <Input
                  type="text"
                  autoComplete="off"
                  placeholder="password"
                  name="password"
                  {...register("password", { required: true })}
                />
              </Button>
              {errors.password &&
                errors.password.type === "required" &&
                errorMessage(required)}

              <Text>Do you forgot your password?</Text>

              <GreyButtonInside onClick={handleSubmit(onSubmit)}>
                Sign In
              </GreyButtonInside>
              <GreyButtonOutside onClick={handleSubmit(onSubmit)}>Sign Up</GreyButtonOutside>
            </form>
          </section>
        </SmallRectangle>
      </Section>
    </>
  );
};

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

const Icon = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 20px;
  background: #ffffff;
  margin: 0 10px;
`;

export default SignInSection;
