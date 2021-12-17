function Cart({onRemove, cartItems}) {
    return (
        <div>
              <div className={'pro'}>
                {
                    cartItems.map((product, index)=>(
                        <div key={index} className={'pr'}>
                            <div className={'img-div'}>
                            <img src={product.image} alt="" />
                            </div>
                            <h3 className={'pro-nam'}>
                            {product.title}
                            </h3>
                            <h4 className={'price'}>
                            $ {product.price}
                            </h4>
                            <button className={'cart-btn'} onClick={()=>onRemove(index)}>Remove</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Cart;