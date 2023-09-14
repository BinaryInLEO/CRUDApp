import React from "react";
import './Account.css';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Account() {
  const [firstname, setFirstName] = useState("")
  const [lastname, setLastName] = useState("")
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")


  let handleSubmit = () => {
    fetch(`http://localhost:8080/users`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        FirstName: firstname,
        LastName: lastname,
        Username: username,
        Password: password
      })
  });
  };



  return (
    <div className="inventory">
      <h3> Account Creation Page</h3>
        <p>Please fill out the form below to create your account</p>

          <div className="first">
            <p>First Name</p>
           <input className="input-login" value={firstname} placeholder="First Name" onChange={e => setFirstName(e.target.value)}/>
           <p>{firstname}</p>
          </div>
          <div className="last">
            <p>Last Name</p>
           <input className="input-login" value={lastname} placeholder="Last Name" onChange={e => setLastName(e.target.value)}/>
           <p>{lastname}</p>
          </div>
          <div className="username">
            <p>User Name</p>
           <input className="input-login" value={username} placeholder="User Name" onChange={e => setUserName(e.target.value)}/>
           <p>{username}</p>
          </div>
          <div className="pass">
            <p>Password</p>
           <input type="password" className="input-login" value={password} placeholder="Password" onChange={e => setPassword(e.target.value)}/>
          </div>
          <button className="submit-button" type="submit" onClick={handleSubmit}>Create Account</button>


    </div>
  );
}

export default Account;