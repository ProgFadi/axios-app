import { useState } from 'react'
import Button from './Button'
import Input from './Input'

const AddItemComp = ({onAdd, onComplete}) => {

    const [title, setTitle] = useState()
    const [price, setPrice] = useState()
    const [category, setCategory] = useState()
    const [count, setCount] = useState()
    const [rate, setRate] = useState()
    const [description, setDescription] = useState()
    const [image, setImage] = useState(null)
    
    const onSubmit = (e) => {
        e.preventDefault()
        if(!title){
            alert('Please Add Product Title')
            return
        }
        if(!price){
            alert('Please Add Product price')
            return
        }
        if(!description){
            alert('Please Add Product description')
            return
        }
        let rating = {
            count : count,
            rate : rate,
        }
        const id = Math.floor(Math.random()*10000)+1
        onAdd({category,description,id,image,price,rating,title})
        setTitle('')
        setPrice('')
        setCategory('')
        setCount('')
        setRate('')
        setDescription('')
        setImage(null)
        onComplete()
    }
    return (

        <form className={'addItem'} onSubmit={onSubmit}>

            <Input type='text'
             disc='Please add  a product Title...' 
             inputName='Product' 
             styles='addItemInput' 
             label='Product Title: ' 
             text={title} 
             onChange={(e)=>setTitle(e.target.value)}
             class={'AddText'} />

            <Input type='text'
             disc='Please add  Price...' 
             inputName='Product' 
             styles='addItemInput' 
             label='Product Price: ' 
             text={price} 
             onChange={(e)=>setPrice(e.target.value)}
             class={'AddText'} />

            <Input type='text' 
            disc='Please add  Description...' 
            inputName='Product' 
            styles='addItemInput' 
            label='Product Description: ' 
            text={description} 
            onChange={(e)=>setDescription(e.target.value)}
            class={'AddText'} />

            <Input type='text' 
            disc='Please add  Category...' 
            inputName='Product' 
            styles='addItemInput' 
            label='Product Category: ' 
            text={category} 
            onChange={(e)=>setCategory(e.target.value)}
            class={'AddText'} />

            <Input type='text' 
            disc='Please add  Count...' 
            inputName='Product' 
            styles='addItemInput' 
            label='Product Count: ' 
            text={count} 
            onChange={(e)=>setCount(e.target.value)}
            class={'AddText'} />

            <Input type='text' 
            disc='Please add  Rate...' 
            inputName='Product' 
            styles='addItemInput' 
            label='Product Rate: ' 
            text={rate} 
            onChange={(e)=>setRate(e.target.value)}
            class={'AddText'} />

            <Input type='file'
            inputName='Product image: '
            styles='addItemInput'
            label='Product Image: '
            onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
            class={'AddText'} />

            <Button name='Add New' styles='btnAdd' type='submit' />

        </form>
    )
}

export default AddItemComp;
