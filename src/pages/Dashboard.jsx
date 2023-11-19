import React, { useState } from "react";
import "./Dashboard.css";
import UserProfile from "./UserProfile.jsx";
import MeetingNotes from "../components/MeetingNotes.jsx";
import TodoList from "../components/TodoList.jsx";
import ClassicGames from "../components/ClassicGames.jsx";
import News from "./News.jsx";

function Dashboard() {
  const [activeTab, setActiveTab] = useState(null); // Initially set to null

  // Function to handle tab changes
  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  // Function to handle logout (replace with your actual logout logic)
  const handleLogout = () => {
    // Perform logout actions
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="dashboard-header">
          Your Dashboard {/* Add the header here */}
        </div>
        {/* Tabbed navigation */}
        <div
          className={`tab-item ${activeTab === "UserProfile" ? "active" : ""}`}
          onClick={() => handleTabChange("UserProfile")}
        >
          User Profile
        </div>
        <div
          className={`tab-item ${activeTab === "MeetingNotes" ? "active" : ""}`}
          onClick={() => handleTabChange("MeetingNotes")}
        >
          Meeting Notes
        </div>
        <div
          className={`tab-item ${activeTab === "TodoList" ? "active" : ""}`}
          onClick={() => handleTabChange("TodoList")}
        >
          TodoList
        </div>
        <div
          className={`tab-item ${activeTab === "ClassicGames" ? "active" : ""}`}
          onClick={() => handleTabChange("ClassicGames")}
        >
          Classic Games
        </div>
        <div
          className={`tab-item ${activeTab === "News" ? "active" : ""}`}
          onClick={() => handleTabChange("News")}
        >
          News
        </div>
        {/* Add more tabs as needed */}
        
        {/* Spacer */}
        <div className="spacer"></div>

        {/* Settings Tab */}
        <div
          className={`tab-item ${activeTab === "Settings" ? "active" : ""}`}
          onClick={() => handleTabChange("Settings")}
        >
          Settings
        </div>
        
        {/* Logout Button */}
        <div
          className={`tab-item ${activeTab === "Logout" ? "active" : ""}`}
          onClick={() => handleLogout()} // Add your logout function here
        >
          Logout
        </div>
      </div>
      {/* Content area */}
      <div className="content">
        {activeTab === "UserProfile" && <UserProfile />}
        {activeTab === "MeetingNotes" && <MeetingNotes />}
        {activeTab === "TodoList" && <TodoList />}
        {activeTab === "ClassicGames" && <ClassicGames />}
        {activeTab === "News" && <News />}
        {/* Add content for other tabs here */}
      </div>
    </div>
  );
}

export default Dashboard;

