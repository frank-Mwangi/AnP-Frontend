import React from "react";
import logo from "../assets/feedly.png";
import menu from "../assets/menu.png";
import overview from "../assets/overview.png";
import notification from "../assets/notification.png";
import clockin from "../assets/clockin.png";
import "./employeeDashboard.scss";
import { useState } from "react";
import Profile from "../components/employee/Profile";
import Punchcard from "../components/employee/Punchcard";
import Attendance from "../components/employee/Attendance";
import Payroll from "../components/employee/Payroll";

const EmployeeDashboard = () => {
  const [clockIn, setClockIn] = useState(false);
  return (
    <section className="dashboard">
      <div className="navbar">
        <div className="top">
          <img src={logo} alt="no-logo" />
          <img src={menu} alt="no-menu" />
        </div>
        <div className="navicons">
          <span>
            <img src={notification} alt="no-notif" />
          </span>
          <span>
            <h4>ahmed@a&p.com</h4>
          </span>
        </div>
      </div>
      <div className="container">
        <div className="sidebar">
          <div className="menu">
            <div className="overview">
              <img src={overview} alt="no-icon" />
              <h3>Overview</h3>
            </div>
            <div className="clock">
              <img src={clockin} alt="no-icon" />
              <h3>{clockIn ? "Clock Out" : "Clock In"}</h3>
            </div>
          </div>
        </div>
        <div className="main">
          <div className="data-container">
            <Profile />
            <div className="data">
              <Punchcard />
              <Attendance />
              <Payroll />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeeDashboard;
