import { Servicio } from "../servicio/servicio";

export class JardinDetail {
  constructor (public id:number, public nombre:string, public direccion:string, public barrio:string, public telefono:number,
    public paginaWeb:string, public imagen:string, public costo: number, public calificacion: number, public descripcion:string,
    public portafolio:Array<Servicio>){
 }
}
