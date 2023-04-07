
import { Route, Routes } from "react-router"; 
import Layout from "./components/Layout/layout";
import Nav from "./components/Nav/Nav";
import Home from "./components/pages/Home";
import Contacts from "./components/pages/Contacts";


function App() {
  return (
    <div className="App">

        <Layout> 
          <Routes> 
            <Route path="/" element={<Home />} /> 
            <Route path="/about" element={<About />} /> 
            <Route path="/contacts" element={<Contacts />} /> 
            <Route path="/delivery" element={<Delivery />} /> 
 
          </Routes> 
        </Layout> 
    </div> 
  ); 
} 
 
export default App

