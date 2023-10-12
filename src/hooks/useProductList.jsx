import { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'

export const useProductList = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const db = getFirestore()
    const itemsCollection = collection(db, 'Products')
    getDocs(itemsCollection)
      .then((snapshot) => {
        setProducts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      })
      .finally(() => setLoading(false))
  }, [])

  return { products, loading }
}
