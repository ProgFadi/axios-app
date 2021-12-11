import OneProduct from "./OneProduct"

const Products = ({products, onDelete}) => {
  const onClick = (product) => {
    let getData = JSON.parse(localStorage.getItem('CartData'))
    if (!getData){
        let addCart = [product]
        localStorage.setItem('CartData', JSON.stringify(addCart) )
    }
    else{
        getData.push(product)
        localStorage.setItem('CartData', JSON.stringify(getData) )
    }
}
    return (
        <div className={'productsDiv'}>
          {products.map((product)=>(
           <OneProduct key={product.id} product={product} onDelete={onDelete} name={'Add to Cart'} onClick={onClick} />
          )
          )}  
        </div>
    )
}

export default Products
