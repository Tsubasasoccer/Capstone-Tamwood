import React from "react";
import "./Cart.css"
import{Link} from "react-router-dom";

const Cart = ({ cartItems, handleAddProduct, handleRemoveProduct,handleCartClearance }) => {
  console.log(cartItems);
  const totalPrice = cartItems.reduce((price,item)=>price + item.quantity * item.price,0)
  return (
    <div className="container">
      <div className="cart-items">
      <div className="cart-items-header">Cart Items</div>
      <div className="clear-cart">
        {cartItems.length>=1 &&(
          <button className="clear-cart-button" onClick={handleCartClearance}>Clear Cart</button>
        )}
      </div>
      {cartItems.length === 0 && (<div className="cart-items-empty">No items are added</div>)}
      <div>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-items-list">
            <img src={item.image} alt={item.name} className="cart-items-image" />
            <div className="cart-items-name">{item.name}</div>
            <div className="cart-items-function">
              <button
                className="cart-items-add"
                onClick={() => handleAddProduct(item)}
              >
                +
              </button>
              <span>{item.quantity}</span>
              <button
                className="cart-items-remove"
                onClick={() => handleRemoveProduct(item)}
              >
                -
              </button>
            </div>
            <div className="cart-items-price">
              {item.quantity}*${item.price}
            </div>
          </div>
        ))}
      </div>
      <div className="cart-items-total-price-name">
              Total price<div className="cart-Items-total-price">
                ${totalPrice}
                </div>
              </div>
    </div>
    <div className="btn">
      <Link to="/">Go back</Link>
    </div>
    </div>
    
  );
};

export default Cart;
