import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const [quantity, setQuantity] = useState(0)
  const [total, setTotal] = useState(0)

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        quantity,
        setQuantity,
        total,
        setTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
