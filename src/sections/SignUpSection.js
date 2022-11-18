import React from "react";
import styled from "styled-components";
import { Section, SmallRectangle } from "../styles/texts";
import mentor from "../assets/OnBoarding/Vector.png";
import SalyImage from "../components/SalyImage";

import {
  Button,
  GreyButtonInside,
  GreyButtonOutside,
  Line,
  VerticalLine,
  Input,
  H2,
} from "../styles/texts";
import user from "../assets/SingUp/icon 32px/light/user.png";
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

const SignUpSection = () => {
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

          {/* <SignUp mode="mobile" /> */}

          <VerticalLine src={line} />
          <section>
            <H2>Sign Up</H2>
            <Line />

            <form onSubmit={handleSubmit(onSubmit)}>
              <Button>
                <Icon src={user} />

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
                <Icon src={email} />
                <Input
                  type="text"
                  autoComplete="off"
                  placeholder="email"
                  name="email"
                  {...register("email", { required: true })}
                />
              </Button>
              {errors.email &&
                errors.email.type === "required" &&
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

              <GreyButtonInside onClick={handleSubmit(onSubmit)}>Sign Up</GreyButtonInside>
              <GreyButtonOutside onClick={handleSubmit(onSubmit)}>Sign Up</GreyButtonOutside>
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

export default SignUpSection;
