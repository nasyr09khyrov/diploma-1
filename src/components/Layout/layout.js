import Nav from "../Nav/Nav";
import"./Layout.css";
import Logo from "../logo/Logo";

export default function Layout(props) {
    return (
        <div className="Layout">
            <header>
                <Logo />
                <Nav/>
            </header>
            <aside>
                <nav>NAV CATEGORIES</nav>
            </aside>
            <main>{props.children}</main>
            <footer>
                FOOTER
            </footer>
        </div>
    );
}
