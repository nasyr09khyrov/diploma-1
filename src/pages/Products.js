import { useContext } from "react";
import { useMatch } from "react-router-dom"
import { AppContext } from "../App";
import NotFound from "./NotFound";

export default function Products() {
    const { params } = useMatch("/products/:slug");
    const { products } = useContext(AppContext);

    const product = products.find(product => product.slug === params.slug);

    if (!products) {
        return <NotFound />;
    }
    return (
        <div className="Products">
            <h1>{product.name}</h1>
            <img src={product.picture} alt={product.name} />
            <span>{product.price} dollar</span>
        </div>
    )
}