import React, { useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

export default class Products extends React.Component {
    state = {
        Products: []
    }
    componentDidMount() {
      axios.get('https://fakestoreapi.com/products')
        .then(res => {
          const Products = res.data;
          this.setState({Products});
        })
    }
    render() {
      return(
        <div className="container">
          <div className="back-to-product">
          <Link to="/">Back to Products</Link>
            <h1>products</h1>
            <ul>{ this.state.Products.map(Products => <li> {Products.price} </li>) }</ul>
          </div>
          <div>
            <h1>images</h1>
            <ul>{this.state.Products.map(Products => <li> {Products.image} </li>) }</ul>
          </div>
          <div>
            <h1>title</h1>
            <ul>{this.state.Products.map(Products => <li> {Products.title} </li>) }</ul>
          </div>
        </div>
      )
    }
  
  }
  

