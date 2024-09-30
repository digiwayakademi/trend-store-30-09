import "./CartItem.css";
import { CartContext } from "../context/CartProvider";
import { useContext } from "react";

const CartItem = ({product}) => {
    const {name,  img, price,amount} = product;
    const {removeItem} = useContext(CartContext);
  return (
    <li className="cart-item">
        <div className="cart-item-img">
            <img src={img} alt={name} />
        </div>
        <div className="cart-item-info">
            <div className="cart-item-texts">
                <b>{name}</b>
                <div>
                    <span>₺{price} x</span>
                    <span className="cart-item-amount">{amount}</span>
                </div>
            </div>
            <a href="/" className="cart-item-remove" onClick={(e) => {
                e.preventDefault();
                removeItem(product.id)
            }
                
            }>x</a>
        </div>
    </li>
  )
}

export default CartItem