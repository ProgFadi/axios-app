import {
    Box,
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
import { icons } from 'react-icons/lib';

const title = 'Matryoshka'
const link_items = [
    { name: 'Dashboard',    icon: FiHome,       to: '/dashboard',   comp: <Dashboard/>},
    { name: 'Categories',   icon: FiCompass,    to: '/categories',  comp: <Categories/>},
    { name: 'Products',     icon: FiTrendingUp, to: '/products',    comp: <Products/>},
]

export default function App() {
    return (
        <ChakraProvider>
            <Router>
                <Flex justifyContent="end" color="white"
                as="header" position="fixed" width="100%" backgroundColor="black" height="2.4rem">
                <Icon mr="4" mt="2" fontSize="20" as={FiShoppingCart}></Icon>
                </Flex>
                <Box display='flex'>
                    {/* Side Panel */}
                    <Box bg='black' color='white' w={60} h='100vh'>
                        {/* Title */}
                        <Flex h="20" alignItems="center" mx="8" justifyContent="space-between"> <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold"> {title} </Text> </Flex>

                        {/* Nav Links */}
                        {link_items.map((l, i) => (
                            <Link as={ReactLink} to={l.to} key={i}>
                                <Flex
                                    align="center"
                                    p="4"
                                    mx="2"
                                    borderRadius="sm"
                                    role="group"
                                    cursor="pointer"
                                    _hover={{ bg: 'white', color: 'black'}}
                                >
                                    {l.icon && ( <Icon mr="4" fontSize="16" _groupHover={{ color: 'black' }} as={l.icon} /> )}
                                    {l.name}
                                </Flex>
                            </Link>
                        ))}
                    </Box>

                    {/* Main Content */}
                    <Box width="80rem" mx='1vw' my='1vh'>
                        <Routes>
                            {link_items.map((l, i) => <Route path={l.to} element={l.comp} key={i}/>)}
                        </Routes>
                    </Box>
                </Box>
            </Router>
        </ChakraProvider>
    )
}
