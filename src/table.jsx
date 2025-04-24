import React from 'react'
import Task from './task'

export default function Table({listado}) {
  
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
            <Task item={item} />
          ))}
        </tbody>
      </table>
    </section>
  )
}