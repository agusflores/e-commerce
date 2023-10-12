import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { useEffect, useState } from 'react'

export const useProductById = (idProduct) => {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const db = getFirestore()
    const itemRef = doc(db, 'Products', idProduct)
    getDoc(itemRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setProduct({ ...snapshot.data(), id: snapshot.id })
        } else {
          console.log('No existe el documento')
        }
      })
      .finally(() => setLoading(false))
  }, [idProduct])

  return { product, loading }
}
