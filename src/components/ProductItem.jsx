import './page.css'

function ProductItem({ product_data, onAdd }) {
    return (
        <div>
           <div className={'pro'}>
                {
                    product_data.map((product, index) => (
                        <div key={index} className={'pr'}>
                            <div className={'img-div'}>
                                <img src={product.image} alt="" />
                            </div>
                            <h2 className={'pro-desc'}>{product.category}</h2>
                            <h3 className={'pro-nam'}>
                                {product.title}
                            </h3>
                            <h4 className={'price'}>
                                $ {product.price}
                            </h4>
                            <button className={'cart-btn'} onClick={() => onAdd(product)}>Add to Cart</button>
                        </div>

                        

                    ))
                }
            </div>
        </div>
    )
}

export default ProductItem;




