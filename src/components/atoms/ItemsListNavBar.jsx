import ItemNavBar from './ItemNavBar'
import CartWidget from './CartWidget'

const ItemsListNavBar = () => {
  return (
    <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
      <ItemNavBar name="Productos" href="#" />
      <ItemNavBar name="Ofertas" href="#" />
      <ItemNavBar name="Mas vendidos" href="#" />
      <ItemNavBar name="Contacto" href="#" />
      <CartWidget quantity={10} />
    </div>
  )
}

export default ItemsListNavBar
