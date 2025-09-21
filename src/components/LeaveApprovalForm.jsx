import React, { useState } from "react";
import Frame1000007590 from "./Frame1000007590";
import AttachmentSection from "./AttachmentSection";
import ReasonCommentSection from "./ReasonCommentSection";
import ActionButtons from "./ActionButtons";
import ViewPolicies from "./ViewPolicies";
import "../styles/LeaveApprovalForm.css";
import ApplyOrCancelIcon from "../assets/apply_or_cancel.svg";
import TransferWorkflowIcon from "../assets/transfer-workflow.svg";
import TransferWfIcon from "../assets/transfer-wf.svg";

const LeaveApprovalForm = () => {
  const [requestType, setRequestType] = useState("transferTo");
  const [transferTo, setTransferTo] = useState("Krishna@Samsung.com");

  const handleReject = () => {
    console.log("Reject clicked");
  };

  const handleApprove = () => {
    console.log("Approve clicked");
  };

  return (
    <div className="leave-approval-form">
      <div className="section-header">
        <div className="section-title-group">
          <img src={ApplyOrCancelIcon} alt="Apply/Cancel" className="section-icon" />
          <h3 className="section-title">Apply/Cancel Leave Approval</h3>
        </div>
      </div>
      
      <Frame1000007590 />
      <AttachmentSection defaultFileName="Medical Certificate.pdf" />
      <ReasonCommentSection />
      <ActionButtons onReject={handleReject} onApprove={handleApprove} />
      
      <div className="transfer-header">
        <img src={TransferWorkflowIcon} alt="Transfer Workflow" className="transfer-workflow-icon" />
      </div>

      <h4 className="section-title">Request Type</h4>
      <div className="radio-group">
        <label className="radio-option">
          <input
            type="radio"
            name="requestType"
            value="transferTo"
            checked={requestType === "transferTo"}
            onChange={(e) => setRequestType(e.target.value)}
          />
          <span className={`radio-label ${requestType === "transferTo" ? "selected" : ""}`}>Transfer To</span>
        </label>
        <label className="radio-option">
          <input
            type="radio"
            name="requestType"
            value="reviewAndSendBack"
            checked={requestType === "reviewAndSendBack"}
            onChange={(e) => setRequestType(e.target.value)}
          />
          <span className={`radio-label ${requestType === "reviewAndSendBack" ? "selected" : ""}`}>Review and send back to Me (No Data Modification)</span>
        </label>
      </div>

      <div className="transfer-to-section">
        <label className="field-label">Transfer To</label>
        <input
          type="text"
          className="transfer-input"
          value={transferTo}
          onChange={(e) => setTransferTo(e.target.value)}
          placeholder="Enter email address"
        />
      </div>

      <label className="field-label">Comment (Max 500 Chars)</label>
      <textarea
        className="comment-textarea"
        placeholder="I have an important personal matter to attend at my Home town."
        rows={3}
      />

      <div className="transfer-button-container">
        <img src={TransferWfIcon} alt="Transfer WF" className="transfer-wf-button" />
      </div>
      
      <ViewPolicies />
    </div>
  );
};

export default LeaveApprovalForm;
