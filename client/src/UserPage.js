import React from "react";
import './UserPage.css';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function UserPage() {
  const [users, setUsers] = useState([])


  useEffect(() => {
    fetch("http://localhost:8080/users")
      .then((res) => res.json())
      .then((user) => setUsers(user))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="user-page">
      <h3> User Page</h3>
      <ul>

        {users.map((user) => (
          <Link to={`/users/${user.id}`} key={user.id}><li id={user.id}> {user.FirstName} {user.LastName} </li>
          </Link>
        ))}

      </ul>
    </div>
  );
}

export default UserPage;