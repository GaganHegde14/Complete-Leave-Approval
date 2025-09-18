import React from 'react';
import '../styles/RequiredInfo.css';
import '../styles/formControls.css';
import ApplyHeading from './ApplyHeading';
import LeaveTable12 from './LeaveTable13';

const VisaForm12 = () => {
  return (
    <div className="visa-form">
      <ApplyHeading />
      <div style={{ marginTop: '20px' }}>
        <LeaveTable12 />
      </div>
    </div>
  );
};

export default VisaForm12;
