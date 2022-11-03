import './ItemListContainer.css'
import data from './mockData'
import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {

    /* const [cargando, setCargando] = useState(true)
    
    useEffect(() => {
        setTimeout(()=>{
            setCargando(false)
        },2000)
    }, []) */

    const [productList, setProductList] = useState([])

    useEffect(() => {
        getProducts.then((response) => {
            setProductList(response)
        })
        .catch((error) =>console.log(error))
    }, [])
    
    const getProducts = new Promise ((resolve, reject) =>{
            setTimeout(() => {

                resolve(data)
            },2000)
        })

    return (
        <>
            <h3 className='titulo-hamburguesa'>NUESTRAS HAMBURGUESAS</h3>
            <ItemList lista={productList}/>
        </>
    )
}

export default ItemListContainer