import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from "react-bootstrap";
import Swal from "sweetalert2";
import {useState} from "react";
import './TaskTable.css';
import {EditableTask} from "../Task/EditableTask";
import {ReadOnlyTask} from "../Task/ReadOnlyTask";
import {Fragment} from "react";

export const TaskTable = (props) => {
    const [idToUpdate, setIdToUpdate] = useState(null);
    const showPopup = (index, name) => {
        Swal.fire({
            title: `Are you sure to delete task "${name.trim()}" ? This action can not be undone`,
            showCancelButton: true,
            confirmButtonText: 'Yes, delete',
            confirmButtonColor: 'Red'
        }).then((result) => {
            if (result.isConfirmed) {
                props.handleDelete(index);
            }
        })
    }

    const handleUpdateClick = (i) => {
        setIdToUpdate(i);
    }


    const handleCancelUpdate = () => {
        setIdToUpdate(null);
    }

    return (
        <div>
            <div style={{display: "inline"}}>
                <h1 style={{textAlign: "center"}}>Tasks List</h1>
            </div>

            <form>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Description</th>
                        <th>Deadline</th>
                        <th colSpan={2} style={{textAlign: "center"}}> Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.taskList.map((task, index) => (
                        <Fragment key={index}>
                            {idToUpdate === index ?
                                <EditableTask minDate={props.minDate} index={index} task={task} name={props.newName}
                                              deadline={props.newDeadline} newName={props.newName} newDeadline={props.newDeadline} setNewName={props.setNewName}
                                              setNewDeadline={props.setNewDeadline} setIdToUpdate={setIdToUpdate}
                                              saveUpdateData={props.handleUpdate} handleCancel={handleCancelUpdate}/> :
                                <ReadOnlyTask index={index} task={task} showPopup={showPopup}
                                              handleUpdateClick={handleUpdateClick}/>}
                        </Fragment>
                    ))}
                    </tbody>
                </Table>
            </form>

        </div>
    )
}
