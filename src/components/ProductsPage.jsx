import React, { useState , useEffect } from "react";
import Product from "./Product";
import Input from "./Input";
import Button from "./Button";
import {GET_PRODUCTS_HOST, GET_PRODUCTS_PATH} from "./../utils/Constants"
import axios from '../utils/axios'
import { useNavigate } from 'react-router-dom'

function ProductsPage(props) {
  const navigate = useNavigate()
  const [queryResult, setQueryResult] = useState([]);
  const [queryParam, setQueryParam] = useState('');
  const [type, setType] = useState('');
  const [caption, setCaption] = useState('');
  const [price, setPrice] = useState('');
  const [products, setProducts] = useState([]);

  const addToCart = (selectedProduct) => {
    let myProducts = JSON.parse(localStorage.getItem("myProducts"));
    if(myProducts)
    {
      myProducts.push(selectedProduct);
      var myNewProducts = myProducts;
    }else{
      var myNewProducts = [selectedProduct];

    }
    localStorage.setItem('myProducts', JSON.stringify(myNewProducts));
    alert(`${selectedProduct.title} Added to cart! (see console) `)
    console.log(localStorage.getItem('myProducts'));

  }

  const addProduct = (e) => {
    e.preventDefault();
    const tempProducts = [...products, {
      category: type,
      title: caption,
      price: price,
    }];
    setProducts(tempProducts);
    console.log(tempProducts);

    console.log("added !")
  }

  const handleInput = (e) => {
    if (e.target.name === "type") setType(e.target.value);
    else if (e.target.name === "caption")
      setCaption(e.target.value);
    else if (e.target.name === "price")
      setPrice(e.target.value);
  }

  const search = (e) => {
    var param = e.target.value;
    if (param !== "") {
      var results = products.filter((product) => {
        return product.category.toLowerCase().startsWith(param.toLowerCase());
      });
      setQueryResult(results);
    } else {
      setQueryResult(products);
    }
    setQueryParam(param);
  }

  useEffect(()=>{
    axios.get(`${GET_PRODUCTS_HOST}${GET_PRODUCTS_PATH}`)
    .then((response)=>{
        // console.log(response)
        let data = response.data;
        // let customData = {'name': data.title, 'type' : data.category, 'price': data.price}
        setProducts(response.data)
        // localStorage.setItem(TOKEN_KEY, JSON.stringify(data))
        // navigate('/products')
    })
    .catch((err)=>{
        console.log(err)
    })
    navigate('/products')
    // let products = JSON.parse(localStorage.getItem('myData'))
    // console.log(userData)
  },[])
  
  return (
    <div className="products-container">
      {/* Search */}
      {/* product input */}
      {/* products list */}
      <div className="products-header">
        <form onSubmit={addProduct}>
          <Input
            type="text"
            name="type"
            placeholder="type"
            onChange={handleInput}
          />
          <Input
            type="text"
            name="caption"
            placeholder="caption"
            onChange={handleInput}
          />
          <Input
            type="text"
            name="price"
            placeholder="price"
            onChange={handleInput}
          />
          <Button className="submit-button" type="submit" label="Add New" />
        </form>
        <Input
          name="search"
          type="search"
          value={queryParam}
          placeholder="search category .."
          onChange={search}
        />
      </div>
      <div className="products">
        {queryResult && queryResult.length > 0
          ? queryResult.map((product) => (
              <Product product={product} onAddToCart={()=> addToCart(product)} key={product.id}></Product>
            ))
          : products.map((product) => (
              <Product product={product} onAddToCart={()=> addToCart(product)} key={product.id}></Product>
            ))}
      </div>
    </div>
  );
}
export default ProductsPage;
