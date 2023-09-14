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
        return navigate(`/users/${users[i].id}`)
  }

  let handleLink= () => {
    return navigate(`/items/`)
  }

  let handleLinkAccount= () => {
    return navigate(`/account/`)
  }

  return (
    <div className="login-page">

      <h3> Login Page</h3>
      <input className="input-login" value={username} placeholder="username" onChange={e => setUsername(e.target.value)}/>
      <input type="password" className="input-login" value={password} placeholder="password" onChange={e => setPassword(e.target.value)} />
      <button className="submit-button" type="submit" onClick={handleLogin}>Login</button>

      <h4> Create An Account! </h4>
      <button className="inventory-button" onClick={handleLinkAccount}>Account Creation</button>

      <h4> Inventory </h4>
      <button className="inventory-button" onClick={handleLink}>Inventory Link</button>

    </div>
  );
}

export default LoginPage;