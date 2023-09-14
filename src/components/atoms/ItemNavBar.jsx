const ItemNavBar = ({ name, href }) => {
  return (
    <a
      // isActive = font-medium text-blue-500
      className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
      href={href}
      aria-current="page"
    >
      {name}
    </a>
  )
}

export default ItemNavBar
