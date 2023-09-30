import { NavLink } from 'react-router-dom'

const ItemNavBar = ({ route }) => {
  return (
    <NavLink
      className={({ isActive }) => (isActive ? 'active nav-item' : 'nav-item')}
      to={route.path}
      aria-current="page"
    >
      {route.name}
    </NavLink>
  )
}

export default ItemNavBar
