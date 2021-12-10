import React from 'react'

const ProductDetials = ({product}) => {
    return (
        <div className={'prodName'}>
        <div className={'DiscDiv'}>{product.description}</div>

        <div style={{ display:'flex',alignItems: 'flex-end',    justifyContent: 'space-between',width:'100%'}}>
            <div className={'nameDiv'}>
            <p style={{fontWeight: 'bold', fontSize: '13px' }}>{product.title}</p>
            </div>
            
        </div>
        <div className={'Rating'}>
            <div> Qty: {product.rating.count}</div>
            <div> Rate: {product.rating.rate}</div>
        </div>
        <div className={'PriceDiv'}>
     <p style={{ fontSize: '17px',color: 'red'}}>{product.price} $ </p>
    </div>
            
    </div>

    )
}

export default ProductDetials
