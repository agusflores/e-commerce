import { useContext } from 'react'
import { CartContext } from '../../context/CartProvider'

export const DetailPurchase = () => {
  const cartContext = useContext(CartContext)

  const handleFinishPurchase = () => {
    cartContext.setCart([])
    cartContext.setQuantity(0)
    cartContext.setTotal(0)
  }
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="detail-purchase-container">
          <h1 className="font-bold text-black-500 mt-5 text-2xl ml-3">
            Checkout
          </h1>
          <p className="font-bold mt-2 ml-3">
            Completa tus datos y finaliza la compra.
          </p>
          <div className="data-container">
            <div className="form-container"></div>
            <div className="detail-container">
              <h1 className="font-bold text-black-500 text-2xl m-2 text-white">
                Detalle del pedido
              </h1>
              <div>
                <p className="font-bold text-black-500 text-xl mt-5 ml-2 text-white">
                  Productos
                </p>
              </div>
              {cartContext.cart.map((product) => (
                <div className="detail-product" key={product.id}>
                  <p className="text-white">
                    {product.quantity} x {product.name} - ${product.price} c/u
                  </p>
                </div>
              ))}
              <div className="flex justify-between">
                <p className="font-bold text-xl ml-2 text-white">Subtotal</p>
                <p className="detail-final-price font-bold text-white">
                  ${cartContext.total}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="font-bold text-white text-xl ml-2">Envio</p>
                <p className="detail-final-price font-bold text-white">$4.99</p>
              </div>
              <div className="flex justify-between">
                <p className="font-bold text-white text-xl ml-2">Total</p>
                <p className="detail-final-price font-bold text-white">
                  ${cartContext.total + 4.99}
                </p>
              </div>
              <div className="h-full"></div>
              <button
                onClick={handleFinishPurchase}
                type="submit"
                className="mt-10 rounded-md bg-blue-500 py-2 px-2 font-medium text-blue-50 hover:bg-blue-600"
              >
                Confirmar compra
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
