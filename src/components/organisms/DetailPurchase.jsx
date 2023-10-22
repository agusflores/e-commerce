import { useContext } from 'react'
import { CartContext } from '../../context/CartProvider'

export const DetailPurchase = () => {
  const cartContext = useContext(CartContext)

  console.log(cartContext)

  console.log(cartContext.cart)

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="detail-purchase-container">
          <h1 className="font-bold text-black-500 mt-5 text-2xl">Checkout</h1>
          <p className="font-bold mt-2">
            Completa tus datos y finaliza la compra.
          </p>
          <div className="data-container">
            <div className="form-container"></div>
            <div className="detail-container">
              <h1 className="font-bold text-black-500 text-2xl m-2">
                Detalle del pedido
              </h1>
              <div>
                <p className="font-bold text-black-500 text-xl mt-5 ml-2">
                  Productos
                </p>
              </div>
              {cartContext.cart.map((product) => (
                
                <div className="detail-product" key={product.id}>
                  <p>
                    {product.quantity} x {product.name} - ${product.price} c/u
                  </p>
                </div>
              ))}
              <div className="flex justify-between">
                <p className="font-bold text-black-500 text-xl ml-2">
                  Subtotal
                </p>
                <p className="detail-final-price font-bold text-black-500">
                  ${cartContext.total}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="font-bold text-black-500 text-xl ml-2">Envio</p>
                <p className="detail-final-price font-bold text-black-500">
                  $4.99
                </p>
              </div>
              <div className="flex justify-between">
                <p className="font-bold text-black-500 text-xl ml-2">Total</p>
                <p className="detail-final-price font-bold text-black-500">
                  ${cartContext.total + 4.99}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}