/** 
 *Author:Adrián Iglesias Riño
  Github:https://github.com/Torremolinos/Poo-Proyect*/

class Tarea {
    constructor(id, descripcion) {
        this.id = id;
        this.descripcion = descripcion;
    }

    editar(descripcion) {
        this.descripcion = descripcion;
    }
}