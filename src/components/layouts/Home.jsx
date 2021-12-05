import { Link } from 'react-router-dom';
import backpackRoute from '../../assets/images/backpackRoute.svg';
import backpackTravel from '../../assets/images/backpackTravel.svg';
import Button from '../commons/Button';
import './home.scss'; 
const Home = () => {
    return (
        <div>

            <div className="hero">
                <h2 className='hero__text'>Mochilas únicas</h2>
            </div>
 
            <div className='container home'>
                <section className='hero-content'>
                    <img src={backpackRoute} alt="" />
                    <div className="texts-one">
                        <h2>Mochilas de la mejor calidad</h2>
                        <p>Para tus viajes tenes que tener una mochila de excelente calidad, los mejores paseos y salidas tienen que ir acompañadas de la seguridad de una mochila donde podes poner todas tus cosas.</p>
                        <Link to='/'>
                            <Button title='Ver mochilas'/>
                        </Link>
 
                    </div>
                </section>

                <section className='hero-content-two'>
                    <img src={backpackTravel} alt="" />
                    <div className="texts-two">
                        <h2>Que te acompañen en todo momento</h2>
                        <p>Cada mochila es confeccionada con materiales de primera calidad, ya sea que la uses en la ciudad, la necesites para salir de viaje, o quieras guardar tus dispositivos electronicos, no lo dudes, somos la mejor opción.</p>
                        <Link to='/'>
                            <Button title='Ver mochilas'/>
                        </Link>
                    </div>
                </section>
            </div>
    
        </div>
    );
};
  
export default Home;
  