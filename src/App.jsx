import NavBar from './components/molecules/NavBar'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Message from './components/atoms/Message'
import { NotFound } from './components/organisms/NotFound'
import { Home } from './components/organisms/Home'

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
                message="Oops, something went wrong."
                secondMessage="Sorry, we couldn't find your page."
                footer="© All Rights Reserved. 2022."
              />
            }
          ></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/products" element={<h1>Products</h1>}></Route>
          <Route exact path="/sales" element={<h1>Sales</h1>}></Route>
          <Route exact path="/contact" element={<h1>Contact</h1>}></Route>
          <Route exact path="/categories" element={<h1>Categories</h1>}></Route>
          <Route
            exact
            path="/category/:categoryName"
            element={<h1>Categoria</h1>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
