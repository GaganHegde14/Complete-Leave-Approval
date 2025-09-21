import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/RequiredInfo.css';
import '../styles/formControls.css';
import ApplyHeading from './ApplyHeading';
import LeaveTable3 from './LeaveTable3';
import LeaveTable4 from './LeaveTable4';
import LeaveTable5 from './LeaveTable5';
import LeaveTable6 from './LeaveTable6';
import LeaveTable7 from './LeaveTable7';
import LeaveTable8 from './LeaveTable8';
import LeaveTable9 from './LeaveTable9';
import LeaveTable10 from './LeaveTable10';
import LeaveTable11 from './LeaveTable11';
import LeaveTable12 from './LeaveTable12';
import LeaveTable from './LeaveTable';

const VisaForm = () => {
  const location = useLocation();
  const isRoute2 = location.pathname === '/2';
  const isRoute3 = location.pathname === '/3';
  const isRoute4 = location.pathname === '/4';
  const isRoute5 = location.pathname === '/5';
  const isRoute6 = location.pathname === '/6';
  const isRoute7 = location.pathname === '/7';
  const isRoute8 = location.pathname === '/8';
  const isRoute9 = location.pathname === '/9';
  const isRoute10 = location.pathname === '/10';
  const isRoute11 = location.pathname === '/11';
  const isRoute12 = location.pathname === '/12';

  return (
    <div className="visa-form">
      <ApplyHeading />
      {isRoute2 && (
        <div style={{ marginTop: '24px' }}>
          <LeaveTable />
        </div>
      )}
      {isRoute3 && (
        <div style={{ marginTop: '24px' }}>
          <LeaveTable3 />
        </div>
      )}
      {isRoute4 && (
        <div style={{ marginTop: '24px' }}>
          <LeaveTable4 />
        </div>
      )}
      {isRoute5 && (
        <div style={{ marginTop: '24px' }}>
          <LeaveTable5 />
        </div>
      )}
      {isRoute6 && (
        <div style={{ marginTop: '24px' }}>
          <LeaveTable6 />
        </div>
      )}
      {isRoute7 && (
        <div style={{ marginTop: '24px' }}>
          <LeaveTable7 />
        </div>
      )}
      {isRoute8 && (
        <div style={{ marginTop: '24px' }}>
          <LeaveTable8 />
        </div>
      )}
      {isRoute9 && (
        <div style={{ marginTop: '24px' }}>
          <LeaveTable9 />
        </div>
      )}
      {isRoute10 && (
        <div style={{ marginTop: '24px' }}>
          <LeaveTable10 />
        </div>
      )}
      {isRoute11 && (
        <div style={{ marginTop: '24px' }}>
          <LeaveTable11 />
        </div>
      )}
      {isRoute12 && (
        <div style={{ marginTop: '24px' }}>
          <LeaveTable12 />
        </div>
      )}
    </div>
  );
};

export default VisaForm;
