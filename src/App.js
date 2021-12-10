
import './App.css';
import Login from './pages/Login'
import {Navigate, Route, Routes} from 'react-router-dom'
import Drawer from './components/Drawer'
import Cards from "./pages/Card";
// import Card from "./pages/Card";


function App(props) {


  return  <Routes>
   <Route path="/dashboard" element={<Drawer/>}/>
   <Route path="/categories" element={<Drawer   {...props}/>}/>
   <Route path="/products" element={<Drawer/>}/>
   <Route path="/login" element={<Login/>}/>
   <Route path="/cards" element={<Cards/>}/>

</Routes>
}

export default App;
