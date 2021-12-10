import ClearIcon from '@mui/icons-material/Clear';
const DeleteProduct = ({product,onDelete}) => {
    return (
        <div className={'deleteDiv'}>
        <ClearIcon style={{cursor:'pointer', color:'red'}} onClick={() => onDelete(product)} className={'deletex'} />
     </div>
    )
}

export default DeleteProduct
