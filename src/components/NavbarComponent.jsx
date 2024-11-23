import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom"

const NavbarComponent = () =>{
    return(
        <nav className="navContainer">
            <NavLink className="aLink" to='/'>Sei Ken Shop</NavLink>
            <NavLink className="aLink" to='/products/bukis'>Bukis (Armas)</NavLink>
            <NavLink className="aLink" to='/products/ropa'>Ropa</NavLink>
            <NavLink className="aLink" to='/products/ubicacion'>Ubicación</NavLink>
            <NavLink  className='aLink'to='/cart'><CartWidget counter={18}/></NavLink>
        </nav>
    )
}

export default NavbarComponent