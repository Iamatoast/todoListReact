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