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

{/* <>
<nav className='mainNav'>
  
    <div className='logo'>
        <Link to={`/`}> <h1>Inylss</h1> </Link>
    </div>


    <div className='menuLink'>
        <ul>
            <li>
                <NavLink exact to='/inicio' activeClassName='menuLinkSelected'>Inicio</NavLink>
            </li>
            <li>
                <NavLink exact to='/' activeClassName='menuLinkSelected'>Productos</NavLink>
            </li>
            <li>
                <NavLink exact to='/sobreNosotros' activeClassName='menuLinkSelected'>Sobre nosotros</NavLink>
            </li>
            <li>
                <NavLink exact to='/contacto' activeClassName='menuLinkSelected'>Contacto</NavLink>
            </li>
        </ul>
    </div>

    <div className='iconsNav'>
        <ul>
            <li>
                <a href='/'>
                    <CartWidget />
                </a>
            </li>
            <li>
                <a href='/'>
                    <BiUser />
                </a>
            </li>
        </ul>

        <div className='menuHamburger'>
            <a href='/'>
                <GiHamburgerMenu />
            </a>
        </div>
    </div>
</nav>
</> */}
