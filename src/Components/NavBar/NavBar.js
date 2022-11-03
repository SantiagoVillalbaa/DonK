import logo from '../../img/logo.jpeg';
import './NavBar.css';
import CartWiget from '../CardWiget/CardWiget';



const NavBar = () => {
    return (
        <header>
            <div className='logoNombre'>
            <h1 className='titulo'>DON K</h1>
            </div>
            <ul className='navegacion'>
                <li><a href='#'>BURGERS</a></li>
                <li><a href='#'>PARA PICAR</a></li>
                <li><a href='#'>ENSALADAS</a></li>
                {/* <CartWiget/> */}
            </ul>
        </header>
    )
}

export default NavBar