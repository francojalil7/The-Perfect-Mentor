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
  ErrorMessage,
} from "../styles/texts";
import mentor from "../assets/OnBoarding/Vector.png";
import SalyImage from "../components/SalyImage";
import email from "../assets/Sing/icon 32px 2/light/email.png";
import password from "../assets/Sing/icon 32px 3/light/password.png";
import line from "../assets/Sing/Line 2.png";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { effectLogin } from "../states/user";

// Messages
const required = "This field is required";
const maxLength = "You must enter a maximum of 15 characters";
const minLength = "You must enter at least 5 characters";

// Error Component
const errorMessage = (error) => {
  return <ErrorMessage>{error}</ErrorMessage>;
};

const SignInSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSubmit = (data) =>{
    dispatch(effectLogin(data))
    navigate("/profile")
  } 
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
            <H2>Sign In</H2>
            <Line />

            <H3>Hi, name!</H3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Button>
                <Icon src={email} />

                <Input
                  type="text"
                  autoComplete="off"
                  placeholder="email"
                  name="email"
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
              </Button>
    
              {errors.email &&
                errors.email.type === "required" &&
                errorMessage(required)}
              {errors.email &&
                errors.email.type === "pattern" &&
                errorMessage("The email is not valid")}
 
             
              <Button>
                <Icon src={password} />

                <Input
                  type="password"
                  autoComplete="off"
                  placeholder="password"
                  name="password"
                  {...register("password", {
                    required: true,
                    minLength: 5,
                    maxLength: 15,
                  })}
                />
              </Button>
              {errors.password &&
                errors.password.type === "required" &&
                errorMessage(required)}
              {errors.password &&
                errors.password.type === "minLength" &&
                errorMessage(minLength)}
              {errors.password &&
                errors.password.type === "maxLength" &&
                errorMessage(maxLength)}

              <Text>Do you forgot your password?</Text>

              <GreyButtonInside onClick={handleSubmit(onSubmit)}>
                Sign In
              </GreyButtonInside>
              <GreyButtonOutside onClick={handleSubmit(onSubmit)}>
                Sign In
              </GreyButtonOutside>
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
