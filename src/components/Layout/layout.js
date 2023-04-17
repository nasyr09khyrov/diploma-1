import CategoryList from "../CategoryList/CategoryList";
import Logo from "../ui/Logo/Logo"
import Nav from "../Nav/Nav";
import "./Layout.css";
import CartLink from "../CartLink/CartLink";

export default function Layout(props) {
  return (
    <div className="Layout">
      <header>
        <Logo />
        <Nav />
        <CartLink />
      </header>
      <aside>
        <CategoryList />
      </aside>
      <main>{props.children}</main>
      <footer>FOOTER</footer>
    </div>
  );
}
