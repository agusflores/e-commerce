import NavBar from './components/molecules/NavBar'
import ItemListContainer from './components/atoms/ItemListContainer'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Message from './components/atoms/Message'
function App() {
  return (
    <>
      <BrowserRouter>
        <Message message="Explora nuestra variedad de electrodomésticos esenciales. Haz tu vida más fácil y cómoda hoy mismo." />
        <NavBar />
        <ItemListContainer greeting="Bienvenido al e-commerce de Aconcagua Hogar!" />
        <Routes>
          <Route
            exact
            path="/"
            element={<h1>Home</h1>}
          ></Route>
          <Route path="*" element={<h1>Not Found</h1>}></Route>
          <Route exact path="/home" element={<h1>Home</h1>}></Route>
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
