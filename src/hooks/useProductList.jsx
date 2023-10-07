import { useEffect, useState } from 'react'
import { getAllProducts } from '../services/products_service'

export const useProductList = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    getAllProducts()
      .then((data) => data.json())
      .then((data) => setProducts(data))
      .finally(() => setLoading(false))
  }, [])

  return { products, loading }
}
