import React from "react";
import './LoginPage.css';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {

  const [users, setUsers] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    fetch("http://localhost:8080/users")
      .then((res) => res.json())
      .then((user) => setUsers(user))
      .catch((err) => console.log(err));
  }, []);


  let navigate = useNavigate();

  let handleLogin= () => {
    for (let i = 0; i < users.length; i++)
      if (username === users[i].Username && password === users[i].Password)
        return navigate(`/users/${i+1}`)
  }

  return (
    <div>
      <h3> Login Page</h3>

      <input value={username} placeholder="username" onChange={e => setUsername(e.target.value)}/>
      <input value={password} placeholder="password" onChange={e => setPassword(e.target.value)} />
      <button type="submit" onClick={handleLogin}>Login</button>

    </div>
  );
}

export default LoginPage;