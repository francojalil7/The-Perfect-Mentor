import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { updateUser } from "../states/user";
import { useNavigate } from "react-router-dom";
import { MultiSelect } from "react-multi-select-component";
import Select from "react-select";

const ProfileForm = () => {
  const [preData, setPreData] = useState({});
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
  ];

  const roleOptions = [
    { value: "mentor", label: "Mentor" },
    { value: "mentee", label: "Mentee" },
  ];

  useEffect(() => {
    const userName = localStorage.getItem("userName");
    const email = localStorage.getItem("email");
    const age = localStorage.getItem("age");
    const role = localStorage.getItem("role");
    const country = localStorage.getItem("country");
    const languages = localStorage.getItem("language");
    setPreData({ userName, email, age, role, country, languages });
  }, []);
  const [selected, setSelected] = useState([]);
  const [selectedRole, setSelectedRole] = useState([]);

  const onSubmit = (data) => {
    const languages = selected.map((option) => {
      return option.value;
    });
    dispatch(
      updateUser({
        email: preData.email,
        age: data.age,
        role: selectedRole.value,
        description: data.description,
        country: data.country,
        language: languages,
      })
    );
    localStorage.setItem("age", data.age);
    localStorage.setItem("role", selectedRole.value);
    localStorage.setItem("country", data.country);
    localStorage.setItem("language", languages);
    navigate("/reports");
  };
  return (
    <>
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <br />
          <br />
          <br />
          <Label>
            Your name: <strong>{preData.userName}</strong>
          </Label>
          <br />
          <br />
          <Label>
            Your email: <strong>{preData.email}</strong>
          </Label>
          <br />
          <br />
          <Label>Age</Label>
          <ProfileInput
            type="text"
            autoComplete="off"
            placeholder={preData.age}
            name="age"
            {...register("age", { required: true })}
          />

          {errors.age &&
            errors.age.type === "required" &&
            errorMessage(required)}

          <Label>Role</Label>
          {/* <ProfileInput
            type="string"
            multiple
            name="role"
            id="role"
            list="roles"
            required
            placeholder={preData.role}
            size="64"
            // {...register("role", { required: true })}
          /> */}

          <SelectedContainer>
            <Select
              options={roleOptions}
              onChange={setSelectedRole}
              value={selectedRole}
              isSearchable={false}
            />
          </SelectedContainer>

          {/* <datalist id="roles">
            <option value="Mentor"></option>
            <option value="Mentee"></option>
          </datalist> */}

          {/* {errors.role &&
            errors.role.type === "required" &&
            errorMessage(required)} */}

          <br />

          <br />

          <br />

          <br />

          <Label>Country of residence</Label>
          <ProfileInput
            type="text"
            autoComplete="off"
            placeholder={preData.country}
            name="country"
            {...register("country", { required: true })}
          />

          {errors.country &&
            errors.country.type === "required" &&
            errorMessage(required)}
          <Label>Language</Label>

          <Options>
            <MultiSelect
              name="language"
              options={options}
              value={selected}
              onChange={setSelected}
              labelledBy={preData.language}
            />
          </Options>

          {errors.language &&
            errors.language.type === "required" &&
            errorMessage(required)}

          <Label>Description</Label>
          <ProfileInput
            type="text"
            autoComplete="off"
            placeholder={preData.description}
            name="description"
            {...register("description", { required: true })}
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
  position: absolute;
  left: 92px;
  top: 380px;
  font-size: 13px;

  @media only screen and (max-width: 700px) {
    position: relative;
    left: 14px;
    top: 5px;
    width: 90%;
  }
`;

export default ProfileForm;
