import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Table} from "react-bootstrap";

export const TaskTable = (props) => {
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
                            <td><Button style={{marginLeft: "30%"}} variant="btn btn-outline-danger" onClick={() => {props.handleDelete(index)}}>Delete</Button></td>
                        </tr>
                        </tbody>
                    )
                })}
            </Table>
        </div>
    )
}
