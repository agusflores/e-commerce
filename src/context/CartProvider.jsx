import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function useCartContext() {
  return useContext(CartContext)
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const [quantity, setQuantity] = useState(0)

  return (
    <CartContext.Provider value={{ cart, setCart, quantity, setQuantity }}>
      {children}
    </CartContext.Provider>
  )
}
