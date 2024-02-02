import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import './Login.css'
import { Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        navigate("/properties"); // Use navigate for redirection
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="login--container">
      <form onSubmit={handleLogin} className="login--form">
        <label>Username</label>
        <br />
        <input
          className="input--field"
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label>Password</label>
        <br />
        <input
          className="input--field"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button className="submit--field" type="submit">
          Login
        </button>
      </form>

      <h4>Don't have an account? <Link to='/register' >Register</Link></h4>
    </div>
  );
}

export default Login;