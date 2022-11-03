import Item from "../Item/Item"
import './ItemList.css'

const ItemList = ({lista}) => {
    console.log(lista)
    return (
        <div className="productos">
            {
                lista.map((product) => (
                    <div key={product.id}>
                        <Item 
                        title={product.title} 
                        price = {product.price} 
                        image={product.image}
                        stock={product.stock}/>
                    </div>
                ))
            }
        </div>
    )
}

export default ItemList