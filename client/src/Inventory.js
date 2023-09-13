import React from "react";
import './Inventory.css';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Inventory() {
  const [items, setItems] = useState([])


  useEffect(() => {
    fetch("http://localhost:8080/items")
      .then((res) => res.json())
      .then((item) => setItems(item))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="inventory">
      <h3> Inventory Page</h3>
      <ul>

        {items.map((i) => (
          <Link to={`/items/${i.id}`} key={i.id}><li id={i.id}> {i.ItemName} </li>
          </Link>
        ))}

      </ul>
    </div>
  );
}

export default Inventory;