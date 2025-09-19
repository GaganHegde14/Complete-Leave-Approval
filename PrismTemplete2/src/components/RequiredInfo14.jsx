import React from "react";
import "../styles/RequiredInfo.css";
import ClipboardIcon from "../assets/clipboard-green-24x26.svg";
import InfoSmall from "../assets/info-small-18x19.svg";
import VisaForm13 from "./VisaForm14";

const RequiredInfo13 = ({ onClick, className = "" }) => {
  return (
    <div className={`required-info-rectangle ${className}`}>
      <div className="required-info-header">
        <span
          className="required-info-title"
          style={{ display: "flex", alignItems: "center", gap: 8 }}
        >
          <img
            className="clipboard-icon"
            src={ClipboardIcon}
            width={24}
            height={26}
            alt="clipboard"
          />
          <span
            style={{
              fontSize: "20px",
              fontWeight: 600,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            Leave Report
            <img
              src={InfoSmall}
              width={18}
              height={19}
              alt="info"
              style={{ paddingTop: 2, paddingLeft: 2 }}
            />
          </span>
        </span>
      </div>
      <div className="worklet-details-card">
        <div className="form-sections-container">
          <VisaForm13 />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default RequiredInfo13;
