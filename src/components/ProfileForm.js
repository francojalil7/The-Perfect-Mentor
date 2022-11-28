import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

// Messages
const required = "This field is required";

// Error Component
const errorMessage = (error) => {
  return (
    <div
      style={{
        display: "block",
        color: "red",
        fontSize: "12px",
        marginLeft: "20px",
      }}
    >
      {error}
    </div>
  );
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

          {errors.age &&
            errors.age.type === "required" &&
            errorMessage(required)}
          <Label>Role</Label>
          <ProfileInput
            type="text"
            autoComplete="off"
            placeholder="Mentor"
            name="rol"
            {...register("rol", { required: true })}
          />

          {errors.role &&
            errors.role.type === "required" &&
            errorMessage(required)}

          <Label>Country of residence</Label>
          <ProfileInput
            type="text"
            autoComplete="off"
            placeholder="Country"
            name="country"
            {...register("country", { required: true })}
          />

          {errors.country &&
            errors.country.type === "required" &&
            errorMessage(required)}
          <Label>Language</Label>
          <ProfileInput
            type="text"
            autoComplete="off"
            placeholder="English/Spanish"
            name="language"
            {...register("language", { required: true })}
          />

          {errors.language &&
            errors.language.type === "required" &&
            errorMessage(required)}

          <Label>Skills</Label>
          <ProfileInput
            type="text"
            autoComplete="off"
            placeholder="Skills"
            name="skills"
            {...register("skills", { required: true })}
          />

          {errors.skills &&
            errors.skills.type === "required" &&
            errorMessage(required)}

          <SaveChangesButton onClick={handleSubmit(onSubmit)}>
            Save changes
          </SaveChangesButton>
          <span></span>
        </form>
      </FormContainer>
    </>
  );
};

const FormContainer = styled.div`
  display: flex;
  margin-top: 150px;

  form {
    justify-content: center !important;
  }

  @media only screen and (max-width: 700px) {
    margin-top: 70px;
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

const SaveChangesButton = styled.button`
  box-sizing: border-box;
  position: relative;
  left: 220px;
  width: 120px;
  height: 30px;

  border: 1px solid rgba(68, 68, 68, 0.15);
  background: transparent;
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: "Heebo";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: rgba(68, 68, 68, 0.5);
  margin-top: 20px;
  @media only screen and (max-width: 700px) {
    left: 110px;
  }
`;

export default ProfileForm;
