import { useParams } from 'react-router-dom'
import { useProductById } from '../../hooks/useProductById'
import { CircularProgress } from '@mui/material'

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
    <div>
      <h1>{product.title}</h1>
      <img width={'100px'} src={product.image} alt={product.title} />
      <h3>Descripcion</h3>
      <p>{product.description}</p>
    </div>
  )
}
