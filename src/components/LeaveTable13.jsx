import React from 'react';
import styles from './LeaveTable12.module.css';

const LeaveTable12 = () => {
  return (
    <div className={styles.leaveTableWrapper}>
      <div className={styles.headerSection}>
        <span className={styles.leaveListTitle}>Leave List</span>
      </div>
      <div className={styles.tableSection}>
        <div className={styles.tableHeaderRow}>
          <div className={`${styles.tableHeaderCell} ${styles.firstCell}`}>Leave Type</div>
          <div className={styles.tableHeaderCell}>Leave From</div>
          <div className={styles.tableHeaderCell}>Leave To</div>
          <div className={styles.tableHeaderCell}>CL for Month</div>
        </div>
        <div className={styles.tableRow}>
          <div className={`${styles.tableCell} ${styles.firstCell}`}>Special Leave for Women</div>
          <div className={styles.tableCell}>02-May-2025</div>
          <div className={styles.tableCell}>03-Aug-2025</div>
          <div className={styles.tableCell}>March</div>
        </div>
      </div>
    </div>
  );
};

export default LeaveTable12;
