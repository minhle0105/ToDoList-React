import {Button} from "react-bootstrap";

export const EditableTask = (props) => {
    return (
        <tr key={props.index}>
            <td>{props.index + 1}</td>
            <td><input defaultValue={props.task.taskName} id="taskName" type="text" required onChange={(e) => {
                props.setName(e.target.value);
                console.log(`On change ${e.target.value} name`)
            }}/></td>
            <td><input defaultValue={props.task.taskDeadline} id="taskDeadline" type="date" required onChange={(e) => {
                props.setDeadline(e.target.value)
                console.log(`On change ${e.target.value} deadline`)
            }}/></td>
            <td><Button style={{marginLeft: "20%"}} variant="btn btn-outline-danger" onClick={(e) => {
                e.preventDefault();
                props.showPopup(props.index, props.task.taskName)
            }}>Delete</Button></td>
            <td><Button style={{marginLeft: "20%"}} variant="btn btn-outline-success" onClick={(e) => {
                e.preventDefault();
                props.saveUpdateData(props.index)
            }}>Update</Button></td>
        </tr>
    )
}
