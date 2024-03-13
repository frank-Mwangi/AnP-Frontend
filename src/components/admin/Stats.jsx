import React from "react";
import "./stats.scss";

const Stats = () => {
  return (
    <div className="stats">
      <h4>Employee Stats</h4>
      <div className="employees-list">
        <table>
          <thead>
            <td>Name</td>
            <td>Position</td>
            <td>Schedule</td>
            <td></td>
          </thead>
          <td>
            <tr>
              <td className="first">
                <p>Cersei Lannister</p>
              </td>
              <td>Senior Developer</td>
              <td>Day Shift</td>
              <td>
                <span>See more ...</span>{" "}
              </td>
            </tr>
          </td>
        </table>
      </div>
    </div>
  );
};

export default Stats;
