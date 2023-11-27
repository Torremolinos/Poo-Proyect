/*Va a coger, los objetos tareas, limpiara, editara, etc...*/
import { Tarea } from './tareas.js';

export class TareasManager {
    /*por cada clase al menos un constructor, y que tenga metodos.*/
    constructor(listaTareas) {
        this.arregloTareas = []; //hacemos un array que almacenara las tareas.
        this.contador = 0;
        this.listaTareas = listaTareas;
    }

    agregarTarea(descripcion) { 
        this.contador++;
        const nuevaTarea = new Tarea(this.contador, descripcion);

    }
}