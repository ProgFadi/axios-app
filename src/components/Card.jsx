import { height } from "@mui/system";
import React from "react";




function Card(props) {

  return (
    <div class="card">
        <img src={props.object.image}/>
        <h1>{props.object.name}</h1>
        <p>{props.object.type}</p>
        <p class="price">{props.object.price}</p>
        <p><button onClick={()=>props.addTocart(props.object)}>Add to Cart</button></p>
    </div>
  );
}


export default Card;