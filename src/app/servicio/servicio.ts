import { Jardin } from "../jardin/jardin";

export class Servicio {
  constructor(public id:number, public nombre:string, public descripcion:string, public tipo:string, public imagen: string, public jardin: Jardin){}
}
