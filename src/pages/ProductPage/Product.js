import Header from './Header';
import './styles.css'
import { useEffect, useState } from 'react';
import Products from './Products';
import {Navigate} from 'react-router-dom'


function Product() {
  const [isLogged, setIsLogged] = useState(true)
  const [products,setProducts] = useState(JSON.parse(localStorage.getItem('data')))
  const [itemFound,setItemFound] = useState(products)
  
  useEffect(()=>{
      let token;
      try {
      token = localStorage.getItem('Token')
      if(!token)
       setIsLogged(false)

      } catch (error) {
          console.log(error)
          setIsLogged(false)
      }
  
  },[])

  useEffect(() => {
    setItemFound(products)

  },[products])
  if(!isLogged)
      return <Navigate to="/login"/>

    const deleteProduct = (id) => {
      setProducts(products.filter((product) => product.id !== id ))
      document.getElementById('searchId').value=''
    }
    
    const addProduct = (product) => {
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
