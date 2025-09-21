import React, { useState } from "react";
import "../styles/LeaveApprovalForm2.css";
import Frame1000007590 from "./Frame1000007590";
import AttachmentSection from "./AttachmentSection";
import ReasonCommentSection from "./ReasonCommentSection";
import ActionButtons from "./ActionButtons";
import ViewPolicies from "./ViewPolicies";
import ApplyOrCancelIcon from "../assets/apply_or_cancel.svg";
import TransferWfButton from "../assets/transfer-wf.svg";
import UploadIconMaternity from "../assets/upload_icon_maternity.svg";
import TransferWorkflowBanner from "./TransferWorkflowBanner";

const LeaveApprovalForm4 = () => {
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

      <Frame1000007590 leaveType="Maternity Leave" />
      <AttachmentSection defaultFileName="Maternity Certificate.pdf" uploadIcon={UploadIconMaternity} />
      <ReasonCommentSection />
      <ActionButtons onReject={handleReject} onApprove={handleApprove} />

      <div className="transfer-header">
        <TransferWorkflowBanner />
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
          <span className={`radio-label ${requestType === "reviewAndSendBack" ? "selected" : ""}`}>
            Review and send back to Me (No Data Modification)
          </span>
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
      <textarea className="comment-textarea" placeholder="" rows={3} />

      <div className="transfer-button-container">
        <img src={TransferWfButton} alt="Transfer WF" className="transfer-wf-button" />
      </div>

      <ViewPolicies />
    </div>
  );
};

export default LeaveApprovalForm4;
