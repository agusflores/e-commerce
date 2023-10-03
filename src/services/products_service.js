const API_URL = 'https://fakestoreapi.com'

export const getAllProducts = async () => {
  return fetch(`${API_URL}/products`)
}

export const getProductById = async (idProduct) => {
  return fetch(`${API_URL}/products/${idProduct}`)
}
