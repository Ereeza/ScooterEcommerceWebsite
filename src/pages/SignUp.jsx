import "../styles/signup.scss";
import TextField from "../components/Shared/TextField";
import Button from "../components/Shared/Button";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/auth.jsx";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const SignUp = () => {
  const { registerUser, userError } = useContext(AuthContext);

  const navigate = useNavigate();

  const schema = yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    email: yup
      .string()
      .email("Please write a valid email")
      .required("Email is required"),
    password: yup
      .string()
      .min(8, "Password must contain at least 8 characters")
      .required("Password is required"),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password"), undefined], "Password doesn't match")
      .min(8, "Password must contain at least 8 characters")
      .required("Password is required"),
  });

  //   const handleRegistration = (data) => {
  //     registerUser(data);
  //     if (userError) {
  //       console.log("Registration userError:", userError);
  //     } else {
  //       setSuccessMessage("You are registered successfully. Please");
  //       console.log("User registered:", data);
  //     }
  //   };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    if (!data) return;
    registerUser(data);
    navigate("/signin");
  };
  console.log("error", errors);

  //   const handleError = (errors) => {};

  //   const registerOptions = {
  //     firstName: { required: "First Name is required" },
  //     lastName: { required: "Last Name is required" },
  //     address: { required: "Address is required" },
  //     email: { required: "Email is required" },
  //     password: {
  //       required: "Password is required",
  //       minLength: {
  //         value: 8,
  //         message: "Password must have at least 8 characters",
  //       },
  //     },
  //   };

  //   const handleEmailChange = (event) => {
  //     setEmail(event.target.value); // Update the email state when the input changes
  //   };

  return (
    <div className="signup__wrapper">
      <div className="signup-main container ">
        <div className="signup">
          {/* {successMessage && (
            <div className="success-message">
              {successMessage}
              <Link to="/signin" className="signIn-join">
                Sign in
              </Link>
            </div>
          )} */}
          <div>
            <Link to={"/signIn"} className="signIn-link">
              Already have an account?
              <span className="signIn-join">Login Here</span>
            </Link>
            <h1 className="signup-title">Sign Up</h1>
            <p></p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
            <div className="signup__inputGroup">
              <input
                type="text"
                placeholder="First Name"
                {...register("firstName")}
              />
              <div className="text-danger">
                {errors?.firstName && errors.firstName.message}
              </div>
            </div>
            <div className="signup__inputGroup">
              <input
                type="text"
                placeholder="Last Name"
                {...register("lastName")}
              />
              <div className="text-danger">
                {errors?.lastName && errors.lastName.message}
              </div>
            </div>

            <div className="signup__inputGroup">
              <input type="email" placeholder="Email" {...register("email")} />
              <div className="text-danger">
                {errors?.email && errors.email.message}
              </div>
              <div className="text-danger">
                {userError === "Email already registered." && (
                  <span style={{ color: "red" }}>{userError}</span>
                )}
              </div>
            </div>
            <div className="signup__inputGroup">
              <input
                type="password"
                placeholder="Password"
                {...register("password")}
              />
              <div className="text-danger">
                {errors?.password && errors.password.message}
              </div>
            </div>
            <div className="signup__inputGroup">
              <input
                type="password"
                placeholder="Confirm password"
                {...register("passwordConfirmation")}
              />
              <div className="text-danger">
                {errors?.passwordConfirmation &&
                  errors.passwordConfirmation.message}
              </div>
            </div>

            <Button className="button signup-btn" type="submit">
              Sign up
            </Button>

            {/* <TextField
              type="text"
              id="firstName"
              name="firstName"
              className="signIn-input"
              placeholder="First Name"
            />
            <TextField
              type="text"
              id="lastName"
              name="lastName"
              className="signIn-input"
              placeholder="Last Name"
            />
            <TextField
              type="text"
              id="email"
              name="email"
              className="signIn-input"
              placeholder="Email"
            /> */}

            {/* <TextField
              type="password"
              id="password"
              name="password"
              className="signIn-input"
              placeholder="Password"
            />

            <div className="agreement__wrapper">
              <TextField
                type="checkbox"
                id="agreement"
                name="agreement"
                className="agreement"
                value="agreement"
              />
              <span for="agreement" className="agreement-span">
                I agree to the Terms&Conditions
              </span> */}
            {/* </div> */}

            {/* <Button className="button signIn-btn">Create Account</Button>
            <Link to={"/signIn"} className="signIn-link">
              Already have an account?
              <span className="signIn-join">Sign in</span>
            </Link> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
