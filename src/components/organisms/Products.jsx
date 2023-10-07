import { Link } from 'react-router-dom'
import { useProductList } from '../../hooks/useProductList'
import { CircularProgress } from '@mui/material'
export const Products = () => {
  const { products, loading } = useProductList()

  if (loading) {
    return (
      <div className="w-screen h-60 flex items-center justify-center">
        <CircularProgress />
      </div>
    )
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
