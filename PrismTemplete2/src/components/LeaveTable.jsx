import React, { useState } from 'react';
import styles from './LeaveTable.module.css';

const LeaveTable = ({ data = [] }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  // Default data based on the attachment
  const defaultData = [
    {
      id: 1,
      leaveType: 'CL',
      appliedDate: '30-June-2025',
      leaveFrom: '02-May-2025',
      leaveTo: '07-May-2025',
      noOfDays: 4
    },
    {
      id: 2,
      leaveType: 'SL',
      appliedDate: '30-June-2025',
      leaveFrom: '08-May-2025',
      leaveTo: '14-May-2025',
      noOfDays: 5
    },
    {
      id: 3,
      leaveType: 'PL',
      appliedDate: '30-June-2025',
      leaveFrom: '15-May-2025',
      leaveTo: '15-May-2025',
      noOfDays: 1
    }
  ];

  const tableData = data.length > 0 ? data : defaultData;

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedData = React.useMemo(() => {
    if (!sortConfig.key) return tableData;

    return [...tableData].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
  }, [tableData, sortConfig]);

  return (
    <div className={styles.tableContainer}>
      {/* Content Header */}
      <div className={styles.contentHeader}>
        <h3 className={styles.tableTitle}>Leave List</h3>
      </div>

      {/* Table Frame */}
      <div className={styles.tableFrame}>
        <div className={styles.tableWrapper}>
          {/* Table Header */}
          <div className={styles.tableHeader}>
            <div className={styles.headerContainer}>
              <div className={styles.headerRow}>
                <div 
                  className={`${styles.headerCell} ${styles.leaveTypeCol}`}
                  onClick={() => handleSort('leaveType')}
                >
                  <span className={styles.headerLabel}>Leave Type</span>
                </div>
                <div 
                  className={`${styles.headerCell} ${styles.appliedDateCol}`}
                  onClick={() => handleSort('appliedDate')}
                >
                  <span className={styles.headerLabel}>Applied Date</span>
                </div>
                <div 
                  className={`${styles.headerCell} ${styles.leaveFromCol}`}
                  onClick={() => handleSort('leaveFrom')}
                >
                  <span className={styles.headerLabel}>Leave From</span>
                </div>
                <div 
                  className={`${styles.headerCell} ${styles.leaveToCol}`}
                  onClick={() => handleSort('leaveTo')}
                >
                  <span className={styles.headerLabel}>Leave To</span>
                </div>
                <div 
                  className={`${styles.headerCell} ${styles.noOfDaysCol}`}
                  onClick={() => handleSort('noOfDays')}
                >
                  <span className={styles.headerLabel}>No of Days</span>
                </div>
              </div>
            </div>
            <div className={styles.headerSeparator}>
              <div className={styles.separatorLine}></div>
            </div>
          </div>

          {/* Table Body */}
          <div className={styles.tableBody}>
            {sortedData.map((row, index) => (
              <div key={row.id || index} className={styles.tableRow}>
                <div className={styles.rowContainer}>
                  <div className={styles.rowGroup}>
                    <div className={styles.cellGroup}>
                      <div className={`${styles.dataCell} ${styles.leaveTypeCol}`}>
                        {row.leaveType}
                      </div>
                      <div className={`${styles.dataCell} ${styles.appliedDateCol}`}>
                        {row.appliedDate}
                      </div>
                      <div className={`${styles.dataCell} ${styles.leaveFromCol}`}>
                        {row.leaveFrom}
                      </div>
                      <div className={`${styles.dataCell} ${styles.leaveToCol}`}>
                        {row.leaveTo}
                      </div>
                      <div className={`${styles.dataCell} ${styles.noOfDaysCol}`}>
                        {row.noOfDays}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaveTable;