import React from "react";
import "../styles/PaternityLeave.css";
import Header from "./Header";
import EmployeeProfile from "./EmployeeProfile";
import RequiredInfo from "./LeaveApprovalHeader";
import TransferWorkflow from "./TransferWorkflow";
import applyIcon from "../assets/svg/applyicon.svg";

const PaternityLeave = () => {
  // Event handlers for all clickable components
  const handleBackClick = () => {
    console.log("Back button clicked");
    // Add your navigation logic here
  };

  const handleClockClick = () => {
    console.log("Clock icon clicked");
    // Add your clock/time logic here
  };

  const handleAvatarClick = () => {
    console.log("Avatar clicked");
    // Add your avatar click logic here
  };

  const handleNameClick = () => {
    console.log("Name clicked");
    // Add your name click logic here
  };

  const handleEmailClick = () => {
    console.log("Email clicked");
    // Add your email click logic here
  };

  const handleRequiredInfoClick = () => {
    console.log("Required Information clicked");
    // Add your required info click logic here
  };

  const handleDesignationClick = () => {
    console.log("Designation clicked");
    // Add your designation click logic here
  };

  const handleDivisionClick = () => {
    console.log("Division clicked");
    // Add your division click logic here
  };

  const handleLocationClick = () => {
    console.log("Location clicked");
    // Add your location click logic here
  };

  const handleManagerClick = () => {
    console.log("Manager clicked");
    // Add your manager click logic here
  };

  const handleRejectClick = () => {
    console.log("Reject button clicked");
    // Add your reject logic here
  };

  const handleApprovalClick = () => {
    console.log("Approval button clicked");
    // Add your approval logic here
  };

  const handleTransferWFClick = () => {
    console.log("Transfer WF clicked");
    // Add your transfer workflow logic here
  };

  const handleViewPoliciesClick = () => {
    console.log("View Policies clicked");
    // Add your view policies logic here
  };

  // Employee data object
  const employeeData = {
    initials: "MK",
    name: "Manoj Kandan M",
    genId: "255048778",
    email: "Manoj.kandan@partner.samsung.com",
    designation: "Outsourcing",
    division:
      "Tech Strategy Team\\Smart Infra Group\\Information System & AI Tools",
    location: "Bangalore",
    manager: "Ravindra S R (06786669)",
    isOnline: true,
  };

  return (
    <div className="paternity-leave-container">
      <Header
        breadcrumb="My Workspace > Leave Approval Request"
        title="Leave Request or Cancel - Manager Approval"
        onBackClick={handleBackClick}
        onClockClick={handleClockClick}
      />

      <EmployeeProfile
        employee={employeeData}
        onAvatarClick={handleAvatarClick}
        onNameClick={handleNameClick}
        onEmailClick={handleEmailClick}
        onDesignationClick={handleDesignationClick}
        onDivisionClick={handleDivisionClick}
        onLocationClick={handleLocationClick}
        onManagerClick={handleManagerClick}
      />

      <RequiredInfo onClick={handleRequiredInfoClick} />

      <div className="apply-leave-section">
        <div className="apply-leave-content">
          <div className="apply-approval-section">
            <div className="section-header">
              <img src={applyIcon} alt="Apply" className="apply-icon" />
              <span className="section-title">Paternity Leave Management</span>
            </div>

            <div className="leave-list-section">
              <h3 className="leave-list-title">Leave List</h3>
              <div className="leave-table-container">
                <table className="leave-table">
                  <thead>
                    <tr>
                      <th>Leave Type</th>
                      <th>Applied Date</th>
                      <th>Leave From</th>
                      <th>Leave To</th>
                      <th>Ref. Date</th>
                      <th>No of Days</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Paternity Leave</td>
                      <td>30-June-2025</td>
                      <td>02-May-2025</td>
                      <td>15-Aug-2025</td>
                      <td>10-Aug-2025</td>
                      <td>182</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="reason-section">
              <label className="reason-label">Reason (Max 100 Chars)</label>
              <textarea
                className="reason-textarea readonly-textarea"
                placeholder="I have an important personal matter to attend at my Home town."
                defaultValue="I have an important personal matter to attend at my Home town."
                maxLength="100"
                readOnly
              />
            </div>

            <div className="comment-section">
              <label className="comment-label">Comment (Max 500 Chars)</label>
              <textarea
                className="comment-textarea"
                placeholder="I have an important personal matter to attend at my Home town."
                defaultValue="I have an important personal matter to attend at my Home town."
                maxLength="500"
              />
            </div>

            <div className="action-buttons">
              <button className="reject-button" onClick={handleRejectClick}>
                Reject
              </button>
              <button className="approval-button" onClick={handleApprovalClick}>
                Approval
              </button>
            </div>

            <TransferWorkflow
              onTransferWFClick={handleTransferWFClick}
              onViewPoliciesClick={handleViewPoliciesClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaternityLeave;
