import { createContext, useContext, useReducer } from "react";
import axios from '../utils/axios'
import {TOKEN_KEY} from '../utils/Constants'

let initValue = {
    isAuth: false,
    user: null
}


const AuthContext = createContext({
    ...initValue,
    login: ()=>Promise.resolve(),
    logout: ()=> {}
})
const reducer = (state,action)=>{
    switch(action.type)
    {
        
        case 'LOGIN':
            const {user} = action.payload;
           
            return {
                ...state,
                isAuth:true,
                user:user
            };
           
        case 'LOGOUT':
            return {
                ...state,
                isAuth:false,
                user:null
            };
        default:
            throw new Error("Now matched case for reducing")
    }
}
export const AuthProvider = ({children})=>{
    const [state,dispatch] = useReducer(reducer,initValue)

    const login = async (email, password)=>{
        // e.preventDefault()
        axios.post('/api/academy/auth/login',
        {
            email:email,
            password:password
        }
        )
        .then((response)=>{
            console.log(response)
            let token = response.data.token.access_token;
            let data = response.data;
            localStorage.setItem(TOKEN_KEY, JSON.stringify(data))
            console.log('disp1')
            dispatch({ type: 'LOGIN' , payload:data});
            console.log('disp2')
        })
        .catch((err)=>{
            console.log(err)
            dispatch({ type: 'LOGOUT' , payload:null});
        })
    }

    const logout = ()=>{
        localStorage.removeItem(TOKEN_KEY)
        dispatch({ type: 'LOGOUT' , payload:null});
    }
    return <AuthContext.Provider
    value={
       {
        ...state,
        login,
        logout
       }
    }
    >
        {children}
    </AuthContext.Provider>
}

export default AuthContext;