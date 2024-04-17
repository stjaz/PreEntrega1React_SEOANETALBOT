import "../src/App.css"
import Brand from "./Components/Brand/Brand"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"
import NavBar from "./Components/NavBar/NavBar"


function App () {
    return (
        <div>
            <div className="header-contenedor-principal">
                <Brand />
                <NavBar />
            </div>
            <div>
                <ItemListContainer sayingHi="Holis :D"/>
            </div>
        </div>
    )
}

export default App