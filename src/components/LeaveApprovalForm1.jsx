import React from 'react';
import Frame1000007590 from './Frame1000007590';
import AttachmentSection from './AttachmentSection';
import ReasonCommentSection from './ReasonCommentSection';
import ActionButtons from './ActionButtons';

const LeaveApprovalForm1 = ({ onReject, onApprove }) => {
  return (
    <div className="leave-approval-form">
      <div className="leave-details">
        <div className="leave-details-header">
          <h3>Leave Details</h3>
          <div className="view-policies">
            <a href="/policies" className="view-policies-link">View Policies</a>
          </div>
        </div>
      </div>

      <Frame1000007590 leaveType="Medical Leave" />
      <AttachmentSection defaultFileName="Medical Certificate.pdf" />
      
      <ReasonCommentSection />
      <ActionButtons onReject={onReject} onApprove={onApprove} />
    </div>
  );
};

export default LeaveApprovalForm1;
