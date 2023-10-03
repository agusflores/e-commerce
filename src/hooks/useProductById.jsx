import { useEffect, useState } from 'react'
import { getProductById } from '../services/products_service'

export const useProductById = (idProduct) => {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProductById(idProduct)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .finally(() => setLoading(false))
  }, [idProduct])

  return { product, loading }
}
