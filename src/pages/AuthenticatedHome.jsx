import React from "react";
import { useNavigate } from "react-router-dom";

function AuthenticatedWelcome() {
  const navigate = useNavigate();

  // Function to navigate to AuthenticatedHome.jsx
  const goToAuthenticatedHome = () => {
    navigate("/authenticated-home");
  };

  return (
    <div>
      <h1>Welcome to the Authenticated Welcome Page!</h1>
      {/* Add content for authenticated users */}
      <button onClick={goToAuthenticatedHome}>Go to Authenticated Home</button>
    </div>
  );
}

export default AuthenticatedWelcome;
