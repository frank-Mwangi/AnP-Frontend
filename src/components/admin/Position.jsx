import React from "react";
import deleteIcon from "../../assets/delete.png";
import "./position.scss";

const Position = () => {
  return (
    <div className="position">
      <h4>Employee Position:</h4>
      <h6>Senior Developer</h6>
      <button>Edit</button>
      <button className="delete">
        <span>
          <img src={deleteIcon} alt="no-icon" />
          <p>Remove Employee</p>
        </span>
      </button>
    </div>
  );
};

export default Position;
