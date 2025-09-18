import React, { useState } from 'react';
import styles from './LeaveTable.module.css';

const LeaveTable8 = ({ data = [] }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  // Default data based on the attachment
  const defaultData = [
    {
      id: 1,
      leaveType: 'Compassionate Leave',
      leaveFrom: '02-May-2025',
      leaveTo: '07-May-2025',
      SubCategories: 'Study Time Off',
      Duration:1,
      ProgramName:"Data Science",
      Institute:"XXX-XXX-XXX",
      CourseComencementDate: 4
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
                  className={`${styles.headerCell} ${styles.SubCategoriesCol}`}
                  onClick={() => handleSort('SubCategories')}
                >
                  <span className={styles.headerLabel}>Sub Categories</span>
                </div>
                <div 
                  className={`${styles.headerCell} ${styles.DurationCol}`}
                  onClick={() => handleSort('Duration')}
                >
                  <span className={styles.headerLabel}>Duration</span>
                </div>
                <div 
                  className={`${styles.headerCell} ${styles.ProgramNameCol}`}
                  onClick={() => handleSort('ProgramName')}
                >
                  <span className={styles.headerLabel}>Program Name</span>
                </div>
                <div 
                  className={`${styles.headerCell} ${styles.InstituteCol}`}
                  onClick={() => handleSort('Institute')}
                >
                  <span className={styles.headerLabel}>Institute</span>
                </div>
                <div 
                  className={`${styles.headerCell} ${styles.CourseComencementDateCol}`}
                  onClick={() => handleSort('CourseComencementDate')}
                >
                  <span className={styles.headerLabel}>Course Commencement</span>
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
                      <div className={`${styles.dataCell} ${styles.leaveFromCol}`}>
                        {row.leaveFrom}
                      </div>
                      <div className={`${styles.dataCell} ${styles.leaveToCol}`}>
                        {row.leaveTo}
                      </div>
                      <div className={`${styles.dataCell} ${styles.SubCategoriesCol}`}>
                        {row.SubCategories}
                      </div>
                      <div className={`${styles.dataCell} ${styles.DurationCol}`}>
                        {row.Duration}
                      </div>
                      <div className={`${styles.dataCell} ${styles.ProgramNameCol}`}>
                        {row.ProgramName}
                      </div>
                      <div className={`${styles.dataCell} ${styles.InstituteCol}`}>
                        {row.Institute}
                      </div>
                      <div className={`${styles.dataCell} ${styles.CourseComencementDateCol}`}>
                        {row.CourseComencementDate}
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

export default LeaveTable8;