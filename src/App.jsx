import NavBar from './components/molecules/NavBar'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Message from './components/atoms/Message'
import { NotFound } from './components/organisms/NotFound'
import { Home } from './components/organisms/Home'
import { Products } from './components/organisms/Products'
import { ProductById } from './components/organisms/ProductById'

function App() {
  return (
    <>
      <BrowserRouter>
        <Message message="Explora nuestra variedad de electrodomésticos esenciales. Haz tu vida más fácil y cómoda hoy mismo." />
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route
            path="*"
            element={
              <NotFound
                brand="Aconcagua Hogar"
                numberError="404"
                message="Oops, algo salio mal."
                secondMessage="Disculpa, no pudimos encontrar tu pagina."
                footer="© All Rights Reserved. 2022."
              />
            }
          ></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/products" element={<Products />}></Route>
          <Route
            exact
            path="/products/:idProduct"
            element={<ProductById />}
          ></Route>
          <Route exact path="/sales" element={<h1>Sales</h1>}></Route>
          <Route exact path="/contact" element={<h1>Contact</h1>}></Route>
          <Route exact path="/cart" element={<h1>Cart</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
