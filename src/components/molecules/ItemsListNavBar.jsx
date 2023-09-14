import ItemNavBar from '../atoms/ItemNavBar'
import CartWidget from '../atoms/CartWidget'
import CategoryList from '../atoms/CategoryList'

const ItemsListNavBar = () => {
  return (
    <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
      <ItemNavBar name="Productos" href="#" />
      <ItemNavBar name="Ofertas" href="#" />
      <ItemNavBar name="Contacto" href="#" />
      <CategoryList name="Categorias" />
      <CartWidget quantity={10} />
    </div>
  )
}

export default ItemsListNavBar
