import React from "react";
import './UserPage.css';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function UserPageDetails() {
  const [user, setUser] = useState({})
  let { id } = useParams();
  console.log(id)

  useEffect(() => {
    fetch(`http://localhost:8080/users/${id}`)
      .then((res) => res.json())
      .then((user) => setUser(user[0]))
      .catch((err) => console.log(err));
  }, [id]);



  return (
    <div>
      <h3> User Page </h3>
      <ul>

      <li> {user.FirstName} {user.LastName} </li>

      </ul>
    </div>
  );
}

export default UserPageDetails;