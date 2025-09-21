import React from "react";

const UserInfo = ({ name, genId, email, onNameClick, onEmailClick }) => {
  return (
    <div className="user-info" style={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <button
        type="button"
        onClick={onNameClick}
        style={{
          background: "none",
          border: "none",
          padding: 0,
          margin: 0,
          color: "#111827",
          fontSize: 16,
          fontWeight: 600,
          textAlign: "left",
          cursor: onNameClick ? "pointer" : "default",
        }}
      >
        {name}
      </button>
      <span style={{ color: "#6b7280", fontSize: 12 }}>Gen ID: {genId}</span>
      <button
        type="button"
        onClick={onEmailClick}
        style={{
          background: "none",
          border: "none",
          padding: 0,
          margin: 0,
          color: "#2563eb",
          fontSize: 12,
          textAlign: "left",
          cursor: onEmailClick ? "pointer" : "default",
        }}
      >
        {email}
      </button>
    </div>
  );
};

export default UserInfo;
