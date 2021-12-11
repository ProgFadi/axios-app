import React from 'react'

const OneProduct = (props) => {

  const addCart = () => {
    let getData = JSON.parse(localStorage.getItem('CartData'))
    if (!getData){
        let addCart = [props]
        localStorage.setItem('CartData', JSON.stringify(addCart) )
    }
    else{
        getData.push(props)
        localStorage.setItem('CartData', JSON.stringify(getData) )
    }
}
    return (
                      <div className="Card">
                        <img className="img" src={props.image} alt="" />   
                        <div>
                        <div className="item">
                          <div className="p" >
                            <h6>{ props.description }</h6>
                            <h1>{ props.name }</h1>
                          </div>
                          <div>
                            <h2>{ props.price }</h2>
                          </div>
                        </div>
                        <button className="Btn" onClick={addCart}>Add To cart</button>
                        </div>
                      </div>
    )
}

export default OneProduct
