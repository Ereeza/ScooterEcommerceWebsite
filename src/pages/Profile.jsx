import Button from "../components/Shared/Button";
import "../styles/profile.scss";
import userProfile from "../assets/images/user.jpg";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/auth";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
const Profile = () => {
  const { user, updateUser, signOut, loginUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const login = JSON.parse(localStorage.getItem("login"));
  console.log(login);

  const schema = yup.object().shape({
    firstName: yup.string().required("First Name is required!"),
    lastName: yup.string().required("Last Name is required!"),
    email: yup
      .string()
      .email("Write a valid email!")
      .required("Email is required!"),
    password: yup
      .string()
      .min(8, "Password must contain at least 8 characters")
      .required("Password is required"),
  });

  const [defaultFormValues, setDefaultFormValues] = useState({
    firstName: user.firstName || "",
    lastName: user.lastName || "",
    email: user.email || "",
    password: user.password || "",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: defaultFormValues,

    resolver: yupResolver(schema),
  });

  const onSubmit = (action, data) => {
    if (action === "cancel") {
      // Reset the form to default values
      reset(defaultFormValues);
    } else {
      // Update the user with the new data
      updateUser(data);
      setDefaultFormValues({
        firstName: data.firstName,
        lastName: user.lastName || "",
        email: user.email || "",
        password: user.password || "",
      });
    }
  };

  const handleLogin = () => {
    navigate("/signin");
  };

  return (
    <>
      <main className="myAccount">
        {login ? (
          <>
            <div className="myAccount__banner">
              <div className="banner-content">
                <div>
                  {user.firstName && <h1>{user.firstName}'s Profile</h1>}
                  <Link to="/signin">
                    <Button className="button sign-out" onClick={signOut}>
                      Sign out
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <section className="myAccount__info container">
              <div className="myAccount__Card slide-top">
                <div className="myAccount__Card-image">
                  <img src={userProfile} alt="My account" />
                </div>
                <div className="myAccount__Card-title">
                  <h1>Personal Information</h1>
                </div>
              </div>
              <div className="myAccount__form-wrapper">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="myAccount__form"
                  id="form"
                >
                  <div className="myAccount-form__grid">
                    <div className="myAccount__inputGroup">
                      <label>First Name:</label>
                      <br />
                      <input
                        type="text"
                        placeholder="First Name"
                        {...register("firstName")}
                      />
                      <span id="nameErrorMessage" className="errors"></span>
                    </div>
                    <div className="myAccount__inputGroup">
                      <label>Last Name:</label>
                      <br />
                      <input
                        type="text"
                        placeholder="Last Name"
                        {...register("lastName")}
                      />
                      <span id="nameErrorMessage" className="errors"></span>
                    </div>
                    <div className="myAccount__inputGroup">
                      <label>Email:</label>
                      <br />
                      <input
                        type="email"
                        placeholder="Email"
                        id="email"
                        {...register("email")}
                      />
                      <span id="emailErrorMessage" className="errors"></span>
                    </div>
                    <div className="myAccount__inputGroup">
                      <label>Password:</label>
                      <br />
                      <input
                        type="password"
                        placeholder="password"
                        id="password"
                        {...register("password")}
                      />
                      <span id="passwordErrorMessage" className="errors"></span>
                    </div>
                  </div>
                  <div className="myAccount__buttons">
                    {/* <a href="index.html" class="myAccount__cancel">
                Cancel
              </a> */}
                    <div>
                      <Button
                        className="button myAccount__cancel"
                        type="button"
                        onClick={() => onSubmit("cancel")}
                      >
                        Cancel
                      </Button>
                    </div>
                    <div>
                      <Button
                        type="submit"
                        className="button myAccount__btn"
                        onClick={handleSubmit((data) =>
                          onSubmit("submit", data)
                        )}
                      >
                        SUBMIT
                      </Button>
                    </div>
                  </div>
                </form>
                <span
                  id="successfulMessage"
                  className="successfulMessage"
                ></span>
              </div>
            </section>
          </>
        ) : (
          <div className="not-logged-in">
            <p>
              Please <span onClick={handleLogin}>Log in </span> to view this
              page
            </p>
            {/* You can also add a link to the login page if needed */}
            {/* <Link to="/signin">Login</Link> */}
          </div>
        )}
      </main>
    </>
  );
};

export default Profile;
