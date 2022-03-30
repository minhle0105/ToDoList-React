import {Button} from "react-bootstrap";

export const ReadOnlyTask = (props) => {
    return (
        <tr key={props.index}>
            <td>{props.index + 1}</td>
            <td onClick={(e) =>{ props.handleUpdateClick(props.index)}}>{props.task.taskName}</td>
            <td onClick={(e) =>{ props.handleUpdateClick(props.index)}}>{props.task.taskDeadline}</td>
            <td style={{textAlign: "center"}}><Button variant="warning" onClick={(e) => {
                e.preventDefault();
                props.handleUpdateClick(props.index)
            }}>Update</Button></td>
            <td style={{textAlign: "center"}}><Button variant="danger" onClick={(e) => {
                e.preventDefault();
                props.showPopup(props.index, props.task.taskName)
            }}>Delete</Button></td>
        </tr>
    )
}
