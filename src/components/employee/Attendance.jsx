import React from "react";
import { Pie } from "react-chartjs-2";
import "./attendance.scss";

const Attendance = () => {
  const data = {
    labels: ["days attended", "days absent"],
    datasets: [
      {
        label: "Attendance",
        data: [11, 1],
        backgroundColor: ["green", "red"],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <div className="attendance">
      <div className="title">
        <h4>Attendance Statistics</h4>
      </div>
      <div className="content">
        <div className="stats">
          <span>
            <h5>Days attended: </h5>
            <p>11</p>
          </span>
          <span>
            <h5>Days absent: </h5>
            <p>1</p>
          </span>
          <span>
            <h5>Accummulated leave days: </h5>
            <p>14</p>
          </span>
        </div>
        <div className="chart">
          <Pie data={data} />
        </div>
      </div>
    </div>
  );
};

export default Attendance;
