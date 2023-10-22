import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const [quantity, setQuantity] = useState(0)
  const [total, setTotal] = useState(0)
  const [detailPurchaseCart, setDetailPurchaseCart] = useState([])

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        quantity,
        setQuantity,
        total,
        setTotal,
        detailPurchaseCart,
        setDetailPurchaseCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
