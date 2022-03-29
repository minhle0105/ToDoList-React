import {Button} from "react-bootstrap";

export const EditableTask = (props) => {
    return (
        <tr key={props.index}>
            <td>{props.index + 1}</td>
            <td><input defaultValue={props.task.taskName} id="taskName" type="text" required onChange={(e) => {
                props.setName(e.target.value ? e.target.value : props.task.taskName);
            }}/></td>
            <td><input defaultValue={props.task.taskDeadline} id="taskDeadline" type="date" required onChange={(e) => {
                props.setDeadline(e.target.value ? e.target.value : props.task.taskDeadline)
            }}/></td>
            <td style={{textAlign: "center"}}><Button variant="btn btn-outline-success" onClick={(e) => {
                e.preventDefault();
                props.saveUpdateData(props.index)
            }}>Update</Button></td>
            <td style={{textAlign: "center"}}><Button variant="btn btn-outline-danger" onClick={(e) => {
                e.preventDefault();
                props.handleCancel();
            }}>Cancel</Button></td>
        </tr>
    )
}
