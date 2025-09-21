import React from "react";
import "../styles/ActionButtons.css";
import RejectIcon from "../assets/reject.svg";
import ApproveIcon from "../assets/approve.svg";

const ActionButtons = ({ onReject, onApprove }) => {
  return (
    <div className="action-buttons-container">
      <img 
        src={RejectIcon}
        alt="Reject" 
        className="action-button reject-svg"
        onClick={onReject}
      />
      <img 
        src={ApproveIcon}
        alt="Approve" 
        className="action-button approve-svg"
        onClick={onApprove}
      />
    </div>
  );
};

export default ActionButtons;
