import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignIn.css"; // Import your CSS file for styling

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    // Handle sign-in logic here, e.g., making an API request
  };

  return (
    <div className="welcome-page">
      <div className="login-card">
        <h2>Sign In</h2>

        {/* Sign-in form */}
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
          <button onClick={handleSignIn}>Sign In</button>
        </form>

        {/* Sign-up link */}
        <p>Dont have an account? <Link to="/sign-up">Sign Up</Link></p>

        {/* Home button */}
        <p><Link to="/">Back to Home</Link></p>
      </div>
    </div>
  );
}

export default SignIn;
