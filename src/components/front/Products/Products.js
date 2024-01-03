import React ,{useState} from "react";
import "./Products.css";

const Products = ({ productItem,handleAddProduct }) => {
  const[productList,setProductList]= useState(productItem)
  console.log(productItem);
  const FilterProduct=(cat)=>{
    const updateList = productItem.filter((x)=>x.category===cat);
    setProductList(updateList)
  }
  return (
    <>
    <div className="filter">
      <button className="filter-button" onClick={()=>setProductList(productItem)}>All</button>
      <button className="filter-button"onClick={()=>FilterProduct("tops")}>Tops</button>
      <button className="filter-button" onClick={()=>FilterProduct("bottoms")}>Bottoms</button>
      <button className="filter-button" onClick={()=>FilterProduct("others")}>Others</button>

    </div>
        <div className="products">
      {productList.map((pr) => (
        
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
    </>

  );
};

export default Products;
