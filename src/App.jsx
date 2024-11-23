import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.js'
import NavbarComponent from './components/NavbarComponent'
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/Error';

function App() {
  return (
    <BrowserRouter>
    <NavbarComponent/>
    <Routes>
      <Route path='/' element={<ItemListContainer greeting='Bienvenidos a la tienda del aikidoca'/>}/>
      <Route path='/products/:category' element={<ItemListContainer greeting='Bienvenidos a la categoria: '/>}/>
      <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App