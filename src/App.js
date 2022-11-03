import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Nosotros from './Components/Nosotros/Nosotros';
import Footer from './Components/Footer/Footer';
import Sucursales from './Components/Sucursales/Sucursales';
import Complemento from './Components/Complemento/Complemento';
import Contacto from './Components/Contacto/Contacto';



function App() {
  return (
    <div className='fondo'>
      <div className='foto-presentacion'>
        <NavBar/> 
      </div>
      <Nosotros/>
      <ItemListContainer/>
      <Complemento/>
      <Sucursales/> 
      <Contacto/>
      <Footer/>
    </div>
  )
}

export default App;