import './App.css';
import Login from './pages/Login'
import {Route, Routes} from 'react-router-dom'
import Drawer from './components/Drawer'

function App(props) {

  return( 
    <Routes>
      <Route path="/" element={<Drawer/>}/>
      <Route path="/dashboard" element={<Drawer/>}/>
      <Route path="/categories" element={<Drawer   {...props}/>}/>
      <Route path="/products" element={<Drawer/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/cart" element={<Drawer/>}/>
    </Routes>
  )}

export default App;
