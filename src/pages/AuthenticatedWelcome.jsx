import React, { useState, useEffect } from "react";
import "./AuthenticatedWelcome.css";

function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [photoUrl, setPhotoUrl] = useState(""); // Store user's photo URL
  const [role, setRole] = useState(""); // Store user's role/position
  const [contactInfo, setContactInfo] = useState(""); // Store user's contact information

  // Function to handle the "Edit" button click
  const handleEditClick = () => {
    setIsEditing(true);
  };

  // Function to handle the "Save" button click
  const handleSaveClick = () => {
    // Save the edited data (you can add logic here to update the user profile)
    setIsEditing(false);
  };

  // Function to handle the "Cancel" button click
  const handleCancelClick = () => {
    // Reset the input fields and exit edit mode
    setIsEditing(false);
  };

  useEffect(() => {
    // Fetch user profile data here and populate the state variables
    // Example:
    // const fetchData = async () => {
    //   const response = await fetch("/api/userProfile");
    //   const data = await response.json();
    //   setPhotoUrl(data.photoUrl);
    //   setRole(data.role);
    //   setContactInfo(data.contactInfo);
    // };
    // fetchData();
  }, []);

  return (
    <div className="user-profile">
      <div className="profile-photo">
        <div className="photo-upload">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setPhotoUrl(URL.createObjectURL(e.target.files[0]))}
            disabled={!isEditing}
          />
          {photoUrl ? (
            <img src={photoUrl} alt="User Profile" />
          ) : (
            <div className="empty-profile">Upload your photo here</div>
          )}
        </div>
      </div>
      <div className="profile-info">
        <h2>Personal Information</h2>
        <div className="info-field">
          <label>Role/Position:</label>
          {isEditing ? (
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          ) : (
            <span>{role}</span>
          )}
        </div>
        <div className="info-field">
          <label>Contact Information:</label>
          {isEditing ? (
            <input
              type="text"
              value={contactInfo}
              onChange={(e) => setContactInfo(e.target.value)}
            />
          ) : (
            <span>{contactInfo}</span>
          )}
        </div>
        <div className="profile-buttons">
          {isEditing ? (
            <>
              <button onClick={handleSaveClick}>Save</button>
              <button onClick={handleCancelClick}>Cancel</button>
            </>
          ) : (
            <button onClick={handleEditClick}>Edit</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
