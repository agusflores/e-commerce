import { useContext } from 'react'
import { CartContext } from '../../context/CartProvider'
import { NavLink } from 'react-router-dom'

const CartWidget = () => {
  const cartContext = useContext(CartContext)
  return (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? 'active nav-item cart-widget relative inline-flex flex-shrink-0 justify-center items-center'
            : 'nav-item cart-widget relative inline-flex flex-shrink-0 justify-center items-center'
        }
        to="/cart"
        aria-current="page"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="text-white w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>

        <span className="absolute top-0 right-0 inline-flex items-center py-0.5 px-1.5 rounded-full text-xs font-medium transform -translate-y-1/2 translate-x-1/2 bg-rose-500 text-white">
          {cartContext.quantity}
        </span>
      </NavLink>
    </>
  )
}

export default CartWidget
