import React from "react";
import logo from "../../assets/feedly.png";
import profile from "../../assets/admin-profile.png";
import overview from "../../assets/admin-overview.png";
import power from "../../assets/power.png";
import avi from "../../assets/Avatar.png";
import plus from "../../assets/plus.png";
import notification from "../../assets/notification.png";
import "./adminDashboard.scss";
import { useNavigate } from "react-router-dom";
import Dash from "./Dash";
import Stats from "./Stats";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const admin = JSON.parse(localStorage.getItem("employeeDetails"));
  const currentDate = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day = currentDate.getDate();
  const monthIndex = currentDate.getMonth();
  const year = currentDate.getFullYear();

  const today = `${day} ${months[monthIndex]}, ${year}`;
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div className="admin-dash">
      <div className="sidebar">
        <div className="top">
          <img src={logo} alt="no-logo" />
        </div>
        <div className="major">
          <div className="menu">
            <span>
              <img src={overview} alt="no-icon" />
              <h3>Overview</h3>
            </span>
            <span>
              <img src={profile} alt="no-icon" />
              <h3>Profile</h3>
            </span>
          </div>
          <div className="tail" onClick={handleLogout}>
            <span>
              <img src={power} alt="no-icon" />
              <h3>Logout</h3>
            </span>
          </div>
        </div>
      </div>
      <div className="main-container">
        <div className="navbar">
          <div className="welcome">
            <h4>Welcome, {admin.FirstName}!</h4>
            <p>{today}</p>
          </div>
          <div className="navicons">
            <span>
              <img src={notification} alt="no-icon" className="notif" />
            </span>
            <span>
              <img src={admin.PhotoURL} alt="no-avi" className="avi" />
            </span>
          </div>
        </div>
        <div className="components">
          <Dash />
          <div className="register">
            <button>
              <span>
                <img src={plus} alt="no-icon" />
                <p>Add Employee</p>
              </span>
            </button>
          </div>
          <Stats />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
