import { useContext } from 'react'
import { CartContext } from '../../context/CartProvider'
import { FormDetailPurchase } from '../molecules/FormDetailPurchase'

export const DetailPurchase = () => {
  const cartContext = useContext(CartContext)
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="detail-purchase-container">
          <div className="data-container">
            <div className="form-container">
              <FormDetailPurchase />
            </div>
            <div className="detail-container">
              <div>
                <h1 className="font-bold text-black-500 text-2xl m-2 text-black-500">
                  Detalle del pedido
                </h1>
                <div>
                  <p className="font-bold text-black-500 text-xl mt-5 ml-2 text-black-500">
                    Productos
                  </p>
                </div>
                {cartContext.cart.map((product) => (
                  <div className="detail-product" key={product.id}>
                    <p className="text-black-500">
                      {product.quantity} x {product.name} - ${product.price} c/u
                    </p>
                  </div>
                ))}
              </div>
              <div>
                <div className="flex justify-between">
                  <p className="font-bold text-xl ml-2 text-black-500">
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
      </div>
    </>
  )
}
