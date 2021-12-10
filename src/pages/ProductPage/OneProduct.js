import Button from './Button'
import DeleteProduct from './DeleteProduct'
import ProductDetials from './ProductDetials'
import ProductImage from './ProductImage'

const Product = ({product, onDelete,name}) => {
    const onClick = () => {
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
        <div className={'product'}>
         <div> 
           <DeleteProduct onDelete={onDelete} product={product.id} />
            <ProductImage productImage={product.image} />
         </div>
            <ProductDetials product={product} />
            <div>
                <Button name={name} styles='btnAddCart'  onClick={onClick} />
            </div>
        </div>
    )
}

export default Product
