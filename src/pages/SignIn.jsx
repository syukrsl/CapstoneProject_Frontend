import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Handle sign-in logic here (e.g., API request)
  };

  return (
    <div>
      <h2>Sign In</h2>
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
      <p>Dont have an account? <Link to="/sign-up">Sign Up</Link></p>
    </div>
  );
}

export default SignIn;
