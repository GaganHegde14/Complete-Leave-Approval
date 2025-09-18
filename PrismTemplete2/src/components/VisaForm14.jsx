import React from "react";
import "../styles/RequiredInfo.css";
import "../styles/formControls.css";
import ApplyHeading from "./ApplyHeading";
import LeaveTable13 from "./LeaveTable14";

const VisaForm13 = () => {
  return (
    <div className="visa-form">
      <ApplyHeading />
      <div style={{ marginTop: "20px" }}>
        <LeaveTable13 />
      </div>
    </div>
  );
};

export default VisaForm13;
