import React from "react";
import "../styles/Frame1000007590.css";

const Frame1000007590 = ({ leaveType = "Medical Leave" }) => {
  const leaveData = {
    leaveType: leaveType,
    appliedDate: "30-June-2025",
    leaveFrom: "18-Aug-2025",
    leaveTo: "20-Oct-2025",
    refDate: "16-Aug-2025",
    noOfDays: "60"
  };

  return (
    <div className="frame-1000007590">
      <div className="content-header">
        <h3 className="leave-list-title">Leave List</h3>
      </div>
      
      <div className="table-container">
        <div className="table-wrapper">
          <div className="table-header">
            <div className="header-row">
              <div className="header-cell leave-type">Leave Type</div>
              <div className="header-cell applied-date">Applied Date</div>
              <div className="header-cell leave-from">Leave From</div>
              <div className="header-cell leave-to">Leave To</div>
              <div className="header-cell ref-date">Ref Date</div>
              <div className="header-cell no-of-days">No of Days</div>
            </div>
            <div className="separator"></div>
          </div>
          
          <div className="table-body">
            <div className="data-row">
              <div className="data-cell leave-type">{leaveData.leaveType}</div>
              <div className="data-cell applied-date">{leaveData.appliedDate}</div>
              <div className="data-cell leave-from">{leaveData.leaveFrom}</div>
              <div className="data-cell leave-to">{leaveData.leaveTo}</div>
              <div className="data-cell ref-date">{leaveData.refDate}</div>
              <div className="data-cell no-of-days">{leaveData.noOfDays}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame1000007590;
