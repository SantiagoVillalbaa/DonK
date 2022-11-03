import './Nosotros.css'
import nosotros from '../../img/nosotros.jpg'

const Nosotros = () => {
    return (
        <div className='section-nosotros'>
            <div className='nosotros-grid'>
                <div className='nosotros-info'>
                    <h2>SOBRE NOSOTROS
                        <div className='border'></div>
                    </h2>
                    <p>Somos una hamburguesería con ganas de hacer las cosas de manera diferente. En DON K vas a encontrar lugares descontracturados, buena música, buena onda y hamburguesas increíbles. Nuestras cocinas están siempre a la vista para que puedas ver el proceso de todo lo que comés. ¡Queremos que te sientas como en tu casa!Tenemos un fuerte compromiso con las comunidades que nos rodean, impulsamos productores y artistas locales. También nos involucramos con nuestro medioambiente, y estamos en camino a reducir a cero el uso de plástico.</p>
                </div>
                <img className='foto-nosotros' src='https://img.freepik.com/free-photo/front-view-delicious-burger-arrangement_23-2148868199.jpg?t=st=1667268972~exp=1667269572~hmac=2e905d1c9c1e22cb6e881ad4706a2e630a6850d15c38f6d57b8c79864101c7aa' alt='foto-nosotros'/>
            </div>
        </div>
    )
}


export default Nosotros

{/* <div className="prueba-grid">
            <div>
                <h2>SOBRE NOSOTROS
                    <div className='border'></div>
                </h2>
                <p>Somos una hamburguesería con ganas de hacer las cosas de manera diferente. En DON K vas a encontrar lugares descontracturados, buena música, buena onda y hamburguesas increíbles. Nuestras cocinas están siempre a la vista para que puedas ver el proceso de todo lo que comés. ¡Queremos que te sientas como en tu casa!Tenemos un fuerte compromiso con las comunidades que nos rodean, impulsamos productores y artistas locales. También nos involucramos con nuestro medioambiente, y estamos en camino a reducir a cero el uso de plástico.</p>
            </div>
            <img className='foto-nosotros' src='https://img.freepik.com/free-photo/front-view-delicious-burger-arrangement_23-2148868199.jpg?t=st=1667268972~exp=1667269572~hmac=2e905d1c9c1e22cb6e881ad4706a2e630a6850d15c38f6d57b8c79864101c7aa' alt='foto-nosotros'/>
        </div> */}