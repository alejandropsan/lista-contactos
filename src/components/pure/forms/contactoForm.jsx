import React, {useRef} from 'react';
import PropTypes from  'prop-types';
import { ESTADOS } from '../../../Models/estados.enum';
import { Contacto }  from '../../../Models/contacto.class';

import '../../../styles/contacto.scss'

const ContactoForm = ({add}) => {

    const nameRef = useRef('')
    const apellidoRef = useRef('')
    const emailRef = useRef('')
    const phoneRef = useRef('')
    const connectionRef = useRef(ESTADOS.DESCONECTADO)


function addContacto(e){
    e.preventDefault()
    const newContacto = new Contacto(
        nameRef.current.value,
        apellidoRef.current.value,
        emailRef.current.value,
        phoneRef.current.value,
        connectionRef.current.value
    )
    add(newContacto)
}

    return (
        <form onSubmit={addContacto} id="formContacto" className="d-flex justify-content-center align-items-center mb-4">
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id="inputName" type='text' className='form-control form-control-lg' required autofocus placeholder="Nombre nuevo contacto" />
                <input ref={apellidoRef} id="inputApellido" type='text' className='form-control form-control-lg' required placeholder="Apellido" />
                <input ref={emailRef} id="inputEmail" type='email' className='form-control form-control-lg' required placeholder="Email" />
                <input ref={phoneRef} id="inputPhone" type='tel' className='form-control form-control-lg' required placeholder="Teléfono" />
                <input ref={connectionRef} id="inputConnection" type='hidden' className='form-control form-control-lg' required value={ESTADOS.DESCONECTADO} />
                <button type='submit' id="buttonForm" className='btn btn-success btn-lg ms-2'>Añadir</button>
            </div>
            
        </form>
    );
}

ContactoForm.propTypes = {
    add: PropTypes.func.isRequired
}

export default ContactoForm;
