import { useContext } from "react";
import "./AddtoCart.css";
import { AppContext } from "../../App";

export default function AddToCart({ product }) {
    const { cart, setCart } = useContext(AppContext);

    function onAddToCartClick() {
        setCart({
            ...cart,
            [product.id]: 1
        });
    }


    return (
        <div className="AddToCart">
            <button onClick={onAddToCartClick}>AddToCart</button>  
        </div>
    )
}