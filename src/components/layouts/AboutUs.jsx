import { Link } from 'react-router-dom';
import imgAbout from '../../assets/images/aboutUs.svg';
import './aboutUs.scss';
import Fade from 'react-reveal/Fade';
 
const AboutUs = () => {
    return (
        <div className="container about">
            <Fade left>
                <img src={imgAbout} alt="Imagen sobre nosotros" />
            </Fade>

            <Fade right>
                <div className='about__texts'>
                    <p>Backpacks es un grupo de fabricantes de mochilas con 20 años de experiencia, ubicados en plena zona comercial de ONCE en la Ciudad de Buenos Aires. Con el objetivo de expandir nuestras ventas online contamos con una amplia variedad de productos dpara diferentes usos, dándole a nuestros clientes la facilidad de adquirir nuestros artículos desde cualquier lugar con envíos al interior del País, podes registrarte como cliente para ver nuestros catálogos y precios mayoristas.</p>
                    <p>Es simple, la mochila que necesitas esta disponile, en un solo lugar y en cualquier momento</p>
                    <p>Si tenés alguna pregunta, ¡no dudes en <Link to='/contacto'>contactarnos!</Link></p>
                </div>
            </Fade>
        </div>
    )
}

export default AboutUs;
