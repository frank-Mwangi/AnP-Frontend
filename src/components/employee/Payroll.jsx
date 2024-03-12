import React from "react";
import "./payroll.scss";

const Payroll = () => {
  return (
    <div className="payroll">
      <div className="title">
        <span>
          <h4>Payroll</h4>
        </span>
      </div>
      <div className="content">
        <div className="col1">
          <div className="grosspay row">
            <h5>Basic Salary:</h5>
            <p>50,000 KES</p>
          </div>
          <div className="overtimehrs row">
            <h5>Overtime hours:</h5>
            <p>4</p>
          </div>
          <div className="overtimerate row">
            <h5>Overtime rate:</h5>
            <p>500</p>
          </div>
        </div>
        <div className="col2">
          <div className="advance row">
            <h5>Advance:</h5>
            <p>0</p>
            <button>Request</button>
          </div>
          <div className="deductions row">
            <h5>Deductions:</h5>
            <div className="categories">
              <span>
                <h6>NHIF:</h6>
                <p>500</p>
              </span>
              <span>
                <h6>NSSF:</h6>
                <p>1080</p>
              </span>
              <span>
                <h6>PAYE</h6>
                <p>8000</p>
              </span>
              <span>
                <h6>Housing Levy:</h6>
                <p>750</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="col1">
          <h5>Gross Salary:</h5>
          <p>52,0000 KES</p>
        </div>
        <div className="col2">
          <h5>Net Pay:</h5>
          <p>41,670</p>
        </div>
      </div>
    </div>
  );
};

export default Payroll;
