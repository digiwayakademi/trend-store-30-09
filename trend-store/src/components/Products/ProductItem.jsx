import "./ProductItem.css";
import Rating from "./Rating";
import Card from "../UI/Card";
import { CartContext } from "../context/CartProvider";
import { useContext } from "react";

const ProductItem = ({product}) => {
    const {name, description, img, price} = product;
    const {addItem, items}  = useContext(CartContext);

    console.log(items);

  return (   
    <Card>
        <img src={img} alt={name} />
        <h3 className="product-title"> {name}</h3>
        <p>{description}</p>
        <div className="product-info">
            <Rating />
            <span className="price">{price}₺</span>
        </div>
        <button onClick={() => addItem(product)}>Sepete Ekle</button>
     </Card>
  )
}

export default ProductItem