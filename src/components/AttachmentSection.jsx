import React from "react";
import UploadComponent from "./UploadComponent";
import "../styles/AttachmentSection.css";

const AttachmentSection = ({ defaultFileName, uploadIcon }) => {
  return (
    <div className="attachment-container">
      <h3 className="attachment-title">Attachment</h3>
      <UploadComponent defaultFileName={defaultFileName} uploadIcon={uploadIcon} />
    </div>
  );
};

export default AttachmentSection;
