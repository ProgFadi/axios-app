import { useState, createContext, useEffect, useReducer } from 'react'

let initState = {
  myProducts: [],
  addProductToCart:()=>{}
}

let UserItemsCountContext = createContext(initState)

const reducer = (oldState, action) => {
  switch(action.type)
  {
    case 'add':
      return {
        productsCount: oldState.productsCount + 1
      }
    case 'remove':
      return {
        productsCount: oldState.productsCount + 1
      }
  }
}

export const UserItemsCountProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer,initState)

  const [productsState, setProductsState] = useState(initState.myProducts.length || 0);

  let myProducts = localStorage.getItem('myProducts');
  if (myProducts)
  {
    myProducts = JSON.parse(myProducts);
  }
  const addProductToCart = (newProduct) => {
    if (myProducts){
      myProducts.push(newProduct)
    }
    else {
      myProducts = [newProduct]
    }
    localStorage.setItem('myProducts', JSON.stringify(myProducts));

    setProductsState(myProducts.length);
  }

  const remove = (newProduct) => {
    dispatch({
      type: 'remove'
    })
  }

  useEffect(()=> {
    let myProducts = JSON.parse(localStorage.getItem("myProducts"))

    if (myProducts)
    {

      dispatch({
        type: 'addProductToCart'
      })
    }
  },[])

  return <UserItemsCountContext.Provider
    value={{
      ...state,
      myProducts,
      addProductToCart
    }}
  >
    {children}
  </UserItemsCountContext.Provider>
}
export default UserItemsCountContext;