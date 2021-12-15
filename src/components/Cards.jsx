import Card from './Card'
import axios from 'axios'
import React, { useEffect, useState } from 'react';






export default function Cards(props) {
    const addTocart = (object)=>{

    var oldItems = JSON.parse(localStorage.getItem('pro'))
    if (oldItems==null){
        localStorage.setItem("pro", JSON.stringify([object]))
    }
    else{
        oldItems.push(object)
        localStorage.setItem('pro', JSON.stringify(oldItems));
    }
    
}
    const [products, setProducts] = useState([]);

    axios.get('https://fakestoreapi.com/products').then((response) => {
    let pro = setProducts(response.data);
    localStorage.setItem('data', JSON.stringify(pro));
    console.log(pro)
  });

    return (
        <div>
            {products.map((item, index)=>{
                return <Card addTocart= {addTocart} key={index} object={item}/>
            })}
        </div>
    )
}
