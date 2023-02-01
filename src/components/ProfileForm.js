import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getUserMail, updateUser } from "../states/user";
import { useNavigate } from "react-router-dom";
import { MultiSelect } from "react-multi-select-component";
import Select from "react-select";
import useInput from "../hooks/useInput";

const ProfileForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const options = [
    { label: "Spanish", value: "spanish" },
    { label: "English", value: "english" },
    { label: "Italian", value: "italian" },
    { label: "French", value: "french" },
    { label: "Chinese", value: "chinese" },
    { label: "Portuguese", value: "portuguese" },
  ];

  const roleOptions = [
    { value: "mentor", label: "Mentor" },
    { value: "mentee", label: "Mentee" },
  ];

  const professionOptions = [
    { value: "fullstack", label: "Fullstack Developer" },
    { value: "frontend", label: "Frontend Developer" },
    { value: "backend", label: "Backend Developer" },
  ];
  const skillsOptions = [
    { value: "react", label: "React Js" },
    { value: "vue", label: "Vue" },
    { value: "angular", label: "Angular" },
    { value: "javascript", label: "Javascript" },
    { value: "c++", label: "C++" },
    { value: "phyton", label: "Phyton" },
  ];

  useEffect(() => {
    const email = localStorage.getItem("email");
    dispatch(getUserMail(email));
  }, []);

  let user = useSelector((state) => state.user);
 
  const age = useInput(user.age);
  const fullName = useInput(user.fullName);
  // const role = useInput(user.role);
  const description = useInput(user.description);
  const country = useInput(user.country);
  // const language = useInput(user.language);
  // const skills = useInput(user.skills);
  // const profession = useInput(user.profession);

  const [selected, setSelected] = useState([]);
  const [selectedRole, setSelectedRole] = useState([]);
  const [selectedProfession, setSelectedProfession] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);

  const onSubmit = (data) => {
    const languages = selected.map((option) => {
      return option.value;
    });
    const skills = selectedSkills.map((option) => {
      return option.value;
    });
    dispatch(
      updateUser({
        email: user.email,
        age: data.age,
        fullName: data.fullName,
        role: selectedRole.value,
        description: data.description,
        country: data.country,
        language: languages,
        skills: skills,
        profession: selectedProfession.value,
        registerForm: true,
        isAdmin: false
      })
    );

    navigate("/reports");
  };
  return (
    <>
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Label>
            User name: <strong>{user.userName}</strong>
          </Label>
          <br />
          <br />
          <Label>
            Your email: <strong>{user.email}</strong>
          </Label>
          <br />
          <br />
          <Label>Full Name</Label>
          <ProfileInput
            {...register("fullName")}
            value={fullName.value}
            onChange={fullName.onChange}
          />

          {errors.fullName &&
            errors.fullName.type === "required" &&
            errorMessage(required)}
          <Label>Age</Label>
          <ProfileInput
            {...register("age")}
            value={age.value}
            onChange={age.onChange}
          />

          {errors.age &&
            errors.age.type === "required" &&
            errorMessage(required)}

          <Label>Country of residence</Label>
          <ProfileInput
            {...register("country")}
            value={country.value}
            onChange={country.onChange}
          />

          {errors.country &&
            errors.country.type === "required" &&
            errorMessage(required)}

         <Label>Role</Label>

          <SelectedContainer>
            <Select
              options={roleOptions}
              onChange={setSelectedRole}
              value={selectedRole}
              placeholder={user.role}
              isSearchable={false}
              required
            />
          </SelectedContainer>

          {errors.role &&
            errors.role.type === "required" &&
            errorMessage(required)}

 
          <Label>Profession</Label>

          <SelectedContainer>
            <Select
              options={professionOptions}
              onChange={setSelectedProfession}
              value={selectedProfession}
              placeholder={user.profession}
              isSearchable={false}
              required
            />
          </SelectedContainer>

          <Label>Skills</Label>

          <Options>
            <MultiSelect
              name="skills"
              options={skillsOptions}
              value={selectedSkills}
              onChange={setSelectedSkills}
  
        
              required
            />
          </Options>

          {errors.language &&
            errors.language.type === "required" &&
            errorMessage(required)}

          <Label>Language</Label>

          <Options>
            <MultiSelect
              name="language"
              options={options}
              value={selected}
              onChange={setSelected}
          
            />
          </Options>

          {errors.language &&
            errors.language.type === "required" &&
            errorMessage(required)} 

          <Label>Description</Label>
          <ProfileInput
            {...register("description")}
            value={description.value}
            onChange={description.onChange}
          />

          {errors.description &&
            errors.description.type === "required" &&
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

const required = "This field is required";
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

const Options = styled.div`
  margin: 0 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  height: 30px;
  width: 90%;
  font-size: 14px;
`;

const SelectedContainer = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 13px;
  width: 90%;
  margin-left: 20px;

  @media only screen and (max-width: 700px) {
    position: relative;
    left: 0px;
    top: 5px;
    width: 90%;
  }
`;

export default ProfileForm;
