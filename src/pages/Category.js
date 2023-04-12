import { useMatch } from "react-router-dom";
import NotFound from "./NotFound";

export default function Category() {
  const { params } = useMatch("/categories/:slug");

  const categories = [
    { id: 1, name: "In containers", slug: "in-containers" },
    { id: 2, name: "ski sticks", slug: "ski-sticks" },
    { id: 3, name: "ski atomic", slug: "ski-atomic" },
    { id: 4, name: "gloves leki", slug: "gloves-leki" },
  ];

  const category = categories.find(
    (category) => category.slug === params.slug
  );

  if (!category) {
    return <NotFound />
  }

  return (
    <div className="Category">
      <h1>{category.name}</h1>
    </div>
  );
}