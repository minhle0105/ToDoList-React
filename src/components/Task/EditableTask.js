import {Button} from "react-bootstrap";
import {useState} from "react";

export const EditableTask = (props) => {
    const [newName, setNewName] = useState(props.task.taskName);
    const [newDate, setNewDate] = useState(props.task.taskDeadline);
    return (
        <tr key={props.index}>
            <td>{props.index + 1}</td>
            <td><input style={{width: "100%"}} defaultValue={props.task.taskName} id="taskName" type="text" required
                       onChange={(e) => {
                           setNewName(e.target.value ? e.target.value : props.task.taskName);
                       }}/></td>
            <td><input min={props.minDate} defaultValue={props.task.taskDeadline} id="taskDeadline" type="date" required
                       onChange={(e) => {
                           setNewDate(e.target.value ? e.target.value : props.task.taskDeadline)
                       }}/></td>
            <td style={{textAlign: "center"}}><Button variant="btn btn-outline-success" onClick={(e) => {
                e.preventDefault();
                props.saveUpdateData(props.index, newName, newDate)
                props.setIdToUpdate(null)
            }}>Update</Button></td>
            <td style={{textAlign: "center"}}><Button variant="btn btn-outline-danger" onClick={(e) => {
                e.preventDefault();
                props.handleCancel(props.index);
            }}>Cancel</Button></td>
        </tr>
    )
}
