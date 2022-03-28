import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Table} from "react-bootstrap";
import Swal from "sweetalert2";
import {useState} from "react";
import './TaskTable.css';

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
                    <th id="sortCol" onClick={() => handleSortLocal()}>Deadline <img src="sortIcon.png" alt=""/> </th>
                    <th> </th>
                </tr>
                </thead>
                {props.taskList.map((task, index) => {
                    return (
                        <tbody key={index}>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{task.taskName}</td>
                            <td>{task.taskDeadline}</td>
                            <td><Button style={{marginLeft: "20%"}} variant="btn btn-outline-danger" onClick={() => {showPopup(index, task.taskName)}}>Delete</Button></td>
                        </tr>
                        </tbody>
                    )
                })}
            </Table>
        </div>
    )
}
