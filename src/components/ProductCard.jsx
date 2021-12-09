import'./page.css'
function ProductCard({onAdd, passedData}) {

    return (
        <div>
              <div className={'pro'}>
                {
                    passedData.map((product)=>(
                        
                        <div className={'pr'}>
                            <div className={'img-div'}>
                            <img src={product.image} alt="" />
                            </div>
                            <h3 className={'pro-nam'}>
                            {product.title}
                            </h3>
                            <h4 className={'price'}>
                            $ {product.price}
                            </h4>
                            <button className={'cart-btn'} onClick={()=>onAdd(product)}>Add to Cart</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductCard;
