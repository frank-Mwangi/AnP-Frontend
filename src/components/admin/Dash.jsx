import React from "react";
import crowd from "../../assets/crowd.png";
import cash from "../../assets/cash-in-hand.png";
import time from "../../assets/time-to-pay.png";
import "./dash.scss";

const Dash = () => {
  return (
    <div className="dash">
      <h4>Dashboard</h4>
      <div className="cards">
        <div className="total card">
          <img src={crowd} alt="no-icon" />
          <span>
            <h4>24</h4>
            <h6>Total Employees</h6>
          </span>
        </div>
        <div className="average card">
          <img src={cash} alt="no-icon" />
          <span>
            <h4>
              50,000{" "}
              <span>
                <h6>KES</h6>{" "}
              </span>
            </h4>
            <h6>Average Salary</h6>
          </span>
        </div>
        <div className="outstanding card">
          <img src={time} alt="no-icon" />
          <span>
            <h4>
              1,000,000{" "}
              <span>
                <h6>KES</h6>
              </span>
            </h4>
            <h6>Total Outstanding</h6>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Dash;
