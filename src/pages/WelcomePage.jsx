
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./WelcomePage.css"; // Import your CSS file for styling

function WelcomePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle login logic here, e.g., making an API request
  };

  return (
    <div className="welcome-page">
      <div className="login-card">
        <h1>Welcome to CollabSphere</h1>

        {/* Login form */}
        <form>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </form>

        {/* Sign-up link */}
        <p>Dont have an account? <Link to="/sign-up">Sign Up</Link></p>
      </div>
    </div>
  );
}

export default WelcomePage;
