import iphone from "../components/image/iphone.jpg"
import axios from 'axios'
import React, { useEffect, useState } from "react"
import OneProduct from "../components/OneProduct"
import AddNewProduct from '../components/AddNewProduct'
import './Home.css'
import {Navigate} from 'react-router-dom'




const Products = () => {
    const [isLogged, setIsLogged] = React.useState(true)
    
    axios({
        method: 'get',
        url: 'https://fakestoreapi.com/products',
          })
          .then((response)=>{
            let data = response.data;
            localStorage.setItem('data', JSON.stringify(data))
          })
          .catch((err)=>{
            console.log(err)
          })
          const [products,setProducts] = useState(JSON.parse(localStorage.getItem('data')))
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    const addnew = () => {
        if (name==='')
        {
            alert('please enter a product name')
            return
        }
        if (description==='')
        {
            alert('please enter a product description')
            return
        }

        let tempCart = {
            name:name,
            price:price,
            description:description,
            image:iphone}

            setProducts([...products,tempCart])
            setName('')
            setPrice('')
            setDescription('')

    }
    const [fillterd, setFillterd] = useState(products)
    
    const searchHandler = (e) =>{
        let inputSearch = e.target.value
        let filteredProduct= products.filter((item) => {
            return  item.title.toLowerCase().includes(inputSearch.toLowerCase())
        })
        setFillterd(filteredProduct)
        
        
    }
    useEffect(()=>{
        console.log('1')
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
    
    useEffect(() => {
        setFillterd(products)
        
    }, [products])
    if(!isLogged)
        return <Navigate to="/login"/>
    return (
        <>

       {/* input name */}
       <div className='inputt'>
        <input
         type="text"
          placeholder='Name'
          value={name}
          onChange={(e)=> setName(e.target.value)}
            />
        </div> 

        {/* input Price*/}
       <div className='inputt'>
       <input type="Number"
        placeholder="Price"
        value={price}
        onChange={(e)=> setPrice(e.target.value)}
        />
       </div>

       {/* input description */}
       <div className='inputt'>
        <input type="text"
         placeholder='description'
         value={description}
         onChange={(e)=> setDescription(e.target.value)}
         />
        </div>

          {/* input search */}
    <div className='inputt'>
    <input placeholder='Search Product' 
    type="text"
    onChange={searchHandler}
      />

          {/* but Add new */}
       <div>
           <AddNewProduct handelClick={addnew} />
       </div>
       </div>

        <div>
            {fillterd.map((product , index) => (<OneProduct 
            key={index} 
            name= {product.title} 
            price= {product.price} 
            description= {product.category} 
            image= {product.image} 
            />))}
        </div>
        </>
    )
}

export default Products
