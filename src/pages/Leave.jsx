// Leave.jsx
import React, { useState } from 'react';
import './Leave.css';

function Leave() {
  // Updated initial state to 'ApplyLeave'
  const [activeTab, setActiveTab] = useState('ApplyLeave');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'ApplyLeave':
        return <div>Content for Apply Leave</div>; // Updated content for Apply Leave
      case 'LeaveStatus':
        return <div>Content for Leave Status</div>; // Updated content for Leave Status
      case 'LeaveBalance':
        return <div>Content for Leave Balance</div>; // Updated content for Leave Balance
      default:
        return <div>Select a tab to view content</div>;
    }
  };

  return (
    <div className="leave-container">
      <h1 className="leave-header">Leave Management</h1>
      <div className="tabs">
        <label className={`tab ${activeTab === 'ApplyLeave' ? 'active' : ''}`} onClick={() => handleTabChange('ApplyLeave')}>Apply Leave</label>
        <label className={`tab ${activeTab === 'LeaveStatus' ? 'active' : ''}`} onClick={() => handleTabChange('LeaveStatus')}>Leave Status</label>
        <label className={`tab ${activeTab === 'LeaveBalance' ? 'active' : ''}`} onClick={() => handleTabChange('LeaveBalance')}>Leave Balance</label>
      </div>
      <div className="panels">
        <div className={`panel ${activeTab === 'ApplyLeave' ? 'active' : ''}`} id="apply-leave-panel">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default Leave;
