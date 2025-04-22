import React, { useState } from 'react'
import ElementControl from './ElementControl'
import Table from './table'

export default function Insert() {
  const [task,setTask] = useState([1,2,3,5]);

  return (
    <>
        <Table listado={task} />
        <ElementControl task={task} setTask={setTask} />
        <button id="delete" type="button" class="btn btn-danger btn-lg" onclick="">Delete</button>
        <button id="tareaRapida" type="button" class="btn btn-primary btn-lg" onclick="">Show Fastest</button>
    </>
  )
}