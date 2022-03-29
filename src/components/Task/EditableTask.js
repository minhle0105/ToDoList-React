import {Button} from "react-bootstrap";

export const EditableTask = (props) => {
    return (
        <tr key={props.index}>
            <td>{props.index + 1}</td>
            <td><input defaultValue={props.task.taskName} id="taskName" type="text" required onChange={(e) => {e.preventDefault(); props.setNewName(e.target.value)}}/></td>
            <td><input defaultValue={props.task.taskDeadline} id="taskDeadline" type="date" required onChange={(e) => {e.preventDefault(); props.setNewDeadline(e.target.value)}}/></td>
            <td><Button style={{marginLeft: "20%"}} variant="btn btn-outline-danger" onClick={(e) => {e.preventDefault(); props.showPopup(props.index, props.task.taskName)}}>Delete</Button></td>
            <td><Button style={{marginLeft: "20%"}} variant="btn btn-outline-success" onClick={(e) => {e.preventDefault(); props.saveUpdateData(props.index, props.task.taskName, props.task.taskDeadline)}}>Update</Button></td>
        </tr>
    )
}
