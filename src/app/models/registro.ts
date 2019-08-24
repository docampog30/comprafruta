import { Producto } from './producto';

export default interface Registro {
  fecha:Date;
  productos: Producto[];

  cliente?: {
    nombre?: string;
    cedula?: string;
  };

}

export {Registro};