import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css"; // Import your CSS file for styling

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    // Handle sign-up logic here, e.g., making an API request
  };

  return (
    <div className="welcome-page">
      <div className="login-card">
        <h1>Welcome to Sphere</h1>

        {/* Sign-up form */}
        <form>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <button onClick={handleSignUp}>Sign Up</button>
        </form>

        {/* Login link */}
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
}

export default SignUp;
