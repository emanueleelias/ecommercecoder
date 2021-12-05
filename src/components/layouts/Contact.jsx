import React from 'react';
import { useForm } from "react-hook-form";
import './contact.scss';
import imgContact from '../../assets/images/contact.svg';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const CustomToast = ({message}) => {
    const style = {
        fontSize: 15,
        color: 'black'
    }; 

    return (
        <div>
            <p style={style}>{`${message}`}</p>
        </div>
    )
}

const Contact = () => {

    const { register, watch, formState: { errors } } = useForm();

    const regularExpresionMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const handleContact = (e) => { 
        e.preventDefault();
       toast.success(<CustomToast message={`${watch('nombre')} gracias por tu mensaje. En breve nos pondremos en contacto contigo`} />, {
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: 3000});
        e.target.reset();
    }  

    return (
        <div className="container contact">
            
            <img src={imgContact} alt="" />

            <div className="">
                        <form id='contact' onSubmit={handleContact}>
                            <h3>Dejanos tu mensaje</h3>
                
                            <fieldset>
                                <input placeholder="Tu nombre" {...register("nombre", { required: 'El nombre no puede quedar vacio'})} />
                                {errors.nombre && <span>{errors.nombre.message}</span>}
                            </fieldset>

                            <fieldset>
                                <input placeholder="Tu apellido" {...register("apellido", { required: 'El apellido no puede quedar vacio'})} />
                                {errors.apellido && <span>{errors.apellido.message}</span>}
                            </fieldset>
                            
                            <fieldset>
                                <input placeholder="example@correo.com" {...register("email", { pattern: {value: regularExpresionMail, message: <p>El email es invalido</p>}, required: 'Debe ingresar un email'})} />
                                {errors.email && <span>{errors.email.message}</span>}
                            </fieldset>

                            <fieldset>
                                <textarea placeholder="Escriba su mensaje aquí...." required></textarea>
                            </fieldset>

                            <button className="button" type="submit">Enviar</button>
                        </form>
                    </div>
        </div>
    )
}

export default Contact;
