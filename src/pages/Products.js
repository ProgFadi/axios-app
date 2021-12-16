import React, {  useState ,useEffect} from 'react';
import './product.css'
import {Navigate} from 'react-router-dom'
import axios from 'axios'

export default function Products({addToCart}) {
    const[searchProduct,setSearchProduct]=useState("");
    const [carts,setCarts]=useState([]);
    const [isLogged, setIsLogged] =useState(true)
    useEffect(()=>{
      axios.get('https://fakestoreapi.com/products')
      .then(res=>{
        let data=(res.data);
        setCarts(data);
      })
        let token;
        try {
        token = JSON.parse(localStorage.getItem('token'))
        console.log('2')
        if(!token)
         setIsLogged(false)

        } catch (error) {
            console.log(error)
            setIsLogged(false)
        }
    
    },[])
    console.log('3')

    if(!isLogged){
      return <Navigate to="/login"/>
    }
   

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
