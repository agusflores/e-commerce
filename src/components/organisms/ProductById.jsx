import { useParams } from 'react-router-dom'
import { useProductById } from '../../hooks/useProductById'

export const ProductById = () => {
  const { idProduct } = useParams()
  const { product, loading } = useProductById(idProduct)

  if (loading) {
    return <h1>Cargando...</h1>
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <img
        width={'100px'}
        src={product.image}
        alt={product.title}
      />
      <h3>Descripcion</h3>
      <p>{product.description}</p>
    </div>
  )
}
