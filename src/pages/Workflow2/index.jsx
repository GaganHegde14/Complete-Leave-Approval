import React from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import EmployeeProfile from "../../components/EmployeeProfile";
import ViewPolicies from "../../components/ViewPolicies";
import LeaveApprovalForm2 from "../../components/LeaveApprovalForm2";
import "../../styles/Avatars.css";
import "../../styles/RequiredInfo.css";
import ClipboardIcon from "../../assets/clipboard-green-24x26.svg";
import InfoSmall from "../../assets/info-small-18x19.svg";

const Workflow2Page = () => {
  const employeeData = {
    initials: "MK",
    name: "Manoj Kandan M",
    genId: "255048878",
    email: "Manoj.kandan@partner.samsung.com",
    designation: "Outsourcing",
    division: "Tech Strategy Team\\Smart Infra Group\\Information System & AI Tools",
    manager: "Ravindra S R (06786669)",
    isOnline: true,
  };

  return (
    <>
      <Navbar />
      <div className="avatars-container">
        <Header
          breadcrumb="My Workspace > Leave Summary"
          title="Leave Summary - Report"
        />
        <EmployeeProfile employee={employeeData} />
        <div className="required-info-rectangle">
          <div className="required-info-header">
            <span className="required-info-title" style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <img className="clipboard-icon" src={ClipboardIcon} width={24} height={26} alt="clipboard" />
              <span style={{ fontSize: "20px", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 8 }}>
                Leave Report
                <img src={InfoSmall} width={18} height={19} alt="info" style={{ paddingTop: 2, paddingLeft: 2 }} />
              </span>
            </span>
          </div>
          <div className="worklet-details-card">
            <div className="form-sections-container">
              <LeaveApprovalForm2 />
              <br />
              <br />
              <div style={{ marginTop: 8 }}>
                <ViewPolicies />
              </div>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Workflow2Page;
