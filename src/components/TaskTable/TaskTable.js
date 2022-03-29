import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from "react-bootstrap";
import Swal from "sweetalert2";
import {useState} from "react";
import './TaskTable.css';
import {EditableTask} from "../Task/EditableTask";
import {ReadOnlyTask} from "../Task/ReadOnlyTask";
import {Fragment} from "react";

export const TaskTable = (props) => {
    const [sortField, setSortField] = useState('ascending');
    const [idToUpdate, setIdToUpdate] = useState(null);
    const [newName, setNewName] = useState('');
    const [newDeadline, setNewDeadline] = useState('');

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

    const handleSortLocal = () => {
        if (sortField === 'ascending') {
            setSortField('descending');
        }
        else {
            setSortField('ascending');
        }
        props.handleSort(sortField);
    }

    const handleUpdateClick = (i) => {
        setIdToUpdate(i);
    }

    const saveUpdateData = (i) => {
        console.log(i);
        console.log(`New name ${newName}`)
        console.log(`New deadline ${newDeadline}`)
        const newTaskList = [...props.taskList];
        newTaskList[i] = {
            taskName: newName,
            taskDeadline: newDeadline
        }
        props.setTaskList(newTaskList)

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
                        <th>Deadline <img id="sortCol" onClick={() => handleSortLocal()} src="/sortIcon.png" width={12} height={12} alt="sort"/> </th>
                        <th colSpan={2}> </th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.taskList.map((task, index) => (
                        <Fragment>
                            {idToUpdate === index ? <EditableTask index={index} task={task} setNewName={setNewName} setNewDeadline={setNewDeadline} saveUpdateData={saveUpdateData} showPopup={showPopup} /> :  <ReadOnlyTask index={index} task={task} showPopup={showPopup} handleUpdateClick={handleUpdateClick} />}
                        </Fragment>
                    ))}
                    </tbody>
                </Table>
            </form>

        </div>
    )
}
