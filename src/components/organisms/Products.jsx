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
  return (
    <>
      <h1 className="text-3xl font-bold text-center text-white">
        Lista de Productos
      </h1>
      <div className="container mx-auto mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  items-center justify-center">
          {products.map((product) => (
            <li className="list-none" key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </div>
      </div>
    </>
  )
}
