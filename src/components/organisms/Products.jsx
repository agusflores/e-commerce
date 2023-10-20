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
      <div className="flex justify-center align-center flex-wrap">
        {products.map((product) => (
          <li className="list-none" key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </div>
    </>
  )
}
