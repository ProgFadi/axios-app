import axios from 'axios';
import React from 'react';
// import ButtonAdd from './buttonAdd';
import InputSearch from './input';
import Product from './product';
import './mainStyle.css'
import {Navigate} from 'react-router-dom'
import { CART_PRODUCTS } from '../../utils/Constants';
import MessageSow from '../Message';

class ProductMainPage extends React.Component {
    constructor(props){
        super();
        
        // products
        const productArr = [];
        // State
        this.state={
            productsArray : productArr,
            filteredProducts: productArr,
            isLogged: true
        }

        // binding
        // this.addButton = this.addButton.bind(this)
        this.searchButton = this.searchButton.bind(this)
        this.getProducts = this.getProducts.bind(this)
        this.addToCart = this.addToCart.bind(this)
    }

    getProducts(){
        let data
        axios.get("https://fakestoreapi.com/products?limit=13&sort=desc")
        .then((response) => {
            data = [...response.data];
            let productsArrayCopy = this.state.productsArray;
            Array.prototype.push.apply(productsArrayCopy, data)
            this.setState({
                productsArray: productsArrayCopy,
                filteredProducts: productsArrayCopy
            })
            console.log(response.data)
          }).catch((err)=>{
              console.log(err)
            });
    }

    // Functions
    searchButton(e){
        let searchValue = e.target.value;
        let productsArrayCopy = this.state.productsArray;
        // Search
        if(!searchValue){
            this.setState({
                searchVal:e.target.value,
                filteredProducts:this.state.productsArray,
            })
            return;
        }

        let filtered = productsArrayCopy.filter((item) => {
            return item.title.includes(searchValue);
            });
        this.setState({
            searchVal:e.target.value,
            filteredProducts:filtered,
        })
    }

    addToCart(obj){
        let cartItem;
        cartItem = JSON.parse(localStorage.getItem(CART_PRODUCTS)) ?? [];

        cartItem.push(obj) 
        localStorage.setItem(CART_PRODUCTS, JSON.stringify(cartItem));
        console.log(localStorage.getItem(CART_PRODUCTS));
        const messageAlert = document.getElementById("message-alert");

        messageAlert.classList.remove('hidden');
        setTimeout(function(){ 
            messageAlert.classList.add('hidden');
         },1500);
        }

    componentDidMount(){
        let token;
        try {
            token = JSON.parse(localStorage.getItem('token'))
            if(!token){
                this.setState({isLogged:false})
                console.log("not Token")
                }
        }catch (error) {
            console.log(error)
            this.setState({isLogged:false})
        }

        let data
        axios.get("https://fakestoreapi.com/products?limit=13&sort=desc")
        .then((response) => {
            data = [...response.data];
            let productsArrayCopy = this.state.productsArray;
            Array.prototype.push.apply(productsArrayCopy, data)
            this.setState({
                productsArray: productsArrayCopy,
                filteredProducts: productsArrayCopy
            })
            console.log(response.data)
          }).catch((err)=>{
              console.log(err)
            });

    }

    // Render
    render() {
        if(!this.state.isLogged){
            console.log("Not Logedin")
            console.log(this.state.isLogged)
            return <Navigate to="/login"/>
        }

        return (
            <div className="main-continer">
                <div className="menu-bar">
                    <div className="search-div">
                        <InputSearch content="Search Products" inputId="searchProduct" functionalty={this.searchButton} />
                    </div>
                </div>
                <div id="message-alert" className="hidden">
                <MessageSow message="Added To Cart Secesfully" />
                </div>

                <div className='flex-products'>
                    {
                        this.state.filteredProducts.map((item)=>{
                            return <Product key={item.id} item={item} buttonDes="Add To Card" buttonFunction={()=>{this.addToCart(item)}} />
                        })
                    }
                </div>
            </div>
    )}
}

export default ProductMainPage;
