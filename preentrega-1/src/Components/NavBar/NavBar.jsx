import CategoryList from "../CategoryList/CategoryList";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css"

function NavBar () {
    return (
        <div className="navbar-contenedor">
            <CategoryList />
            <CartWidget />
        </div>
    )
}

export default NavBar;