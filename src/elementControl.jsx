import React, { useRef } from 'react'
import './ElementControl.css'

export default function ElementControl({task, setTask}) {
  const ref = useRef(null);
  function insert() {
    let currentTask = ref.current.value;
    setTask([...task, currentTask]);
    console.log(task);
    ref.value = "";
  }

  return (
    <section id="newElement">
        <div className="input-group mb-3">
          <button type="button" className="btn btn-secondary btn-sm" onClick={insert}>New</button>
          <input type="text" ref={ref} id="text" className="form-control" placeholder="Nueva tarea" aria-label="Username" aria-describedby="basic-addon1"></input>
        </div>
    </section>
  )
}