import { useContext } from "react";
import { AppContext } from "../../App";
import { NavLink } from "react-router-dom";
import "./ProductsList.css";

export default function ProductsList() {
  const { products } = useContext(AppContext);

  const output = products.map((product) => (
    <div key={product.id} className="Product">
      <img src={product.picture} alt={product.name} />
      <NavLink to={"/products/" + product.slug}>{product.name}</NavLink>
      <span>{product.prise} dollar</span>
    </div>
  ));

  return <div className="ProductList">{output}</div>;
}
