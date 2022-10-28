import React, {useState} from "react";

function PlantCard({name, price, image}) {

  const [inStock, setInStock] = useState(true)

  function handleNotInStock() {
    setInStock(false)
  }

  function handleInStock() {
    setInStock(true)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button onClick={handleNotInStock} className="primary">In Stock</button>
      ) : (
        <button onClick={handleInStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
