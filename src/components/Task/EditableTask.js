import {Button} from "react-bootstrap";

export const EditableTask = (props) => {
    return (
        <tr key={props.index}>
            <td>{props.index + 1}</td>
            <td><input value={props.task.taskName} id="taskName" type="text" required/></td>
            <td><input value={props.task.taskDeadline} id="taskDeadline" type="date" required/></td>
            <td><Button style={{marginLeft: "20%"}} variant="btn btn-outline-danger" onClick={(e) => {e.preventDefault(); props.showPopup(props.index, props.task.taskName)}}>Delete</Button></td>
            <td><Button style={{marginLeft: "20%"}} variant="btn btn-outline-success" onClick={(e) => {e.preventDefault(); props.handleUpdateClick(props.index)}}>Update</Button></td>
        </tr>
    )
}
