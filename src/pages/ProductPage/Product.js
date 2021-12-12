import Header from './Header';
import './styles.css'
import { useEffect, useState } from 'react';
import Products from './Products';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom'


function Product() {
  const [products,setProducts] = useState(JSON.parse(localStorage.getItem('data')))
  const [itemFound,setItemFound] = useState(products)
  const navigate = useNavigate()
    const auth = useAuth().isAuth

    useEffect(() => {
        if(!auth) navigate('/login')
    }, )


  useEffect(() => {
    setItemFound(products)

  },[products])


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
