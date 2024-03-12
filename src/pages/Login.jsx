import React from "react";
import feedly from "../assets/feedly.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./login.scss";

const Login = () => {
  const schema = yup.object().shape({
    Email: yup.string().required("Username is required"),
    Password: yup.string().required("Password is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div className="loginpage">
      <div className="form">
        <div className="title">
          <img src={feedly} alt="no-logo" />
        </div>
        <form action="" className="login">
          <h1>Welcome...</h1>
          <input
            type="text"
            name="Email"
            id="Email"
            placeholder="Enter your Email..."
            {...register("Email")}
          />
          <p>{errors.Email?.message}</p>
          <input
            type="password"
            name="Password"
            id="Password"
            placeholder="Enter your Password..."
            {...register("Password")}
          />
          <p>{errors.Password?.message}</p>
          <input type="submit" value="Login" className="submit" />
        </form>
      </div>
    </div>
  );
};

export default Login;
