import {
    div,
    Flex,
    Icon,
    Link,
    Text,
    ChakraProvider,
} from '@chakra-ui/react'

import {
    FiHome,
    FiTrendingUp,
    FiCompass,
    FiShoppingCart,
} from 'react-icons/fi';

import {BrowserRouter as Router, Routes, Route, Link as ReactLink} from 'react-router-dom'

import Dashboard from './Dashboard'
import Categories from './Categories'
import Products from './Products'
import Cart from './Cart';

import './App.css'

const title = 'Matryoshka'
const link_items = [
    { name: 'Dashboard',    icon: FiHome,           to: '/dashboard',   comp: <Dashboard/>},
    { name: 'Categories',   icon: FiCompass,        to: '/categories',  comp: <Categories/>},
    { name: 'Products',     icon: FiTrendingUp,     to: '/products',    comp: <Products/>},
    { name: 'Cart',         icon: FiShoppingCart,   to: '/cart',        comp: <Cart/>},
]

export default function App() {
    return (
        <ChakraProvider>
            <Router>
                <div className="side_panel">
                    {link_items.map((link, i) => (
                        <Link className='link' as={ReactLink} to={link.to} key={i}>
                            <Icon as={link.icon} />
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className='content'>
                    <Routes>
                        {link_items.map((l, i) => <Route path={l.to} element={l.comp} key={i}/>)}
                    </Routes>
                </div>
            </Router>
        </ChakraProvider>
    )
}
