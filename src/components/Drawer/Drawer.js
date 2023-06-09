import Nav from "../Nav/Nav";
import Logo from "../ui/Logo/Logo"
import "./Drawer.css"

function Drawer({ open, toggle }) {
  const drawerClassNames = `Drawer ${open ? "open" : ""}`;

  return (
    <div className={drawerClassNames}>
      <div onClick={toggle} className="backdrop"></div>
      <div className="content">
        <Logo />
        <Nav />
      </div>
    </div>
  );
}

export default Drawer;