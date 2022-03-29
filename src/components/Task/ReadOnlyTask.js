import {Button} from "react-bootstrap";

export const ReadOnlyTask = (props) => {
    return (
        <tr key={props.index}>
            <td>{props.index + 1}</td>
            <td>{props.task.taskName}</td>
            <td>{props.task.taskDeadline}</td>
            <td><Button style={{marginLeft: "20%"}} variant="btn btn-outline-danger" onClick={() => {props.showPopup(props.index, props.task.taskName)}}>Delete</Button></td>
            <td><Button style={{marginLeft: "20%"}} variant="btn btn-outline-success" onClick={() => {props.handleUpdateClick(props.index)}}>Update</Button></td>
        </tr>
    )
}
