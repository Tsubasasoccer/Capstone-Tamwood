import React from "react";
import "./Products.css";

const Products = ({ productItem,handleAddProduct }) => {
  console.log(productItem);
  return (
    <div className="products">
      {productItem.map((pr) => (
        
        <div className="card">
          <div>
            <img className="product-image" src={pr.image} alt={pr.name} />
          </div>
          <div>
            <h3 className="product-name">{pr.name}</h3>
            </div>
          <div className="product-price">
            ${pr.price}
            </div>
          <div>
            <button className="product-button" onClick={()=>handleAddProduct(pr)}>Add to Cart</button>
            </div>
        </div>
         
        
      ))}
    </div>
  );
};

export default Products;
