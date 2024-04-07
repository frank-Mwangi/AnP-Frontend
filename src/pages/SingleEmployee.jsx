import React from "react";
import logo from "../assets/feedly.png";
import avi from "../assets/Avatar.png";
import "./singleEmployee.scss";
import Payables from "../components/admin/Payables";
import Position from "../components/admin/Position";
import AttendanceStats from "../components/admin/AttendanceStats";

const SingleEmployee = () => {
  return (
    <div className="employee">
      <div className="nav">
        <div className="logo">
          <img src={logo} alt="no-icon" />
        </div>
        <div className="bio">
          <div className="avi">
            <img src={avi} alt="no-avi" />
          </div>
          <span>
            <h5>Jon Snow</h5>
            <h6>08 March, 2024</h6>
          </span>
        </div>
      </div>
      <AttendanceStats />
      <Payables />
      <Position />
    </div>
  );
};

export default SingleEmployee;
