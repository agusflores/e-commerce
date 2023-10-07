import { Link } from 'react-router-dom'
import { useProductList } from '../../hooks/useProductList'
import { CircularProgress } from '@mui/material'
import { ProductCard } from '../atoms/ProductCard'
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
      <h1 className="text-3xl font-bold text-center">Lista de Productos</h1>
      {products.map((product) => (
        <li key={product.id}>
          <Link to={`/products/${product.id}`}>
            <ProductCard product={product} />
          </Link>
        </li>
      ))}
    </>
  )
}
