import {useContext} from 'react'
import AuthContext from "../contexts/AuthContext";

const useLogout = () => useContext(AuthContext)
export default useLogout;