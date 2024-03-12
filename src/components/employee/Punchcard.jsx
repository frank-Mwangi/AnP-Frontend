import React from "react";
import left from "../../assets/chevron-left.png";
import right from "../../assets/chevron-right.png";
import calendar from "../../assets/calendar.png";
import "./punchcard.scss";

const Punchcard = () => {
  return (
    <div className="punchcard">
      <div className="month">
        <img src={left} alt="no-chev" />
        <span>
          <img src={calendar} alt="no-icon" />
          <h5>July 2024</h5>
        </span>
        <img src={right} alt="no-icon" />
      </div>
      <div className="schedule">
        <h5>Schedule:</h5>
        <p>Day Shift</p>
      </div>

      <div className="table">
        <table>
          <tr className="head">
            <th>Date</th>
            <th>Clock In</th>
            <th>Clock Out</th>
            <th>Work Hours</th>
          </tr>
          <tr>
            <td>Wed, 19th July 2024</td>
            <td>09:00</td>
            <td>...</td>
            <td>...</td>
          </tr>
          <tr>
            <td>Tue, 18th July 2024</td>
            <td>08:54</td>
            <td>17:00</td>
            <td>8:06</td>
          </tr>
          <tr>
            <td>Mon, 17th July 2024</td>
            <td>09:20</td>
            <td>17:20</td>
            <td>8:00</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Punchcard;
