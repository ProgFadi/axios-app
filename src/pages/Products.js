import React, {  useState ,useEffect} from 'react';
import './product.css'
import axios from 'axios'

export default function Products({addToCart}) {
    const[searchProduct,setSearchProduct]=useState("");
    const [carts,setCarts]=useState([]);
    useEffect(()=>{
      axios.get('https://fakestoreapi.com/products')
      .then(res=>{
        let data=(res.data)
        setCarts(data)
        
      })
      .catch(ere=>{
        console.log(ere)
      })
    },[carts])

    const searchInput=(event)=>{
      event.preventDefault();
      setSearchProduct(event.target.value)
    };

   
 
    return (
     <div className="container">
       <input className="search-input" type="search" placeholder="Search Product" value={searchProduct} onChange={searchInput}/>
      <div className="flex">
       {carts.filter(val=>{
         if(searchProduct== ''){
           return val
         }
         else if(val.title.toLowerCase().includes(searchProduct.toLocaleLowerCase())){
          return val
         }

       }).map(cart=>(
          <div key={cart.id} className="card">
          <img src={cart.image} alt='' />
          <div className="text">
            <p>{cart.title}</p>
            <span>$ {cart.price}</span>
          </div>
         
          <button onClick={()=>addToCart(cart)}>Add To Cart</button>
        </div>
          ))}
    
    </div>
    </div>
    );
}
