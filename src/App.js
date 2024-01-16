import './App.css';
import React,{useState} from 'react';
import data from './components/back/data';
import Header from './components/front/Header/Header';
import Products from './components/front/Products/Products';
import Cart from './components/front/Cart/Cart';
import { BrowserRouter, Route,Routes } from "react-router-dom";


function App() {
  const productItem = data;
  const [cartItems,setCartItems]=useState([]);
  const handleAddProduct = (product)=>{
    const ProductExist = cartItems.find((item)=>item.id === product.id);
    if(ProductExist){
      setCartItems(cartItems.map((item)=> item.id === product.id ? {...ProductExist, quantity: ProductExist.quantity+1}:item));
    }else{
      setCartItems([...cartItems, {...product, quantity:1}])
    }
    
  }
  const handleRemoveProduct=(product)=>{
    const ProductExist = cartItems.find((item)=>item.id === product.id);
    if(ProductExist.quantity===1){
      setCartItems(cartItems.filter((item)=>item.id !== product.id))
    }else{
      setCartItems(cartItems.map((item)=> item.id === product.id ? {...ProductExist, quantity: ProductExist.quantity - 1}:item))
    }
  }
  const handleCartClearance =()=>{
    setCartItems([]);
  }
  // console.log(cartItems);
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<><Header cartItems={cartItems}/><Products
       productItem={productItem} handleAddProduct={handleAddProduct}
       /></>}>
     </Route>
     <Route path="/cart" element={<Cart
      cartItems={cartItems}
      handleAddProduct={handleAddProduct}
      handleRemoveProduct={handleRemoveProduct}
      handleCartClearance={handleCartClearance}   
         />}/>
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
