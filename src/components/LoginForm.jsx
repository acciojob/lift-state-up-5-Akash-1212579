import { useState } from "react";
import React from "react";
export function LoginForm({ isLoggedIn, setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    
    setIsLoggedIn(true);
  }
  if(isLoggedIn) return <p>You are Logged in!</p>
  else return (
    
    <form onSubmit={handleSubmit}>
     
    <label htmlFor="email">Username:</label>
      <input
        type="text"
        placeholder="username"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
        <br /><br />
        <label htmlFor="">Password:</label>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    <br /><br />
      <button type="submit">Login</button>
    </form>
  );
}

