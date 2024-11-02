import './App.css'
import NavbarComponent from './components/NavbarComponent'
import ItemListContainer from "./components/ItemListContainer"

function App() {
  return (
    <div>
      <NavbarComponent/>
      <ItemListContainer greeting="La tienda del aikidoca" texto="La tienda donde encontrarás todo lo necesario para tu práctica de Aikido"/>
    </div>
  )
}

export default App