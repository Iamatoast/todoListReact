import React from 'react'
import Task from './Task.jsx'

export default function Table({listado, setTask}) {
  
  return (
    <section id="table">
      <table className="table table-dark table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Tarea</th>
            <th scope="col">Fecha Creacion</th>
            <th scope="col">Fecha Completado</th>
          </tr>
        </thead>
        <tbody>
          {listado.map(item=>(
            <Task key={item.id} item={item} setTask={setTask} listado={listado}/>
          ))}
        </tbody>
      </table>
    </section>
  )
}