
function Cart({setCartItems}) {
    let cartList = localStorage.getItem('data');
        cartList = JSON.parse(cartList);
    const removeFromLocalStorage = ((removeData, index)=>{
        setCartItems(removeData.splice(index, 1))
        localStorage.setItem('data', JSON.stringify(removeData))
})
    return (
        <div>
              <div className={'pro'}>
                {
                    cartList.map((product, index)=>(
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
                            <button className={'cart-btn'} onClick={()=>removeFromLocalStorage(cartList, index)}>Remove</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Cart;
