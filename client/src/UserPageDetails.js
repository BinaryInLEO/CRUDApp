import React from "react";
import "./UserPage.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function UserPageDetails() {
  const [user, setUser] = useState({});
  const [item, setItem] = useState([]);
  const [itemByID, setItemById] = useState([]);
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");

  let { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8080/users/${id}`)
      .then((res) => res.json())
      .then((user) => setUser(user[0]))
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    fetch(`http://localhost:8080/items/`)
      .then((res) => res.json())
      .then((item) => setItem(item))
      .catch((err) => console.log(err));
  }, [id, item]);

  const filterByID = item.filter((e) => e.UserID == id);

  let handleDelete = (i) => {
    fetch(`http://localhost:8080/items/${i}`, { method: "DELETE" });
  };

  let handleItemAdd = () => {


      fetch(`http://localhost:8080/items`, {
        method: "POST",
        mode: "cors",
        body: JSON.stringify([{
          "UserID": id,
          "ItemName": itemName,
          "Description": itemDescription,
          "Quantity": itemQuantity
        }]),
      }).then(res => res.json()).then(res => console.log(res)).catch(err => console.log(err))
  };

  return (
    <div>
      <h3> User Page </h3>
      <h4>
        {user.FirstName} {user.LastName}{" "}
      </h4>

      <ul>
        {filterByID.map((i) => (
          <li id={i.id} key={i.id}>
            {" "}
            Item {i.id}
            <p></p>
            <h4>Name: {i.ItemName}</h4>
            <p>Description: {i.Description}</p>
            <p>Quantity: {i.Quantity}</p>
            <button onClick={() => handleDelete(i.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <h3> Add Item </h3>
      <input value={itemName} placeholder="Add Item Name" onChange={e => setItemName(e.target.value)}/>
      <input value={itemDescription} placeholder="Add Item Description" onChange={e => setItemDescription(e.target.value)} />
      <input value={itemQuantity} placeholder="Add Item Quantity" onChange={e => setItemQuantity(e.target.value)} />
      <button type="submit" onClick={handleItemAdd}>Add Item</button>
    </div>
  );
}

export default UserPageDetails;
