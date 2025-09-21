import React from "react";
import Bg from "../assets/transfer-workflow-bg.svg";
import Symbol from "../assets/transfer-workflow-symbol.svg";
import Chevron from "../assets/chevron-down.svg";
import "../styles/TransferWorkflowBanner.css";

const TransferWorkflowBanner = ({ className = "" }) => {
  return (
    <div className={`tw-banner ${className}`} role="img" aria-label="Transfer Workflow">
      <img src={Bg} alt="" className="tw-bg" />
      <img src={Symbol} alt="" className="tw-symbol" />
      <span className="tw-title">Transfer Workflow</span>
      <img src={Chevron} alt="" className="tw-chevron" />
    </div>
  );
};

export default TransferWorkflowBanner;
