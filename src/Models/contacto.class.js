import { ESTADOS } from  "./estados.enum";


export class Contacto{
    name = ""
    last_name = ""
    email = ""
    phone = ""
    estado = ESTADOS.DESCONECTADO


    constructor(name, last_name, email, phone, estado){
        this.name = name
        this.last_name = last_name
        this.email = email
        this.phone = phone
        this.estado = estado
    }
}