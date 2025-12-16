import { useState } from "react";
import React from "react";
export function LoginForm({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoggedIn(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Username:</label>
      <input
        type="text"
        placeholder="username"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <label>Password:</label>
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
