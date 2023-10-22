import { CartContext } from '../../context/CartProvider'
import { Link } from 'react-router-dom'
import { useContext } from 'react'

export const ProductCard = ({ product }) => {
  const cartContext = useContext(CartContext)

  const addQuantityToProduct = () => {
    return { ...product, quantity: 1 }
  }

  const handleClick = () => {
    addQuantityToProduct(product)
    cartContext.setCart([...cartContext.cart, addQuantityToProduct(product)])
    cartContext.setQuantity((prev) => prev + 1)
    cartContext.setTotal(
      parseFloat(cartContext.total) + parseFloat(product.price)
    )
  }

  return (
    <div className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="product-card">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="relative overflow-hidden">
              <img
                className="object-cover w-full h-full"
                src={product.image}
                alt={product.name}
              />
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">
                  <Link to={`/products/${product.id}`}> Ver producto</Link>
                </button>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mt-4">
              {product.name}
            </h3>
            <p className="text-gray-500 text-sm mt-2">{product.description}</p>
            <div className="flex items-center justify-between mt-4">
              <span className="text-gray-900 font-bold text-lg">
                ${product.price}
              </span>
              {product.stock === 0 ? (
                <p className="text-red-500">Sin stock</p>
              ) : (
                <>
                  {cartContext.cart.find((item) => item.id === product.id) ? (
                    <p className="text-black-500">
                      El producto se cargo al carrito
                    </p>
                  ) : (
                    <button
                      onClick={handleClick}
                      className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800"
                    >
                      Agregar al carrito
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>

    // <Card
    //   sx={{ maxWidth: 345 }}
    //   classNameName="product-card flex flex-col justify-between align-center"
    // >
    //   <Link to={`/products/${product.id}`}>
    //     <CardActionArea>
    //       <CardMedia component="img" image={product.image} alt={product.name} />
    //       <CardContent classNameName="h-50">
    //         <Typography
    //           gutterBottom
    //           variant="h5"
    //           component="div"
    //           classNameName="text-center"
    //         >
    //           {product.name}
    //         </Typography>
    //         <Typography
    //           variant="body2"
    //           color="text.secondary"
    //           classNameName="text-center"
    //         >
    //           {product.description}
    //         </Typography>
    //         <div classNameName="flex align-center gap-2 mt-5 justify-center">
    //           <span classNameName="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
    //             Precio: ${product.price}
    //           </span>
    //           <span classNameName="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
    //             Stock: {product.stock} unidades
    //           </span>
    //         </div>
    //       </CardContent>
    //     </CardActionArea>
    //   </Link>
    //   <CardActions classNameName="flex flex-col items-center mb-5">
    //     {product.stock === 0 ? (
    //       <p classNameName="text-red-500">Sin stock</p>
    //     ) : (
    //       <>
    //         {cartContext.cart.find((item) => item.id === product.id) ? (
    //           <p classNameName="text-black-500">El producto se cargo al carrito</p>
    //         ) : (
    //           <Button onClick={handleClick}>Agregar al carrito</Button>
    //         )}
    //       </>
    //     )}
    //   </CardActions>
    // </Card>
  )
}
