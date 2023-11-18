import React from "react";
import "./AuthenticatedWelcome.css";

function AuthenticatedWelcome() {
  return (
    <div className="authenticated-welcome-page">
      <div className="welcome-card">
        <h1>Welcome to the Authenticated Welcome Page!</h1>
        <p>Congratulations, your registration was successful!</p>
        {/* Add content for authenticated users */}
      </div>
    </div>
  );
}

export default AuthenticatedWelcome;
