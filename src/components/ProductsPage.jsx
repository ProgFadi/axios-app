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

  const addProduct = (e) => {
    e.preventDefault();
    const tempProducts = this.state.products;
    console.log(tempProducts);
    tempProducts.push({
      type: type,
      caption: caption,
      price: price,
    });
    // this.setState({
    //   products: tempProducts,
    //   // filteredProduct: tempProducts,
    // });
    console.log("added !")
  }

  const handleInput = (e) => {
    if (e.target.name === "type") setType({ type: e.target.value });
    else if (e.target.name === "caption")
      setCaption({ caption: e.target.value });
    else if (e.target.name === "price")
      setPrice({ price: e.target.value });
  }

  const search = (e) => {
    var param = e.target.value;
    if (param !== "") {
      // var results = this.state.products.filter((product) => {
      //   return product.type.toLowerCase().startsWith(param.toLowerCase());
      // });
      // this.setState({
      //   queryResult: results,
      // });
    } else {
      // this.setState({
      //   queryResult: this.state.products,
      // });
    }
    alert("search")
    // this.setState({ queryParam: param });
  }

  useEffect(()=>{
    console.log('use effect')
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
    <div>
      {/* Search */}
      {/* product input */}
      {/* products list */}
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
        <Button class="submit-button" type="submit" label="Add New" />
      </form>
      <Input
        name="search"
        type="search"
        value={queryParam}
        placeholder="search here.."
        onChange={search}
      />
      <div className="products">
      {console.log("hiiiiiiiiiiiiiiiiiiii")}

        {console.log(products)}
        {queryResult && queryResult.length > 0
          ? queryResult.map((product, key) => (
              <Product product={product} key={key}></Product>
            ))
          : products.map((product, key) => (
              <Product product={product} key={key}></Product>
            ))}
      </div>
    </div>
  );
}
export default ProductsPage;
