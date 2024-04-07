import React from "react";
import "./payables.scss";

const Payables = () => {
  return (
    <div className="payroll">
      <h4>Payroll</h4>
      <div className="table">
        <div className="debit">
          <div className="gross-pay row">
            <div className="numbers">
              <h5>Basic Salary:</h5>
              <p>50,000 KES</p>
            </div>
            <div className="button">
              <button>Edit</button>
            </div>
          </div>
          <div className="overtimehrs row">
            <div className="numbers">
              <h5>Overtime hours:</h5>
              <p>4</p>
            </div>
            <div className="button">
              <button>Edit</button>
              <button>Approve</button>
            </div>
          </div>
          <div className="overtime-rate row">
            <div className="numbers">
              <h5>Overtime Rate:</h5>
              <p>500 KES</p>
            </div>
            <div className="button">
              <button>Edit</button>
            </div>
          </div>
        </div>
        <div className="credit">
          <div className="advance row">
            <div className="numbers">
              <h5>Advance:</h5>
              <p>0</p>
            </div>
            <div className="button">
              <button>Edit</button>
              <button>Approve</button>
            </div>
          </div>
          <div className="deductions row">
            <h5>Deductions</h5>
            <div className="numberss">
              <div className="deduction">
                <h6>NHIF:</h6>
                <p>500</p>
              </div>
              <div className="deduction">
                <h6>NSSF:</h6>
                <p>1080</p>
              </div>
              <div className="deduction">
                <h6>PAYE:</h6>
                <p>8000</p>
              </div>
              <div className="deduction">
                <h6>Housing Allowance:</h6>
                <p>750</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="net-pay">
        <h5>Net Pay:</h5>
        <p>41,670 KES</p>
      </div>
    </div>
  );
};

export default Payables;
