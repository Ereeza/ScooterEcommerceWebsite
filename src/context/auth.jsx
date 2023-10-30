import { createContext, useState, useEffect } from "react";

import { toast } from "react-toastify";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Initialize user from local storage or an empty array if not found
    return JSON.parse(localStorage.getItem("user")) || [];
  });

  const [login, setLogin] = useState(() => {
    // Initialize user from local storage or an empty array if not found
    return JSON.parse(localStorage.getItem("login")) || "";
  });

  const [userError, setUserError] = useState(null);
  const [authenticatedUser, setAuthenticatedUser] = useState(null);

  const registerUser = (userData) => {
    // Check if the email already exists
    // const emailExists = users.some((user) => user.email === userData.email);

    // if (emailExists) {
    //   setUserError("Email already registered.");
    // } else {
    //   const updatedUsers = [...users, userData];
    //   setUsers(updatedUsers);
    //   setUserError(null); // Clear any previous error
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    toast.success("You have registered successfully.");
  };

  const loginUser = (userData) => {
    // const user = user.find(
    //   (user) => user.email === email && user.password === password
    // );

    if (userData.email === user.email && userData.password === user.password) {
      localStorage.setItem("login", true);
      setLogin(JSON.parse(localStorage.getItem("login")));
      toast.success("You have logged in successfully.");
      return;
    }
    toast.error("Credentials doesn't match");
  };

  const updateUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));

    setUser(user);
    toast.success("User updated successfully");
  };

  const signOut = () => {
    localStorage.setItem("login", false);
    setLogin(JSON.parse(localStorage.getItem("login")));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        registerUser,
        userError,
        loginUser,
        authenticatedUser,
        updateUser,
        signOut,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
