import { Link } from 'react-router-dom'
import { useProductList } from '../../hooks/useProductList'
export const Products = () => {
  const { products } = useProductList()

  if (!products) {
    return <h1>Cargando...</h1>
  }

  console.log(products)

  return (
    <>
      <h1>Lista de Productos</h1>
      {products.map((product) => (
        <li key={product.id}>
          <Link to={`/products/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </>
  )
}
