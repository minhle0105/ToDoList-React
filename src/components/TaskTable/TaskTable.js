import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Table} from "react-bootstrap";
import Swal from "sweetalert2";
import {useState} from "react";
import './TaskTable.css';
import {Task} from "../Task/Task";

export const TaskTable = (props) => {
    const [sortField, setSortField] = useState('ascending');

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

    return (
        <div>
            <div style={{display: "inline"}}>
                <h1 style={{textAlign: "center"}}>Tasks List</h1>
            </div>

            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Description</th>
                    <th>Deadline <img id="sortCol" onClick={() => handleSortLocal()} src="/sortIcon.png" width={12} height={12} alt="sort"/> </th>
                    <th> </th>
                </tr>
                </thead>
                <tbody>
                {props.taskList.map((task, index) => {
                    return (
                        <Task index={index} task={task} showPopup={showPopup} />
                    )
                })}
                </tbody>
            </Table>
        </div>
    )
}
