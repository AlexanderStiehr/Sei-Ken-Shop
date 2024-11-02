import CarWidget from "./CartWidget"

const NavbarComponent = () =>{
    return(
        <nav className="navContainer">
            <a className="aLink">Sei Ken Shop</a>
            <a className="aLink">Bukis (Armas)</a>
            <a className="aLink">Gis (Trajes)</a>
            <a className="aLink">Ubicación</a>
            <CarWidget counter={18}/>
        </nav>
    )
}

export default NavbarComponent