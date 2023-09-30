import ItemNavBar from '../atoms/ItemNavBar'
import { NAVBAR_ROUTES } from '../../routes/routes'
import CartWidget from '../atoms/CartWidget'

const ItemsListNavBar = () => {
  return (
    <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
      <ul className="navbar">
        {NAVBAR_ROUTES.map((route) => (
          <li key={route.name}>
            <ItemNavBar route={route}></ItemNavBar>
          </li>
        ))}
        <CartWidget quantity={10} />
      </ul>
    </div>
  )
}

export default ItemsListNavBar
