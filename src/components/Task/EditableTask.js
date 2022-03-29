import {Button} from "react-bootstrap";
import {useState} from "react";

export const EditableTask = (props) => {
    const [nameIsUpdated, setNameUpdated] = useState(false);
    const [dateIsUpdated, setDateUpdated] = useState(false);
    return (
        <tr key={props.index}>
            <td>{props.index + 1}</td>
            <td><input style={{width: "100%"}} defaultValue={props.task.taskName} id="taskName" type="text" required onChange={(e) => {
                setNameUpdated(true);
                props.setNewName(e.target.value ? e.target.value : props.task.taskName);
            }}/></td>
            <td><input min={props.minDate} defaultValue={props.task.taskDeadline} id="taskDeadline" type="date" required onChange={(e) => {
                setDateUpdated(true);
                props.setNewDeadline(e.target.value ? e.target.value : props.task.taskDeadline)
            }}/></td>
            <td style={{textAlign: "center"}}><Button variant="btn btn-outline-success" onClick={(e) => {
                e.preventDefault();
                if (!nameIsUpdated) {
                    console.log(`A ${props.task.taskName}`);
                    props.setNewName();
                }
                if (!dateIsUpdated) {
                    console.log(`B ${props.task.taskDeadline}`);
                    props.setNewDeadline("2022-09-03")
                }
                console.log(`New name ${props.newName}`)
                console.log(`New deadline ${props.newDeadline}`)
                props.saveUpdateData(props.index)
                props.setIdToUpdate(null)
            }}>Update</Button></td>
            <td style={{textAlign: "center"}}><Button variant="btn btn-outline-danger" onClick={(e) => {
                e.preventDefault();
                props.handleCancel(props.index);
            }}>Cancel</Button></td>
        </tr>
    )
}
