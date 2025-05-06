import React, { useState } from 'react'
import ElementControl from './elementControl.jsx'
import Table from './table.jsx'
import './insert.css'

export default function Insert() {
  const [task,setTask] = useState([]);

  const showFastest = () => {
    let idFastest = [0];
    for (let index = 1; index < task.length; index++) {
      if(task[idFastest[0]].finishDate == null) idFastest = [index];
      else if (task[idFastest[0]].finishDate < task[index].finishDate) idFastest = [index];
      else if (task[idFastest[0]].finishDate == task[index].finishDate) idFastest.push(index);
    }
    for (let i = 0; i < idFastest.length; i++) idFastest[i]++;
    if(task[idFastest[0] - 1].checked == false) alert(`No se completo ninguna tarea`);
    else if (idFastest.length == 1) alert(`La tarea mas rapida fue la ${idFastest[0]}`);
    else alert(`Las tareas mas rapidas fueron ${idFastest}`);
  }
  const deleteTask = () => {
    let tasks = document.querySelectorAll(".checked");
    if(tasks === undefined || tasks.length == 0){
      alert("No hay tareas seleccionadas");
    }
    else{
      let numEliminado = 0;
      let temp = [...task];
      for(let i = 0; i < tasks.length; i++){
        tasks[i].classList.remove("checked");
        tasks[i].classList.remove("table-active");
        temp.splice(tasks[i].id - numEliminado, 1);
        numEliminado++;
      }
      for (let index = 0; index < temp.length; index++) {
        temp[index].id = index;
      }
      setTask(temp);
    }
  }

  return (
    <>
      <Table listado={task} setTask={setTask}/>
      <ElementControl task={task} setTask={setTask} />
      <button id="delete" type="button" className="btn btn-danger btn-lg" onClick={deleteTask}>Delete</button>
      <button id="tareaRapida" type="button" className="btn btn-primary btn-lg" onClick={showFastest}>Show Fastest</button>
    </>
  )
}