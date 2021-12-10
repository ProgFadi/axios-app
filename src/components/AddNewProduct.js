import React from 'react'
import Button from './Button'

const AddNewProduct = (props) => {
    return (
        <>
            <Button value ='add new' handelClick={props.handelClick} />
        </>

    )
}

export default AddNewProduct
