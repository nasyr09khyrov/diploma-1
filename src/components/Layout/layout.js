import CategoryList from "../CategoryList/CategoryList";
import Logo from "../ui/Logo/Logo"
import Nav from "../Nav/Nav";
import "./Layout.css";
import CartLink from "../CartLink/CartLink";
import Auth from "../Auth/Auth";
import { useState } from "react";
import NavToggle from "../NavToggle/NavToggle";
import Drawer from "../Drawer/Drawer";
import Footer from "../Footer/Footer"

export default function Layout(props) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  function toggleDrawer() {
    setDrawerOpen(!drawerOpen);
  }


  return (
    <div className="Layout">
      <header>
        <Logo />
        <Nav />
        <NavToggle callback={toggleDrawer} />
        <Drawer open={drawerOpen} toggle={toggleDrawer} />

        <CartLink />
        <Auth />
      </header>
      <aside>
        <CategoryList />
      </aside>
      <main>{props.children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
