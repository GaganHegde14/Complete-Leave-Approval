import React from "react";
import "../styles/Header.css";
import ClockIcon from "../assets/svg/clockicon.svg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Header = ({
  breadcrumb,
  title,
  onBackClick,
  onClockClick,
  showBackArrow = true,
  showClockIcon = true,
}) => {
  // Check if title contains " - Manager Approval" to apply different styling
  const renderTitle = () => {
    if (
      title &&
      typeof title === "string" &&
      title.includes(" - Manager Approval")
    ) {
      const parts = title.split(" - Manager Approval");
      return (
        <h1 className="page-title">
          {parts[0]}
          <span className="manager-approval-text"> - Manager Approval</span>
        </h1>
      );
    }
    return <h1 className="page-title">{title || ""}</h1>;
  };

  return (
    <div className="header-section">
      {breadcrumb && (
        <div
          className="breadcrumb"
          onClick={() => onBackClick && onBackClick()}
        >
          {breadcrumb}
        </div>
      )}

      <div className="main-header">
        {showBackArrow && (
          <div className="back-arrow" onClick={onBackClick}>
            <ArrowBackIcon />
          </div>
        )}
        {renderTitle()}
        {showClockIcon && (
          <div className="clock-icon" onClick={onClockClick}>
            <img src={ClockIcon} alt="Clock" width="30" height="30" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
