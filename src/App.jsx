import NavBar from './components/molecules/NavBar'
import ItemListContainer from './components/atoms/ItemListContainer'
function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenido al e-commerce de Aconcagua Hogar!" />
    </>
  )
}

export default App
