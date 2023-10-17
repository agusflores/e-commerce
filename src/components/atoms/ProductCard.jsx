import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import { useCartContext } from '../../context/CartProvider'
import { Link } from 'react-router-dom'

export const ProductCard = ({ product }) => {
  const { addToCart } = useCartContext()

  return (
    <Card
      sx={{ maxWidth: 345 }}
      className="product-card flex flex-col justify-between align-center"
    >
      <Link to={`/products/${product.id}`}>
        <CardActionArea>
          <CardMedia component="img" image={product.image} alt={product.name} />
          <CardContent className="h-50">
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="text-center"
            >
              {product.name}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              className="text-center"
            >
              {product.description}
            </Typography>
            <div className="flex align-center gap-2 mt-5 justify-center">
              <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                Precio: ${product.price}
              </span>
              <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                Stock: {product.stock} unidades
              </span>
            </div>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions className="flex flex-col items-center">
        <Button onClick={addToCart}>Agregar al carrito</Button>
      </CardActions>
    </Card>
  )
}
