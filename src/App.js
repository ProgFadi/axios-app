import './App.css';
import Login from './pages/Login'
import { Route, Routes} from 'react-router-dom'
import Drawer from './components/Drawer'


function App(props) {


  return  <Routes>
   <Route path="/dashboard" element={<Drawer/>}/>
   <Route path="/categories" element={<Drawer   {...props}/>}/>
   <Route path="/product" element={<Drawer/>}/>
   <Route path="/cart" element={<Drawer/>}/>
   <Route path="/login" element={<Login/>}/>


</Routes>
}

export default App;
