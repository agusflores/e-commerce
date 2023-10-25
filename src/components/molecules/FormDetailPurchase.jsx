import { TextField } from '@mui/material'
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartProvider'
import { Alert } from '../atoms/Alert'

export const FormDetailPurchase = () => {
  const cartContext = useContext(CartContext)
  const [open, setOpen] = useState(false)

  const handleFinishPurchase = () => {
    cartContext.setCart([])
    cartContext.setQuantity(0)
    cartContext.setTotal(0)
  }

  return (
    <>
      <h1 className="font-bold text-black-500 text-2xl">Checkout</h1>
      <p className="font-bold">Completa tus datos y finaliza la compra.</p>
      <form className="flex flex-col gap-3">
        {' '}
        <TextField
          className="w-2/3"
          id="outlined-basic"
          label="Nombre y apellido"
          variant="outlined"
        />
        <TextField
          className="w-2/3"
          id="outlined-basic"
          label="Correo electronico"
          variant="outlined"
        />
        <TextField
          className="w-2/3"
          id="outlined-basic"
          label="Direccion"
          variant="outlined"
        />
        <div>
          <button
            onClick={() => {
              setOpen(true)
            }}
            type="button"
            className="w-2/6 mt-10 rounded-md bg-blue-500 py-2 px-2 font-medium text-blue-50 hover:bg-blue-600"
          >
            Confirmar compra
          </button>
          {open && <Alert onClose={() => handleFinishPurchase()} />}
        </div>
      </form>
    </>
  )
}
