import React from "react";

const ProfileCard = ({ designation, division, manager, onDesignationClick, onDivisionClick, onManagerClick }) => {
  return (
    <div className="profile-card" style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 8 }}>
      <span style={{ color: "#6b7280", fontSize: 12 }}>Designation</span>
      <button
        type="button"
        onClick={onDesignationClick}
        style={{ background: "none", border: "none", padding: 0, margin: 0, textAlign: "left", color: "#111827", fontSize: 14, cursor: onDesignationClick ? "pointer" : "default" }}
      >
        {designation}
      </button>

      <span style={{ color: "#6b7280", fontSize: 12 }}>Division</span>
      <button
        type="button"
        onClick={onDivisionClick}
        style={{ background: "none", border: "none", padding: 0, margin: 0, textAlign: "left", color: "#111827", fontSize: 14, cursor: onDivisionClick ? "pointer" : "default" }}
      >
        {division}
      </button>

      <span style={{ color: "#6b7280", fontSize: 12 }}>Manager</span>
      <button
        type="button"
        onClick={onManagerClick}
        style={{ background: "none", border: "none", padding: 0, margin: 0, textAlign: "left", color: "#111827", fontSize: 14, cursor: onManagerClick ? "pointer" : "default" }}
      >
        {manager}
      </button>
    </div>
  );
};

export default ProfileCard;
