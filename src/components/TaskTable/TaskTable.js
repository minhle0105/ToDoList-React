import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Table} from "react-bootstrap";
import Swal from "sweetalert2";

export const TaskTable = (props) => {

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

    return (
        <div>
            <h1 style={{textAlign: "center"}}>Tasks List</h1>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Description</th>
                    <th>Deadline</th>
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
