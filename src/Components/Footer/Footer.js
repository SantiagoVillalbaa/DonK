/* import { Link } from 'react-router-dom'; */
import './Footer.css';
import { FaLinkedin } from 'react-icons/fa';
import Logo from '../../img/logo.jpeg';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Footer Header */}
                <header className="footer-header">
                    <div className="fh-line"></div>
                    <div className="fh-logo">
                        <img src={Logo} alt="Meat Palace Logo" />
                    </div>
                    <div className="fh-line"></div>
                </header>

                {/* Footer Legend */}
                <p className="footer-legend">
                    “En Don K contamos con los mejores cortes tanto importados como locales para satisfacer plenamente a nuestros clientes, que es nuestro principal objetivo. También disponemos de los mejores quesos, embutidos y panes para acompañar una Hamburguesa perfecta.”
                </p>

                {/* Footer Navigation */}
                {/* <nav className="footer-nav"> */}
                    {/* <Link className="footer-link navbar-link" to='/'> Home </Link> */}
                    {/* <a className="footer-link navbar-link" href="https://www.linkedin.com/in/santiago-villalba-desarrolador-web/" target="_blank" rel="noreferrer"> Visit Project </a> */}
                    {/* <Link className="footer-link navbar-link" to='/shop/all'> Shop </Link> */}
                {/* </nav> */}

                {/* Footer Developed By */}
                <div className="footer-developed-by">
                    <p>Desarrollado por <span>Santiago Villalba</span></p>
                    <a href="https://www.linkedin.com/in/santiago-villalba-desarrolador-web/"
                       target="_blank" 
                       rel="noreferrer"
                       className="github-btn"
                    >
                        <FaLinkedin className="github-icon" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer