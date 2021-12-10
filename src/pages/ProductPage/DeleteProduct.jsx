import {FaTimes} from 'react-icons/fa'

const DeleteProduct = ({product,onDelete}) => {
    return (
        <div className={'deleteDiv'}>
        <FaTimes style={{cursor:'pointer', color:'red'}} onClick={() => onDelete(product)} className={'deletex'} />
     </div>
    )
}

export default DeleteProduct
