import "../styles/signin.scss";
import React, { useContext, useState } from "react";
import TextField from "../components/Shared/TextField";
import Button from "../components/Shared/Button";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/auth";
import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";

const SignIn = () => {
  const { user, loginUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Write a valid email!")
      .required("Email is required!"),
    password: yup
      .string()
      .min(8, "Password must contain at least 8 characters")
      .required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    if (!data) return;
    loginUser(data);

    if (JSON.parse(localStorage.getItem("login"))) {
      navigate("/");
    }
  };

  return (
    <div className="signIn__wrapper">
      <div className="signIn-main container ">
        <div className="signIn">
          <div>
            <h1 className="signIn-title">Sign In</h1>
            <p></p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="signIn-form">
            <div>
              <small className="text-danger">
                {errors?.email && errors.email.message}
              </small>
              <input type="email" placeholder="Email" {...register("email")} />
            </div>
            <div>
              <small className="text-danger">
                {errors?.password && errors.password.message}
              </small>
              <input
                type="password"
                placeholder="Password"
                {...register("password")}
              />
            </div>
            <Button className="button signIn-btn" type="submit">
              Sign in
            </Button>
            <Link to={"/signUp"} className="signIn-link">
              Dont have an account?{" "}
              <span className="signIn-join">Register now</span>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
