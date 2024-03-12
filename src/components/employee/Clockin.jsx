import React from "react";
import "./clockin.scss";

const Clockin = () => {
  return (
    <div>
      <form action="" className="clockin-form">
        <label htmlFor="EmployeeID">
          Enter your Employee ID:
          <input type="text" id="EmployeeID" name="EmployeeID" />
        </label>
        <button type="submit">Punch In</button>
      </form>
    </div>
  );
};

export default Clockin;
