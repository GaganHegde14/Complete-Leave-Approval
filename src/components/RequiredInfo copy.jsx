import React from "react";
import "../styles/RequiredInfo.css";
import CalendarIcon from "../assets/leave-approval-calender.svg";
import InfoIcon from "../assets/infoicon.svg";

const RequiredInfo = ({ onClick, className = "" }) => {
  return (
    <div className={`required-info ${className}`} onClick={onClick}>
      <img src={CalendarIcon} alt="Calendar" className="calendar-icon" />
      <span className="required-text">Leave Approval</span>
      <img src={InfoIcon} alt="Info" className="info-icon" />
    </div>
  );
};

export default RequiredInfo;
