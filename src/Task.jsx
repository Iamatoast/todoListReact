import React from 'react'

export default function Task({item, setTask, listado}) {
    const select = () =>{ //Nehuén despues arregla esto :)
        /*item.classList.toggle("checked");
        item.classList.toggle("table-active");
        */
    }

    const updateTask = () => {
        let temp = listado;
        temp[item.id].checked = !item.checked;
        if (temp[item.id].checked) temp[item.id].finishDate = Date();
        else temp[item.id].finishDate = null;
        setTask(temp);
        console.log(listado);
    }

    return (
        <tr id={item.id} onClick={select()}>
            <th scope="row">
                <input className="form-check-input" type="checkbox" value="" id="checkbox-0" defaultChecked={item.checked} onChange={updateTask} />
            </th>
            <td>{item.text}</td>
            <td>{item.creationDate ? new Date(item.creationDate).toDateString() : "???"}</td>
            <td>{item.finishDate ? new Date(item.finishDate).toDateString() : "???"}</td>
        </tr> 
    )
}
