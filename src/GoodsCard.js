import React from "react";
import "./css/GoodsCard.css";

const GoodsCard = (props) => {
  const products = props.products.map((product) => {
    return (
      <article key={product.id} className="GoodsCard">
        <img src={product.img} alt={product.name} />
        <h2>{product.name}</h2>
        <span>
          <b>Price: </b>
          {product.price}
        </span>
      </article>
    );
  });
  return <section className="Goods">{products}</section>;
};

export default GoodsCard;
