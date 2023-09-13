import React from "react";
import "./InventoryDetails.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function InventoryDetails() {
  const [item, setItem] = useState([]);
  const [itemByID, setItemById] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8080/items/`)
      .then((res) => res.json())
      .then((item) => setItem(item))
      .catch((err) => console.log(err));
  }, [id, item]);

  const filterByID = item.filter((e) => e.id == id);

  return (
    <div className="inventory-details">
      <h3> Item Page </h3>

      <ul>
        {filterByID.map((i) => (
          <li id={i.id} key={i.id}>
            {" "}
            Item {i.id}
            <p></p>
            <h4>Name: {i.ItemName}</h4>
            <p>Description: {i.Description}</p>
            <p>Quantity: {i.Quantity}</p>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default InventoryDetails;