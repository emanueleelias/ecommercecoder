import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import { getFirestore } from '../../service/getFirestore';
import congratulations from '../../assets/images/congratulations.svg'
import CartClose from "./CartClose";
import firebase from 'firebase/app';
import 'firebase/database';
import '../commons/Button';
import './formCart.scss';
import Fade from 'react-reveal/Fade';

const FormCart = () => {
    const { cartList, priceTotal, clearCart } = useCartContext();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const regularExpresionMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const [dataForm, setDataForm] = useState({});
    const [idOrder, setIdOrder] = useState('');
    
    const generateOrder = (dataForm) => {
        const order = 
        {
            buyer: dataForm, 
            items:
                    cartList.map( (prod) => {
                        const id = prod.id;
                        const title = prod.title ;
                        const price = prod.price * prod.amount;
                        return ({id, title, price});
                    }),
            total: priceTotal()
        }
        
        //Agregar en la base de datos
        const dbQuery = getFirestore();
            dbQuery.collection('orders').add(order)
            .then( resp => setIdOrder(resp.id))
            .catch(err => console.log(err))
            .finally(console.log("Finalizo orden")); 

        const itemsToUpdate = dbQuery.collection('products').where(firebase.firestore.FieldPath.documentId(), 'in', cartList.map(i => i.id))

        const batch = dbQuery.batch();

        itemsToUpdate.get()
            .then( collection => {
                collection.docs.forEach(docSnapshot => {
                    batch.update(docSnapshot.ref, {
                        stock: docSnapshot.data().stock - cartList.find(item => item.id === docSnapshot.id).amount
                    })
                })
                batch.commit().then(res => console.log('resultado batch: ', res))
            })     
    } 


    const onSubmit = (data, e) => {
        setDataForm(data)
        generateOrder(data);
        e.target.reset();
    };

    return (
        <>
            {
            idOrder === ''
                ?
                <Fade bottom>
                    <div className="container-form">
                        <form id='contact' onSubmit={handleSubmit(onSubmit)}>
                            <h3>Formulario de compra</h3>
                            <h4>Completa tus tados para finalizar la compra</h4>
                
                            <fieldset>
                                <input placeholder="Tu nombre" {...register("nombre", { required: 'El nombre no puede quedar vacio'})} />
                                <div className="error">
                                    {errors.nombre && <span>{errors.nombre.message}</span>}
                                </div> 
                            </fieldset>

                            <fieldset>
                                <input placeholder="Tu apellido" {...register("apellido", { required: 'El apellido no puede quedar vacio'})} />
                                <div className="error">
                                    {errors.apellido && <span>{errors.apellido.message}</span>}
                                </div>
                            </fieldset>
                            
                            <fieldset>
                                <input placeholder="example@correo.com" {...register("email", { pattern: {value: regularExpresionMail, message: <p>El email es invalido</p>}, required: 'Debe ingresar un email'})} />
                                <div className="error">
                                    {errors.email && <span>{errors.email.message}</span>}
                                </div>
                            </fieldset>
                        
                            <fieldset>
                                <input placeholder="Repeti el correo electrónico" {...register("emailValidation", { pattern:{value: regularExpresionMail, message: <p>El email es invalido</p>}, required: 'Debe ingresar un email', validate: value => value === watch('email') || <p>Los emails no coinciden</p>})} /> 
                                <div className="error">
                                    {errors.emailValidation && <span>{errors.emailValidation.message}</span>}
                                </div>
                            </fieldset>
                    
                            <button className="button" type="submit">Enviar</button>
                        </form>
                    </div>
                </Fade>
                :
                    <CartClose messageTitle='¡Felicidades por su compra!' message2='Ir al inicio' id={idOrder} img={congratulations}/>
            }
        </>
    );
}

export default FormCart;