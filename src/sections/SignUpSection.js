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
  ErrorMessage,
  Text,
} from "../styles/texts";
import users from "../assets/Sing/icon 32px/light/user.png";
import email from "../assets/Sing/icon 32px 2/light/email.png";
import password from "../assets/Sing/icon 32px 3/light/password.png";
import line from "../assets/Sing/Line 2.png";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from "../states/user";
import { useNavigate } from "react-router-dom";

// Messages
const required = "This field is required";
const maxLength = "You must enter a maximum of 15 characters";
const minLength = "You must enter at least 5 characters";
const username = "Username must have only letters and numbers (no spaces)";
// Error Component
const errorMessage = (error) => {
  return <ErrorMessage>{error}</ErrorMessage>;
};

const SignUpSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const onSubmit = (data) => {
    try {
      dispatch(
        signUpUser({
          userName: data.userName,
          email: data.email,
          password: data.password,
        })
      );

      localStorage.setItem("signup", "ok");

      navigate("/verification");
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

          {/* <SignUp mode="mobile" /> */}

          <VerticalLine src={line} />
          <section>
            <H2>Sign Up</H2>
            <Line />

            <form onSubmit={handleSubmit(onSubmit)}>
              <Button>
                <Icon src={users} />
                <Input
                  type="text"
                  autoComplete="off"
                  placeholder="Username"
                  name="userName"
                  {...register("userName", {
                    required: true,
                    pattern: /^[A-Za-z0-9]+$/i,
                  })}
                />
              </Button>
              {errors.userName &&
                errors.userName.type === "required" &&
                errorMessage(username)}
              <Button>
                <Icon src={email} />
                <Input
                  type="text"
                  autoComplete="off"
                  placeholder="Email"
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
                  placeholder="Password"
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
              <Text>
                Have an account?{" "}
                <a href={`http://the-perfect-mentor.vercel.app/signIn`}>Sign in</a>
              </Text>
              <GreyButtonInside onClick={handleSubmit(onSubmit)}>
                Sign Up
              </GreyButtonInside>
              <GreyButtonOutside onClick={handleSubmit(onSubmit)}>
                Sign Up
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

export default SignUpSection;
