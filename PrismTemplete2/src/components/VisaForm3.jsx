import React from 'react';
import '../styles/RequiredInfo.css';
import '../styles/formControls.css';
import ApplyHeading from './ApplyHeading';
import LeaveTable3 from './LeaveTable3';

const VisaForm3 = () => {
  return (
    <div className="visa-form">
      <ApplyHeading />
      <div style={{ marginTop: '20px' }}>
        <LeaveTable3 />
      </div>
    </div>
  );
};

export default VisaForm3;