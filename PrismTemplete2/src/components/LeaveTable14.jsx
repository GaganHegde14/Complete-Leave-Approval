import React from 'react';
import styles from './LeaveTable13.module.css';
import pdfIcon from '../assets/pdf1.svg';
import downloadIcon from '../assets/pdf_download.svg';

const LeaveTable13 = () => {
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
          <div className={styles.tableHeaderCell}>No of 1Days</div>
          <div className={styles.tableHeaderCell}>Attachment</div>
        </div>
        <div className={styles.tableRow}>
          <div className={`${styles.tableCell} ${styles.firstCell}`}>Maternity Extension</div>
          <div className={styles.tableCell}>02-May-2025</div>
          <div className={styles.tableCell}>03-May-2025</div>
          <div className={styles.tableCell}>30</div>
          <div className={styles.tableCell} style={{display:'flex',alignItems:'center',gap:'8px'}}>
            <img src={pdfIcon} alt="PDF" className={styles.iconPdf} />
            <span className={styles.attachmentName}>Maternity Extension Leave.PDF</span>
            <a href="#" download className={styles.downloadLink}>
              <img src={downloadIcon} alt="Download" className={styles.iconDownload} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaveTable13;
