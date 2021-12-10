import './App.css';
import Login from './pages/Login'
import {Route, Routes} from 'react-router-dom'
import PersistentDrawerLeft from './components/Drawer';

function App(props) {
  return  (
  <div>
  <Routes>
    <Route path="/dashboard" element={<PersistentDrawerLeft/>}/>
    <Route path="/categories" element={<PersistentDrawerLeft   {...props}/>}/>
    <Route path="/products" element={<PersistentDrawerLeft/>}/>
    <Route path="/cart" element={<PersistentDrawerLeft/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/" element={<Login/>}/>
  </Routes>

    {/* <p>Hello Worl</p> */}
  </div>
  )
}

export default App;
