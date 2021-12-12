import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'


function Categories() {
    const navigate = useNavigate()
    const auth = useAuth().isAuth

    useEffect(() => {
        if(!auth) navigate('/login')
        console.log('effect')
    }, )

    
    return (
        <div>
            Categories
        </div>
    );
}

export default Categories;