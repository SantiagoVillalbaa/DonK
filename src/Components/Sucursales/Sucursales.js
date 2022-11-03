import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import './Sucursales.css';


const Sucursales = () => {
    return (
        <>
            <h2 className='titulo-sucursales'>NUESTRAS SUCURSALES</h2>
            <h3 className='subtitulo-sucursales'>PODES ENCONTRARNOS EN:</h3>
            <div className='contenedor-sucursales'>
                <div className='sucursales'>
                    <div className='nombres-sucursales'>
                        <p>
                            <h3>BELGRANO</h3>
                            <FaMapMarkerAlt/>
                            San Juan 1300
                        </p>
                        <a href='#' className='href'>
                            <FaPhoneAlt/>
                            CONTACTO
                        </a> 
                    </div>
                    <div className='nombres-sucursales'>
                        <p>
                            <h3>RECOLETA</h3>
                            <FaMapMarkerAlt/>
                            Santa Fe 1590
                        </p>
                        <a href='#' className='href'>
                            <FaPhoneAlt/>
                            CONTACTO
                        </a> 
                    </div>
                    <div className='nombres-sucursales' >
                        <p>
                            <h3>PALERMO</h3>
                            <FaMapMarkerAlt/>
                            Salvador 4673
                        </p>
                        <a href='#' className='href'>
                            <FaPhoneAlt/>
                            CONTACTO
                        </a> 
                    </div>
                    <div className='nombres-sucursales'>
                        <p>
                            <h3>OLIVOS</h3>
                            <FaMapMarkerAlt/>
                            Peña 1765
                        </p>
                        <a href='#' className='href'>
                            <FaPhoneAlt/>
                            CONTACTO
                        </a> 
                    </div>
                    <div className='nombres-sucursales'>
                        <p>
                            <h3>OLIVOS</h3>
                            <FaMapMarkerAlt/>
                            Peña 1765
                        </p>
                        <a href='#' className='href'>
                            <FaPhoneAlt/>
                            CONTACTO
                        </a> 
                    </div>
                    <div className='nombres-sucursales'>
                        <p>
                            <h3>OLIVOS</h3>
                            <h4 className='proximo'>¡¡PROXIMAMENTE!!</h4>
                            <FaMapMarkerAlt/>
                            Peña 1765
                        </p>
                        <a href='#' className='href'>
                            <FaPhoneAlt/>
                            CONTACTO
                        </a> 
                    </div>
                    <div className='nombres-sucursales'>
                        <p>
                            <h3>OLIVOS</h3>
                            <h4 className='proximo'>¡¡PROXIMAMENTE!!</h4>
                            <FaMapMarkerAlt/>
                            Peña 1765
                        </p>
                        <a href='#' className='href'>
                            <FaPhoneAlt/>
                            CONTACTO
                        </a> 
                    </div>
                    <div className='nombres-sucursales'>
                        <p>
                            <h3>OLIVOS</h3>
                            <h4 className='proximo'>¡¡PROXIMAMENTE!!</h4>
                            <FaMapMarkerAlt/>
                            Peña 1765
                        </p>
                        <a href='#' className='href'>
                            <FaPhoneAlt/>
                            CONTACTO
                        </a> 
                    </div>
                    <div className='nombres-sucursales'>
                        <p>
                            <h3>OLIVOS</h3>
                            <h4 className='proximo'>¡¡PROXIMAMENTE!!</h4>
                            <FaMapMarkerAlt/>
                            Peña 1765
                        </p>
                        <a href='#' className='href'>
                            <FaPhoneAlt/>
                            CONTACTO
                        </a> 
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Sucursales