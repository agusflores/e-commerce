import { useEffect, useState } from 'react'
import { getAllProducts } from '../services/products_service'

export const useProductList = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getAllProducts()
      .then((data) => data.json())
      .then((data) => setProducts(data))
  }, [])

  return { products }
}
