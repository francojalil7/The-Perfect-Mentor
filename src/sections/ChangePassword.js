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
} from "../styles/texts";
import password from "../assets/Sing/icon 32px 3/light/password.png";
import line from "../assets/Sing/Line 2.png";
import { useForm } from "react-hook-form";


// Messages
const required = "This field is required";
const maxLength = "You must enter a maximum of 15 characters";
const minLength = "You must enter at least 5 characters";

// Error Component
const errorMessage = (error) => {
  return <ErrorMessage>{error}</ErrorMessage>;
};

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = async (data) => {

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
            <H2>Change Password</H2>
            <Line />

            <form onSubmit={handleSubmit(onSubmit)}>
              <Button>
          
                <Icon src={password} />
                <Input
                  type="password"
                  autoComplete="off"
                  placeholder="Old Password"
                  name="oldPassword"
                  {...register("oldPassword", {
                    required: true,
                    minLength: 5,
                    maxLength: 15,
                
                  })}
                />
              </Button>
              {errors.oldPassword &&
                errors.oldPassword.type === "required" }
              <Button>
              <Icon src={password} />
            
                <Input
                  type="password"
                  autoComplete="off"
                  placeholder="New Password"
                  name="newPassword"
                  {...register("newPassword", {
                    required: true,
                    minLength: 5,
                    maxLength: 15,
               
                  })}
                />
              </Button>
              {errors.newPassword &&
                errors.newPassword.type === "required" &&
                errorMessage(required)}
         
              <Button>
                <Icon src={password} />
                <Input
                  type="password"
                  autoComplete="off"
                  placeholder="New password"
                  name="newPassword"
                  {...register("newPassword", {
                    required: true,
                    minLength: 5,
                    maxLength: 15,
                  })}
                />
              </Button>
              {errors.newPassword &&
                errors.newPassword.type === "required" &&
                errorMessage(required)}
              {errors.newPassword &&
                errors.newPassword.type === "minLength" &&
                errorMessage(minLength)}
              {errors.newPassword &&
                errors.newPassword.type === "maxLength" &&
                errorMessage(maxLength)}

              <GreyButtonInside onClick={handleSubmit(onSubmit)}>
                Change Password
              </GreyButtonInside>
              <GreyButtonOutside onClick={handleSubmit(onSubmit)}>
                Change Password
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

export default ChangePassword;
