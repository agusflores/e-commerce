import ItemNavBar from './ItemNavBar'
import { NAVBAR_ROUTES } from '../../routes/routes'
import CartWidget from './CartWidget'
import { useCartContext } from '../../context/CartProvider'

const ItemsListNavBar = () => {
  const CartContext = useCartContext()
  return (
    <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
      <ul className="navbar">
        {NAVBAR_ROUTES.map((route) => (
          <li key={route.name}>
            <ItemNavBar route={route}></ItemNavBar>
          </li>
        ))}
        <CartWidget quantity={CartContext.quantity} />
      </ul>
    </div>
  )
}

export default ItemsListNavBar
