import'./page.css'
import Progress from './Progress'
import InputField from './InputField'
import {useState} from "react";

function ProductCard ({passedData, onAdd}){
    const [query, setQuery] = useState("")
    if (!passedData.length) return <Progress/>
  return (
      <div>
      <InputField ph="Enter Product Title" onCh={event => setQuery(event.target.value)} />
        <div className={'pro'}>
      {
          passedData.filter(product => {
              if (query === '') {
                  return passedData;
        } else if (product.title.toLowerCase().includes(query.toLowerCase())) {
            return product;
        }
    }).map((product, index)=>(
        <div key={index}  className={'pr'}>
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
