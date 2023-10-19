import { ProductCardInCart } from '../atoms/ProductCardInCart'
import { CartContext } from '../../context/CartProvider'
import { useContext } from 'react'
export const Cart = () => {
  const cartContext = useContext(CartContext)
  const SHIPPING = 4.99
  return (
    <>
      {cartContext.cart.length === 0 ? (
        <div className="h-screen pt-20">
          <h1 className="text-3xl font-bold text-center text-white">
            No hay productos seleccionados en el carrito
          </h1>
        </div>
      ) : (
        <div className="h-screen pt-20  overflow-y-auto">
          <h1 className="mb-10 text-3xl font-bold text-center text-white">
            Productos seleccionados
          </h1>
          <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div className="rounded-lg md:w-2/3">
              {cartContext.cart.map((product) => (
                <ProductCardInCart
                  key={product.id}
                  product={product}
                  initialQuantity={1}
                />
              ))}
            </div>
            <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
              <div className="mb-2 flex justify-between">
                <p className="text-gray-700">Subtotal</p>
                <p className="text-gray-700">${cartContext.total}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700">Envio</p>
                <p className="text-gray-700">${SHIPPING}</p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between">
                <p className="text-lg font-bold">Total</p>
                <div className="">
                  <p className="mb-1 text-lg font-bold">
                    ${cartContext.total + SHIPPING}
                  </p>
                </div>
              </div>
              <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                Comprar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
