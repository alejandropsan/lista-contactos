import React, {useEffect, useState} from 'react';
import { Contacto } from '../../Models/contacto.class';
import { ESTADOS } from '../../Models/estados.enum';
import ContactoComponent from '../pure/contacto';

// ESTILOS
import '../../styles/contacto.scss'
import ContactoForm from '../pure/forms/contactoForm';

const ContactolistaComponent = () => {

    const contactoOne = new Contacto('Alberto', 'Sayas', 'alberto@sayas.com', '654666333',ESTADOS.CONECTADO)
    const contactoTwo = new Contacto('Sandra', 'Martínez', 'sandra@martinez.com', '693234221',ESTADOS.CONECTADO)
    const contactoThree = new Contacto('Noelia', 'Roca', 'noelia@roca.com', '634567333',ESTADOS.CONECTADO)
    const contactoFour = new Contacto('Juan José', 'Lara', 'juanjose@lara.es', '653321998',ESTADOS.DESCONECTADO)
    const contactoFive = new Contacto('Antonio', 'Montero', 'antonio@montero.com', '615434221',ESTADOS.DESCONECTADO)




    const [contactos, setContactos] = useState([contactoOne, contactoTwo, contactoThree, contactoFour, contactoFive])

    useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL COMPONENTE')
        return () => {
            console.log('EL COMPONENTE COMIENZA SU DESMONTAJE')
            };
        }, [contactos]);


        function changeContacto(contacto){
            console.log("Cambiando estado de conexión...", contacto)
            const index = contactos.indexOf(contacto)
            const temContactos = [...contactos]
            if(temContactos[index].estado === ESTADOS.CONECTADO){
                temContactos[index].estado = ESTADOS.DESCONECTADO
                setContactos(temContactos)
            }else{
                 temContactos[index].estado = ESTADOS.CONECTADO
            }
           
            setContactos(temContactos)
        }

        function addContacto(contacto){
            console.log("Creado el nuevo contacto" + contacto)
            const temContactos = [...contactos]
            temContactos.push(contacto)
            setContactos(temContactos)
        }


        function removeContacto(contacto){
            console.log("Contacto borrado")
            const index = contactos.indexOf(contacto)
            const temContactos = [...contactos]
            temContactos.splice(index, 1)
            setContactos(temContactos)
        }
       


    return (
        <div id='contactoLista'>
            <div className='col-12'>
                <div className='card'>
                <div className='card-header'>
                <h1 id='contactos' className='card-title'>Contactos</h1>
                <hr/>
                </div>
                        <div className='card-body'>
                        { contactos.map((contacto, index) => {
                            return (
                                <ContactoComponent
                                key={ index }
                                contacto={ contacto }
                                change={changeContacto}
                                remove={removeContacto}>
                                </ContactoComponent>
                                )
                            }
                        )}
                        <br/>
                        <br/>
                        </div>
                        <h2 id='titleForm'>Añade un nuevo contacto</h2>
                        <ContactoForm add={addContacto}></ContactoForm>
                </div>
            </div>
        </div>
    )
}

export default ContactolistaComponent;
