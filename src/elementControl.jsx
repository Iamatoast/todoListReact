import React from 'react'
import './ElementControl.css'

export default function ElementControl({task, setTask}) {
  function insert() {
    let a = document.getElementById("text");
    if(a.value){
      let currentTask = a.value;
      a.value = ""
      const newTask = {
        id: task.length,
        text: currentTask,
        creationDate: Date(),
        finishDate: null,
        checked: false
      }
      setTask([...task, newTask]);
    }
  }

  return (
    <section id="newElement">
        <div className="input-group mb-3">
          <button type="button" className="btn btn-secondary btn-sm" onClick={insert}>New</button>
          <input type="text" id="text" className="form-control" placeholder="Nueva tarea" aria-label="Username" aria-describedby="basic-addon1"></input>
        </div>
    </section>
  )
}