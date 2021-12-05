import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { VscClose, VscMenu } from 'react-icons/vsc';
import CartWidget from './CartWidget';
import './navbar.scss';

const Navbar = () => {  
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div className="navbar">
            
            <div className="logo-container">
                <Link to={`/`}> 
                    <h1>Back<span>Packs</span></h1>
                </Link>
            </div>

            <ul className={click ? "nav-options active" : "nav-options"}>
                <li className="option" onClick={closeMobileMenu}>
                    <NavLink to='/inicio' className={({isActive}) => isActive ? 'menuLinkSelected' : ""}>Inicio</NavLink>
                </li>
                <li className="option" onClick={closeMobileMenu}>
                    <NavLink to='/' className={({isActive}) => isActive ? 'menuLinkSelected' : ""}>Productos</NavLink>
                </li>
                <li className="option" onClick={closeMobileMenu}>
                    <NavLink to='/sobreNosotros' className={({isActive}) => isActive ? 'menuLinkSelected' : ""}>Sobre nosotros</NavLink>
                </li>
                <li className="option" onClick={closeMobileMenu} >
                    <NavLink to='/contacto' className={({isActive}) => isActive ? 'menuLinkSelected' : ""}>Contacto</NavLink>
                </li>
            </ul>

            <ul className="nav-cart">
                <li>
                    <CartWidget />
                </li>
            </ul>

            <div className="mobile-menu" onClick={handleClick}>
                {click ? (
                    <VscClose />
                ) : (
                    <VscMenu />
                )}
            </div>
        </div>
    );
};

export default Navbar;