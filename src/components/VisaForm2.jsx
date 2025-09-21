import React from 'react';
import '../styles/RequiredInfo.css';
import '../styles/formControls.css';
import ApplyHeading from './ApplyHeading';
import LeaveTable from './LeaveTable';

const VisaForm2 = () => {
  return (
    <div className="visa-form">
      <ApplyHeading />
      <div style={{ marginTop: '20px' }}>
        <LeaveTable />
      </div>
    </div>
  );
};

export default VisaForm2;