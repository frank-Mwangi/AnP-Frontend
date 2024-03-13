import React from "react";
import feedly from "../assets/feedly.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./login.scss";
import { useNavigate } from "react-router-dom";
import { useLoginEmployeeMutation } from "../features/employeeApi";
import {
  ErrorToast,
  LoadingToast,
  SuccessToast,
  ToasterContainer,
} from "../components/Toaster";

const Login = () => {
  const [loginEmployee, { isLoading }] = useLoginEmployeeMutation();
  const navigate = useNavigate();
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

  const onSubmit = async (data) => {
    try {
      LoadingToast(true);
      const response = await loginEmployee(data).unwrap();
      console.log("Response: ", response);
      if (!response.error) {
        const { token, employee } = response;
        localStorage.setItem("token", token);
        localStorage.setItem("employeeDetails", JSON.stringify(employee));
        LoadingToast(false);
        SuccessToast("Login successful");
        employee.Admin ? navigate("/admindash") : navigate("/dashboard");
      } else {
        console.log(response.error.data.message);
        ErrorToast(response.error.data.message);
      }
    } catch (error) {
      LoadingToast(false);
      // console.log(error);
      ErrorToast(error.data.message);
    }
  };
  if (isLoading) {
    return <div>{LoadingToast(true)}</div>;
  }
  return (
    <div className="loginpage">
      <ToasterContainer />
      <div className="form">
        <div className="title">
          <img src={feedly} alt="no-logo" />
        </div>
        <form action="" className="login" onSubmit={handleSubmit(onSubmit)}>
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
