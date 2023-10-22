import { useContext } from 'react'
import { CartContext } from '../../context/CartProvider'

export const ProductCardInCart = ({ product }) => {
  const cartContext = useContext(CartContext)

  const handleIncrement = () => {
    if (product.quantity < product.stock) {
      cartContext.setTotal(
        parseFloat(cartContext.total) + parseFloat(product.price)
      )
      changeProductQuantity(true)
    }
  }
  const handleDecrement = () => {
    if (product.quantity > 1) {
      cartContext.setTotal(
        parseFloat(cartContext.total) - parseFloat(product.price)
      )
      changeProductQuantity(false)
    }
  }

  const changeProductQuantity = (isIncrement) => {
    const product = cartContext.cart.find(
      (product) => product.id === product.id
    )
    {
      isIncrement ? (product.quantity += 1) : (product.quantity -= 1)
    }
  }

  const handleRemoveProduct = (id) => {
    cartContext.setCart(cartContext.cart.filter((product) => product.id !== id))
    cartContext.setQuantity((prev) => prev - 1)
    cartContext.setTotal(
      parseFloat(cartContext.total) - parseFloat(product.price)
    )
  }

  return (
    <>
      <div
        className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
        key={product.id}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full rounded-lg sm:w-40"
        />
        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
          <div className="mt-5 sm:mt-0">
            <h2 className="text-lg font-bold text-gray-900">{product.name}</h2>
            <p className="mt-1 text-xs text-gray-700">{product.description}</p>
            <span className="mt-5 inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
              Stock: {product.stock}
            </span>
          </div>
          <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
            <div className="flex items-center border-gray-100">
              <span
                onClick={() => handleDecrement()}
                className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
              >
                {' '}
                -{' '}
              </span>
              <input
                className="h-8 w-8 border bg-white text-center text-xs outline-none"
                type="text"
                value={product.quantity}
                min="1"
              />
              <span
                onClick={() => handleIncrement()}
                className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
              >
                {' '}
                +{' '}
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <p className="text-sm">${product.price}</p>
              <button onClick={() => handleRemoveProduct(product.id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
