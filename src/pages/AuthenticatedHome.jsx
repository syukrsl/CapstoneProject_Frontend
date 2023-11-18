import React from "react";
import "./AuthenticatedHome.css";
import { useNavigate } from "react-router-dom";

function AuthenticatedHome() {
  const navigate = useNavigate();

  // Function to navigate to AuthenticatedHome.jsx
  const goToAuthenticatedHome = () => {
    navigate("/authenticated-home");
  };

  return (
    <div className="authenticated-home">
      <h1>Welcome to the Authenticated Home Page!</h1>
      {/* Add content for authenticated users */}
      <button onClick={goToAuthenticatedHome} className="btn btn-primary">
        Go to Authenticated Home
      </button>
    </div>
  );
}

export default AuthenticatedHome;
