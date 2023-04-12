import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";

function App() {
  const [categories, serCategories] = useState([]);

  useEffect(() => {
    return getDocs(categoryCollections)
    .then((docs) => {
        serCategories(
          docs.map (doc => (
            {
            ...doc.data(),
              id: doc.id
            }
          ))
          );
      })
  }, []);




  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/contacts" element={<h1>Contacts</h1>} />
          <Route path="/delivery" element={<h1>Delivery</h1>} />
          <Route path="/categories/:slug" element={<Category />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

