import './App.css';
import Drawer from './components/Drawer'
import {useLocation} from 'react-router-dom'
import Login from './pages/Login';

function App(props) {
  let location = useLocation()

  return  (
    <div>
}      {location.pathname ==='/login'? <Login /> : <Drawer />}
    </div>

  )
}

export default App;
