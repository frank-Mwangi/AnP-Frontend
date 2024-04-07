import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import "./attendanceStats.scss";

const AttendanceStats = () => {
  const data = {
    labels: ["1st", "2nd", "3rd", "4th", "5th", "8th"],
    datasets: [
      {
        label: "Time arrived",
        data: [925, 900, 910, 845, 902, 928].map((time) => {
          const hours = Math.floor(time / 100);
          const minutes = time % 100;
          return `${hours.toString().padStart(2, "0")}:${minutes
            .toString()
            .padStart(2, "0")}`;
        }),
        backgroundColor: [
          "orange",
          "green",
          "lightGreen",
          "limeGreen",
          "brown",
          "maroon",
        ],
        hoverOffset: 4,
      },
    ],
  };
  const daysAttendedData = {
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
    <div className="attendance-stats">
      <h4>Attendance Stats</h4>
      <div className="charts">
        <Bar data={data} className="bar-graph" />
        <Pie data={daysAttendedData} className="pie-chart" />
      </div>
    </div>
  );
};

export default AttendanceStats;
