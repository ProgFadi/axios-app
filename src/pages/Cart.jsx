import React, { useEffect} from 'react';
import {Navigate} from 'react-router-dom'
import MessageSow from '../components/Message';
import InputSearch from '../components/productComps/input';
import Product from '../components/productComps/product';
import { CART_PRODUCTS } from '../utils/Constants';
import "../components/productComps/mainStyle.css"
import DetailsCart from "../components/DetailsCart"
import "./DetailsStyle.css"


function CartPage(props) {
    const [isLogged, setIsLogged] = React.useState(true)
    const [searchVal, setSearchVal] = React.useState("")
    const [productsArray, setProductsArray] = React.useState([])
    const [filteredProducts, setFilteredProducts] = React.useState(productsArray)
    let total = findTotal(productsArray)
    let dis = 99
    let final = findFinal(total, dis)


    useEffect(()=>{
        let token;
        try {
        token = JSON.parse(localStorage.getItem('token'))
        if(!token)
         setIsLogged(false)

        } catch (error) {
            console.log(error)
            setIsLogged(false)
        }
    
        let cartItem;
        cartItem = JSON.parse(localStorage.getItem(CART_PRODUCTS)) ?? [];
        // console.log(cartItem)
        setProductsArray(cartItem);
        setFilteredProducts(cartItem)
    
    },[])

    // Functions

    // Search
    function searchButton(e){
        let searchValue = e.target.value;
        let searchResult = [...productsArray];
        if(searchValue){
            searchResult = searchResult.filter((item) => {
                return item.title.toLowerCase().includes(searchValue.toLowerCase());
                });
        }

        setSearchVal(searchValue)
        setFilteredProducts(searchResult)

    }

    function removeFromCart(id){
        // We have to remove the item from Server First
        const objIndex = productsArray.findIndex(item => item.id === id)
        setProductsArray(productsArray.splice(objIndex, 1))
        localStorage.setItem(CART_PRODUCTS, JSON.stringify(productsArray))

        setFilteredProducts(productsArray)

        const messageAlert = document.getElementById("message-alert");
        messageAlert.classList.remove('hidden');
        setTimeout(function(){ 
            messageAlert.classList.add('hidden');
         },1500);
    }

    function findTotal(arrayInpt){
        let total = 0;
        let prod;
        for (prod of arrayInpt){
            total += prod.price
        }
        return rounNumber(total);
    }

    function findFinal(total, dis){
        let finalAmoun = total - dis
        if (finalAmoun > 0)
            return rounNumber(finalAmoun)
        return 0
    }

    function rounNumber(num){
        return Math.round(num * 100) / 100
    }


    if(!isLogged){
        return <Navigate to="/login"/>
    }

    return (
        <div className="main-continer">
            <div className="menu-bar">
                <div className="search-div">
                    <InputSearch content="Search Products" inputId="searchProduct" functionalty={searchButton} />
                </div>
            </div>
            <div id="message-alert" className="hidden">
                <MessageSow message="Removed From Cart Secesfully" />
            </div>
            <div className="flex-continer" >
                {/* <div className="con-details-div">
                </div> */}
                <div className="details-div">
                    <DetailsCart len={productsArray.length} total={total} dis={dis} final={final} />
                </div>
                <div className='flex-products'>
                    {
                        filteredProducts.map((item)=>{
                            return <Product buttonDes="Rmove From Card" key={item.id} item={item} buttonFunction={()=>{removeFromCart(item.id) } } />
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default CartPage;
