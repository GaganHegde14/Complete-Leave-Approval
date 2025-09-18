import React from 'react';
import Header from './Header';
import AvatarProfile from './AvatarProfile';
import RequiredInfo3 from './RequiredInfo3';
import '../styles/Avatars.css';

const UserProfileSection3 = () => {
  return (
    <div className="avatars">
      <div className="avatars-1 required-info-row">
        <div className="avatar-column required-info-column">
          <div className="header-wrapper">
            <Header />
          </div>
          <AvatarProfile />
        </div>
        <RequiredInfo3 className="required-info-column" />
      </div>
    </div>
  );
};

export default UserProfileSection3;