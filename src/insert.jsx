import React, { useState } from 'react'
import ElementControl from './ElementControl'
import Table from './Table.jsx'
import './Insert.css'

export default function Insert() {
  const [task,setTask] = useState([]);

  const showFastest = () => {
    let idFastest = [1];
    for (let index = 1; index < task.length; index++) {
      if (task[idFastest - 1] < task[index]) idFastest = [index + 1];
      else if (task[idFastest - 1 == task[index]]) idFastest.push(index + 1);
    }
    if(idFastest[0] == 0 && task[idFastest].checked == false) alert(`No se completo ninguna tarea`);
    else if (idFastest.length == 1) alert(`La tarea mas rapida fue la ${idFastest[0]}`);
    else alert(`Las tareas mas rapidas fueron ${idFastest}`);
  }

  return (
    <>
      <Table listado={task} setTask={setTask}/>
      <ElementControl task={task} setTask={setTask} />
      <button id="delete" type="button" className="btn btn-danger btn-lg" onClick="">Delete</button>
      <button id="tareaRapida" type="button" className="btn btn-primary btn-lg" onClick={showFastest}>Show Fastest</button>
    </>
  )
}