import React from 'react'
import './Butt0nStyle.css'

function ButtonAdd (props){
    return (
        <button className="button-test" onClick={props.onClickFunction}>{props.content}</button>
    )
}

export default ButtonAdd
