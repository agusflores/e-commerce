import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const [quantity, setQuantity] = useState(0)
  console.log(cart)

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        quantity,
        setQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
