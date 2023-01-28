import React, {useEffect} from 'react';
import PropTypes  from 'prop-types';
import { Contacto } from '../../Models/contacto.class'
import { ESTADOS } from '../../Models/estados.enum'

// Importamos stilos
import '../../styles/contacto.scss'

const ContactoComponent = ({contacto, change, remove}) => {

    // HOOKS
    useEffect(() => {
        console.log('COMPONENTE CONTACTO CREADO')
        return () => {
            console.log(`COMPONENTE: ${contacto.name} COMIENZA EL UNMOUNT`)
        }
    }, [contacto]);


    // FUNCIONES
    function showConnection(){
        switch(contacto.estado){
            case ESTADOS.CONECTADO:
                return(
                <h2 className='mb-0'>
                    <span id='connectionOn'>
                    {contacto.estado}
                    </span>
                </h2>)

            case ESTADOS.DESCONECTADO:
            return(
                <h2 className='mb-0'>
                    <span id='connectionOff'>
                    {contacto.estado}
                    </span>
                </h2>)
            default:
                break    
        }
    }

    function changeConnection(){
        if(contacto.estado === ESTADOS.CONECTADO){
            return (<i onClick={() => change(contacto)}
             className="bi bi-toggle-on task-action" style={{color: 'green'}}></i>)
        }else{
            return (<i onClick={() => change(contacto)}
             className="bi bi-toggle-off task-action" style={{color: 'gray'}}></i>)
        }
    }




    return (
        <div id='lista' className='container'>
            <ul>
            <div>
                <h3>
                    Nombre:
                </h3>
                <li>
                    { contacto.name }
                </li>
            </div>
                
                <div>
                <h3>
                    Apellido:
                </h3>
                <li>
                    { contacto.last_name }
                </li>
            </div>
            <div>
                <h3>
                    Correo electrónico:
                </h3>
                <li>
                    { contacto.email }
                </li>
            </div>
            <div>
                <h3>
                    Número de teléfono:
                </h3>
                <li>
                    { contacto.phone }
                </li>
            </div>
            <div>
                <h3>
                    Estado actual:
                </h3>
                <li>
                    <strong>{ showConnection() }</strong>
                </li>
            </div>
            <div>
            <br/>
                <h3>
                    Cambiar estado:
                </h3>
                <li>
                {changeConnection()}
                </li>
            </div>
            <div>
            <br/>
                <h3>
                    Borrar contacto:
                </h3>
                <li>
                <i className='bi-trash task-action' style={{color: 'tomato'}} onClick={() => remove(contacto)}></i>
                    
                </li>
            </div>
            </ul>
            
        </div>
    )
}




ContactoComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto).isRequired,
    change: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired

}

export default ContactoComponent;
