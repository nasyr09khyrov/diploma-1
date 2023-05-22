import { NavLink } from "react-router-dom";
import "./CategoryList.css";
import DeleteCategory from "../DeleteCategory/DeleteCategory";
import AddCategory from "../AddCategory/AddCategory";
import { useContext } from "react";
import { AppContext } from "../../App";

export default function CategoryList() {
  const { categories } = useContext(AppContext);

  const output = categories.map((category) => (
    <li key={category.id}>
      <NavLink to={`/categories/${category.slug}`}>
        {category.name}
      </NavLink>

      <DeleteCategory category={category} />
    </li>
  ));

  return (
    <div className="CategoryList">
      <h3>Categories</h3>
      <ul>{output}</ul>
      <AddCategory />
    </div>
  );
}