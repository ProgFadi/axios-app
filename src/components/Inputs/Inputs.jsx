import React from 'react'
import './StyleInput.css'

export default function Inputs(props) {
    return (
        <form>
            <input className="input-style" type="text"  placeholder={props.ph} onChange={props.onChange} />
        </form>
    )
}
