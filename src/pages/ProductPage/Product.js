import Header from './Header';
import './styles.css'
import { useEffect, useState } from 'react';
import Products from './Products';
import axios from 'axios'
import {Navigate} from 'react-router-dom'


function Product() {
  const [isLogged, setIsLogged] = useState(true)
  
  
  axios({
    method: 'get',
    url: 'https://fakestoreapi.com/products',
  })
  .then((response)=>{
    let data = response.data;
    localStorage.setItem('data', JSON.stringify(data))
    console.log(response)
  })
  .catch((err)=>{
    console.log(err)
  })
  const [products,setProducts] = useState(JSON.parse(localStorage.getItem('data')))
  const [itemFound,setItemFound] = useState(products)
  
  useEffect(()=>{
  console.log('1')
      let token;
      try {
      token = localStorage.getItem('Token')
      console.log(token)
      if(!token)
       setIsLogged(false)

      } catch (error) {
          console.log(error)
          setIsLogged(false)
      }
  
  },[])
  console.log('3')

  useEffect(() => {
    setItemFound(products)

  },[products])
  if(!isLogged)
      return <Navigate to="/login"/>

    const deleteProduct = (id) => {
      setProducts(products.filter((product) => product.id !== id ))
      console.log(products)
      document.getElementById('searchId').value=''
    }
    
    const addProduct = (product) => {
      console.log(product)
      setProducts([...products,product])
      document.getElementById('searchId').value=''
  }

  const searchHandler = (e) => {
     let filteredProduct= products.filter((item) => {
         return  item.title.toLowerCase().includes(e.target.value.toLowerCase())
       })
       setItemFound(filteredProduct)
  }

  return (
    <div>
      <Header onAdd={addProduct} onChange={searchHandler} />
      {itemFound.length>0 ? <Products products={itemFound} onDelete={deleteProduct}  /> : 'No products to show' }
    </div>
  );
}

export default Product;
