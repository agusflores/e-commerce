import { useParams } from 'react-router-dom'
import { useProductById } from '../../hooks/useProductById'
import { CircularProgress } from '@mui/material'
import { ProductCard } from '../atoms/ProductCard'

export const ProductById = () => {
  const { idProduct } = useParams()
  const { product, loading } = useProductById(idProduct)

  if (loading) {
    return (
      <div className="w-screen h-60 flex items-center justify-center">
        <CircularProgress />
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center">
      <ProductCard product={product} />
    </div>
  )
}
