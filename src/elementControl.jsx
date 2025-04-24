import React from 'react'
import './ElementControl.css'

export default function ElementControl({task,setTask}) {

  return (
    <section id="newElement">
      <div className="input-group mb-3">
        <button type="button" className="btn btn-secondary btn-sm" onClick="">New</button>
        <input type="text" id="text" className="form-control" placeholder="Nueva tarea" aria-label="Username" aria-describedby="basic-addon1"></input>
      </div>
    </section>
  )
}

/*
1. Obtengo valor del input
let textInput = document.getElementById().value;
console.log(nombre)
2. Creo el objeto nuevo
const newTask = {
  id: (completar),
  text: textInput,
  creationDate: Date(),
  finishDate: null
}
3. Agregar objeto al listado

4. Limpiar el formulario
*/