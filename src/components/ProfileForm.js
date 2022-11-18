import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

// Messages
const required = "Este campo es requerido";

// Error Component
const errorMessage = (error) => {
  return <div>{error}</div>;
};

const ProfileForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Label>Your name</Label>
          <ProfileInput
            type="text"
            autoComplete="off"
            placeholder="usename"
            name="username"
            {...register("username", { required: true })}
          />

          {errors.username &&
            errors.username.type === "required" &&
            errorMessage(required)}

          <Label>Your email</Label>
          <ProfileInput
            type="text"
            autoComplete="off"
            placeholder="email"
            name="email"
            {...register("email", { required: true })}
          />

          {errors.email &&
            errors.email.type === "required" &&
            errorMessage(required)}
          <Label>Your password</Label>
          <ProfileInput
            type="password"
            autoComplete="off"
            placeholder="password"
            name="password"
            {...register("password", { required: true })}
          />

          {errors.password &&
            errors.password.type === "required" &&
            errorMessage(required)}
          <Label>Age</Label>
          <ProfileInput
            type="text"
            autoComplete="off"
            placeholder="35"
            name="age"
            {...register("age", { required: true })}
          />

          {errors.password &&
            errors.password.type === "required" &&
            errorMessage(required)}
          <Label>Role</Label>
          <ProfileInput
            type="text"
            autoComplete="off"
            placeholder="Mentor"
            name="rol"
            {...register("rol", { required: true })}
          />

          {errors.password &&
            errors.password.type === "required" &&
            errorMessage(required)}

          {/* <button onClick={handleSubmit(onSubmit)}>Sign In</button> */}
        </form>
      </FormContainer>
    </>
  );
};

const FormContainer = styled.div`
  display: flex;
  justify-content: center !important;

  margin-top: 200px;

  form {
    justify-content: center !important;
  }
`;

const Label = styled.label`
  font-family: "Heebo";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.5px;
  margin-left: 20px;
  color: #3a3d46;
  mix-blend-mode: normal;
`;

const ProfileInput = styled.input`
  margin: 0 20px;
  margin-top: 0;
  margin-bottom: 10px;
  outline: none;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 0.5px solid rgba(68, 68, 68, 0.3);
  height: 30px;
  width: 90%;
`;

export default ProfileForm;
