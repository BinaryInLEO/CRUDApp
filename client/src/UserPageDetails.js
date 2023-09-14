import React from "react";
import "./UserPageDetails.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function UserPageDetails() {
  const [user, setUser] = useState({});
  const [item, setItem] = useState([]);
  const [itemByID, setItemById] = useState([]);
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");
  const [itemnamechange, setItemNameChange] = useState("");
  const [descriptionchange, setDescriptionChange] = useState("");
  const [quantitychange, setQuantityChange] = useState("");

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

  let handleChange = (i) => {
    fetch(`http://localhost:8080/items/${i}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        UserID: id,
        ItemName: itemnamechange,
        Description: descriptionchange,
        Quantity: quantitychange
      })
    });
  };

  let handleItemAdd = () => {
      // fetch(`http://localhost:8080/items`, {
      //   method: "POST",
      //   mode: "cors",
      //   body: JSON.stringify([{
      //     "UserID": id,
      //     "ItemName": itemName,
      //     "Description": itemDescription,
      //     "Quantity": itemQuantity
      //   }]),
      // })
      // .then(res => res.json())
      // .then(res => console.log(res))
      // .catch(err => console.log(err))

      //This fetch does not work. Making post request in postman does work
      //Lost too much time trying to debug this fetch request. Skipping for MVP
  };

  return (
    <div className="user">
      <h3> User Page </h3>
      <h4>
        {user.FirstName} {user.LastName}{" "}
      </h4>

      <ul className="user-list">
        {filterByID.map((i) => (
          <li className="li-list" id={i.id} key={i.id}>

            <h3>Item # {i.id}</h3>
            <h4 className="item-info">Name: {i.ItemName}</h4>
            <p className="item-info">Description: {i.Description}</p>
            <p className="item-info">Quantity: {i.Quantity}</p>
            <button className="button" onClick={() => handleDelete(i.id)}>Delete</button>

            <p> Enter the information below if you want to update this item </p>
            <input value={itemnamechange} placeholder="Item Name" onChange={e => setItemNameChange(e.target.value)}/>
            <input value={descriptionchange} placeholder="Description" onChange={e => setDescriptionChange(e.target.value)}/>
            <input value={quantitychange} placeholder="Quantity" onChange={e => setQuantityChange(e.target.value)}/>
            <button className="button" onClick={() => handleChange(i.id)}>Update Item</button>
          </li>
        ))}
      </ul>

      <h3> Add Item **Currently Bugged, Disabled until fixed**</h3>
      <input value={itemName} placeholder="Add Item Name" onChange={e => setItemName(e.target.value)}/>
      <input value={itemDescription} placeholder="Add Item Description" onChange={e => setItemDescription(e.target.value)} />
      <input value={itemQuantity} placeholder="Add Item Quantity" onChange={e => setItemQuantity(e.target.value)} />
      <button className="button" type="submit" onClick={handleItemAdd}>Add Item</button>
    </div>
  );
}

export default UserPageDetails;
