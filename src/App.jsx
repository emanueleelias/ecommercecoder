import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import CartContextProvider from './context/CartContext';
import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/itemList/ItemListContainer';
import Home from './components/layouts/Home';
import Cart from './components/cart/Cart';
import AboutUs from './components/layouts/AboutUs';
import Contact from './components/layouts/Contact';
import CartClose from './components/cart/CartClose';
import ItemDetailContainer from './components/itemDetails/ItemDetailContainer';
import FormCart from './components/cart/FormCart';  
import Footer from './components/layouts/Footer';
import './commonStyles/main.scss';
 
function App() {
  return (
      <CartContextProvider>
        <BrowserRouter>
          <Fragment>

            <Navbar />

            <Routes>

              <Route path='/inicio' element={<Home />} />
  
              <Route path='/sobreNosotros' element={<AboutUs />} />

              <Route path='/contacto' element={<Contact />} />

              <Route path='/:categorieId' element={<ItemListContainer greeting='Nuestras mochilas' />} exact/>
                
              <Route path='/cart' element={<Cart />} />

              <Route path='/cart-close' element={<CartClose messageTitle='Compra Terminada' message2='Seguir comprando'/>} /> 

              <Route path='/' element={<ItemListContainer greeting='Nuestras mochilas' />} />

              <Route path='/detalle/:productId' element={<ItemDetailContainer />} />
 
              <Route path='/formulario' element={<FormCart />} /> 

            </Routes>

            <Footer />
            
          </Fragment>
        </BrowserRouter>
      </CartContextProvider>
  )
}

export default App;
