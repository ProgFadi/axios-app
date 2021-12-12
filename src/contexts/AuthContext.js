import { createContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import axios from '../utils/axios'
const authCheck = localStorage.getItem('Token')
if (authCheck) var auth = true
else auth = false
let initState = {
    isAuth:auth,
    user:null,
    login:()=>{},
    logout: ()=>{}
}
let AuthContext = createContext(initState)

const reducer = (oldState,action)=>{
    switch(action.type)
    {
        case 'LOGIN':
            return {
                ...oldState,
                isAuth:true
            }
        case 'LOGOUT':
            return {
                ...oldState,
                isAuth:false
            }
            default:
    }
}


export const AuthProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer,initState)
    const navigate = useNavigate()

        const logout = ()=>{
            localStorage.removeItem('Token');
            dispatch({
                type:'LOGOUT'
            })
        }
         const login = (email, password)=>{
            if (!email || !password) return alert('Please enter Email and Password')
            else{
                axios({
                    method: 'post',
                    url: 'https://fakestoreapi.com/auth/login',
                    data: {
                        username: email,
                        password: password
                    }
                  })
        .then((response)=>{
            let token = response.data.token;
            localStorage.setItem('Token', JSON.stringify(token))
            dispatch({
                type:'LOGIN'
            })
            navigate('/dashboard')
        })
        .catch((err)=>{
            console.log(err)
            
        })}
    }
        useEffect(()=>{
            let token = JSON.parse(localStorage.getItem('Token'))
            if(token)
            {
                dispatch({
                    type:'LOGIN'
                })
            }
        },[])
        return <AuthContext.Provider
        value={{
            ...state,
            login,
            logout
        }}
        >

            {children}
        </AuthContext.Provider>
}
export default AuthContext;