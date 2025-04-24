import React from 'react'

export default function Task({item}) {
    const select = () =>{ //Nehuén despues arregla esto :)
        item.classList.toggle("checked");
        item.classList.toggle("table-active");
    }

    const checkTask = () => {;
        item.checked = !item.checked;
    }

    return (
    <tr id={item.id} onClick={select()}>
        <th scope="row">
            <input className="form-check-input" type="checkbox" value="" id="checkbox-0" onClick={checkTask()} />
        </th>
        <td>{item.text}</td>
        <td>{item.creationDate ? new Date(item.creationDate).toDateString() : "???"}</td>
        <td>{item.finishDate ? new Date(item.finishDate).toDateString() : "???"}</td>
    </tr> 
  )
}
