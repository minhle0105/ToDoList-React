import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from "react-bootstrap";

export const TaskTable = (props) => {
    return (
        <div style={{marginTop: 20}}>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Description</th>
                    <th>Deadline</th>
                </tr>
                </thead>
                {props.taskList.map((task, index) => {
                    return (
                        <tbody key={index}>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{task.taskName}</td>
                            <td>{task.taskDeadline}</td>
                        </tr>
                        </tbody>
                    )
                })}
            </Table>
        </div>
    )
}
