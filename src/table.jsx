import React, { useState } from 'react'

export default function Table() {
  const [tabla, setTabla] = useState(refreshList)

  const refreshList = () => {
    let newList = "";

    listElements.map(function(element) {
      element.id = index;
  
      if (element.checked)
        {
          element.finishDate = Date();
        }
        else {
          element.finishDate = null;
        }
  
        if (listElements.length > 0) {
          newList +=
          `
          <tr id="${i}" onclick="select(${i})">
            <th scope="row">${index + 1}</th>
            <th scope="row"><input class="form-check-input" type="checkbox" value="" id="checkbox-${index}" ${element.checked ? "checked" : ""} onclick="checkTask(${index})"></th>
            <td>${element.text}</td>
            <td>${element.creationDate ? new Date(element.creationDate).toDateString() : "???"}</td>
            <td>${element.finishDate ? new Date(element.finishDate).toDateString() : "???"}</td>
          </tr>
          `;
        }
        else {
          newList +=
          `
          <tr>
            <th scope="row">1</th>
            <th scope="row">
              <input class="form-check-input" type="checkbox" value="" id="checkbox-0">
            </th>
            <td>No hay elementos</td>
            <td>???</td>
            <td>???</td>
          </tr>
          `;
      }
    });
    localStorage.setItem("todoList", JSON.stringify(listElements));

    return newList;
  }

  return (
    <table class="table table-dark table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">#</th>
          <th scope="col">Tarea</th>
          <th scope="col">Fecha Creacion</th>
          <th scope="col">Fecha Completado</th>
        </tr>
      </thead>
      <tbody>
        {tabla}
      </tbody>
    </table>
  )
}