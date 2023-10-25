import { Link } from 'react-router-dom'

export const EmptyCart = () => {
  return (
    <div className="flex justify-center item-center">
      <div className="empty-cart-container">
        <div className="w-full h-2/3 flex justify-center">
          <img src={'/static/images/empty-cart.png'} alt="" />
        </div>
        <h1 className="text-center mt-5 text-blue-600 text-3xl font-bold">
          El carrito esta vacio
        </h1>
        <div className="flex justify-center mt-5">
          <Link
            to="/products"
            aria-current="page"
            className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
          >
            Ver productos{' '}
          </Link>
        </div>
      </div>
    </div>
  )
}
