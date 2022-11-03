import { useState } from "react"
import data from "../ItemListContainer/mockData"
import './Item.css'


const Item = ({title,price,image,stock}) => {
    /* const[cantidad,setCantidad] = useState(1)

    const sumar =()=>{
        setCantidad(actualValor=>actualValor+1)
    }
    const restar =() =>{
        setCantidad(actualValor=>actualValor-1)
    } */
    return (
        <div className="card-productos">
            <img src={image} alt={title}/>
            <h2 className="titulo-cards">{title}</h2>
            <h3 className="precio-cards">Precio: ${price}</h3>
            <a href="#">
                <button className="boton-comprar">Ver Detalles</button>
            </a>
        </div>
    )
}

export default Item