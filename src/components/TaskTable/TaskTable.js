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
    const [newTaskName, setNewName] = useState('');
    const [newTaskDeadline, setNewDeadline] = useState('');

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

    const saveUpdateData = (i) => {
        if (!newTaskName) {
            setNewName(props.taskList[i].taskName);
        }
        if (!newTaskDeadline) {
            setNewDeadline(props.taskList[i].taskDeadline);
        }
        const newTaskList = [...props.taskList];
        newTaskList[i] = {
            taskName: newTaskName,
            taskDeadline: newTaskDeadline
        }
        props.setTaskList(newTaskList);
        setIdToUpdate(null);
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
                        <th colSpan={2} style={{textAlign: "center"}}> Action </th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.taskList.map((task, index) => (
                        <Fragment key={index}>
                            {idToUpdate === index ? <EditableTask minDate={props.minDate} index={index} task={task} setName={setNewName} setDeadline={setNewDeadline} saveUpdateData={saveUpdateData} handleCancel={handleCancelUpdate} /> :  <ReadOnlyTask index={index} task={task} showPopup={showPopup} handleUpdateClick={handleUpdateClick} />}
                        </Fragment>
                    ))}
                    </tbody>
                </Table>
            </form>

        </div>
    )
}
