import { useContext } from 'react'
import { CartContext } from '../../context/CartProvider'

export const ProductView = ({ product }) => {
  const cartContext = useContext(CartContext)

  const handleClick = () => {
    cartContext.setCart([...cartContext.cart, product])
    cartContext.setQuantity((prev) => prev + 1)
    cartContext.setTotal(
      parseFloat(cartContext.total) + parseFloat(product.price)
    )
  }
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  className="w-full h-full object-cover"
                  src={product.image}
                  alt={product.name}
                />
              </div>
              <div className="flex -mx-2 mb-4">
                <div className="w-full px-2">
                  {product.stock === 0 ? (
                    <p className="text-red-500">Sin stock</p>
                  ) : (
                    <>
                      {cartContext.cart.find(
                        (item) => item.id === product.id
                      ) ? (
                        <p className=" font-bold text-white text-center">
                          El producto se cargo al carrito
                        </p>
                      ) : (
                        <button
                          onClick={handleClick}
                          className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
                        >
                          Agregar al carrito
                        </button>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {product.name}
              </h2>
              <p className="font-bold text-gray-700 dark:text-gray-300">
                {product.description}
              </p>
              <div className="flex mb-4 mt-5">
                <div className="mr-4">
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Precio:{' '}
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    ${product.price}
                  </span>
                </div>
                <div>
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Disponibilidad:{' '}
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    {product.stock} en stock
                  </span>
                </div>
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Descripcion:
                </span>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  sed ante justo. Integer euismod libero id mauris malesuada
                  tincidunt. Vivamus commodo nulla ut lorem rhoncus aliquet.
                  Duis dapibus augue vel ipsum pretium, et venenatis sem
                  blandit. Quisque ut erat vitae nisi ultrices placerat non eget
                  velit. Integer ornare mi sed ipsum lacinia, non sagittis
                  mauris blandit. Morbi fermentum libero vel nisl suscipit, nec
                  tincidunt mi consectetur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
