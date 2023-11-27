import { TareasManager } from "./tareasManager.js";

const boton_agregar = document.getElementById("boton-agregar");
const lista_tareas = document.querySelector('.lista-tareas');
const boton_limpiar = document.querySelector('.boton-limpiar');

const tareaManager = new TareasManager(lista_tareas);

//Iniciamos la app web.
tareaManager.inicializarContador();
tareaManager.listaTareas();

boton_agregar.addEventListener('click', () => {
    tareaManager.agregarTarea(""); //queremos meter un objeto tarea sin nada dentro y luego cuando tenga un imput ya lo cambio yo.
})

boton_limpiar.addEventListener('click', () => {
    tareaManager.limpiarTodo();
})

//el event es el parametro que se le pasa al segundo parametro de addeventlistener (es decir el objetivo.) "target"
lista_tareas.addEventListener('click', (event) => {
    const target = event.target; //aqui hacemos referencia al elemento de la lista,(pero realmente lo que queremos es eliminar la tarea asi que debemos aplicar una condicion.)
    if(target.type === 'submit'){
        tareaManager.eliminarTarea(target.parentElement.id)
    }
})