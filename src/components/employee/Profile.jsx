import React from "react";
import avatar from "../../assets/Avatar.png";
import email from "../../assets/email.png";
import telephone from "../../assets/telephone.png";
import location from "../../assets/location.png";
import chevronDown from "../../assets/chevron-down.png";
import "./profile.scss";

const Profile = () => {
  const employee = JSON.parse(localStorage.getItem("employeeDetails"));

  return (
    <div className="profile">
      <div className="ppic">
        <img src={employee.PhotoURL} alt="no-avi" />
      </div>
      <div className="name">
        <h3>
          {employee.FirstName} {employee.LastName}
        </h3>
        <p>{employee.Position}</p>
        <button>Edit Profile</button>
      </div>
      <div className="contact">
        <div className="email">
          <img src={email} alt="no-icon" />
          <p>{employee.Email}</p>
        </div>
        <div className="tel">
          <img src={telephone} alt="no-icon" />
          <p>{employee.Contact}</p>
        </div>
        <div className="address">
          <img src={location} alt="no-icon" />
          <p>{employee.Address}</p>
        </div>
      </div>
      <div className="more">
        <span>
          <p>Show more details</p>
          <img src={chevronDown} alt="no-icon" />
        </span>
      </div>
    </div>
  );
};

export default Profile;
