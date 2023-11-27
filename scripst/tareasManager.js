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
        const nuevaTarea = new Tarea(this.contador, descripcion); //una nueva tarea se instancia usando el contador para el id y la description.
        this.arregloTareas.push(nuevaTarea); //agregamos la tarea al array.
        this.setContador();
        this.setArregloTareas();
    }

    listarTareas() {
        this.listaTareas.innerHTML = ''; //una forma de inicializar la descripcion de la tarea.
        //tarea sale del foreach.
        this.arregloTareas.reverse().forEach((tarea) => {
            this.listaTareas.innerHTML += `<li id="${tarea.id}">
            <input type="text" class="input-tarea" value="${tarea.descripcion}">
            <button class ="boton-eliminar">X</button>
            </li>`;
        });
    }

    editarTarea(idTarea, descripcion) {
        const tarea = this.arregloTareas.find((t) => t.id === idTarea); // esta linea de codigo significa que cuando nosotros vayamos a poner una tarea, obtener y cambiar la descripcion de la tarea objeto. La T es de tareas.

        //si nos encuentra la tarea con el if. Editareamos la tarea.
        if (tarea) {
            tarea.editar(descripcion);
            this.setArregloTareas();

        }
    }

    eliminarTarea(idTarea) {
        //aqui guardamos en la variable arreglo tarea en el local storage, el valor que estoy busscando para eliminar.
        this.arregloTareas = this.arregloTareas.filter((t) => t.id != idTarea);
        this.setArregloTareas();
    }

    limpiarTodo() {
        this.arregloTareas = []; //haciendo esto vaciamos el array.
        this.contador = 0; //lo vaciamos a cero.
        this.setArregloTareas(); //
        this.setContador();
    }

    getContador() {
        const cont = localStorage.getItem("contador");
        return cont;
    }

    setContador() {
        localStorage.setItem("contador", this.contador) //localStorage tiene clave (contador) y el valor "This.contador"
    }

    inicializarContador() {
        if (this.getContador() != null) {
            this.contador = this.getContador();
        }
    }

    getArregloTareas() {
        this.setContador();
        const arreglo = JSON.parse(localStorage.getITem("arregloTareas")); //de este arreglo que tenemos parseamos este array y obtenemos el objeto tareas, es decir quito la array y me quedo solo con las Tareas.
        return arreglo || []; //retornamos el array vacio, sin null ni undefined para que no de problemas.
    }

    setArregloTareas() {
        localStorage.setItem("arregloTareas", JSON.stringify(this.arregloTareas));
        this.listarTareas()
    }
}