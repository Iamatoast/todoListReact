import React from 'react'
import './ElementControl.css'

export default function ElementControl({task,setTask}) {

  return (
    <section id="newElement">
        <div className="input-group mb-3">
            <button type="button" class="btn btn-secondary btn-sm" onclick="">New</button>
            <input type="text" id="text" class="form-control" placeholder="Nueva tarea" aria-label="Username" aria-describedby="basic-addon1"></input>
        </div>
    </section>
  )
}