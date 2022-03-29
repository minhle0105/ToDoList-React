import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form} from "react-bootstrap";


export const AddForm = (props) => {

    const handleReset = (e) => {
        e.preventDefault();
        props.setTaskName('');
        props.setTaskDeadline('');
    }

    return (
        <div style={{borderStyle: "solid", marginTop: 20, marginBottom: 20}}>
            <h1 style={{textAlign: "center"}}>Add New Task</h1>
            <Form style={{margin: 10}} onSubmit={props.handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="taskName">Description</Form.Label>
                    <Form.Control autoComplete="off" required id="taskName" type="text" value={props.taskName} onChange={(e) => props.setTaskName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="taskDeadline">Deadline</Form.Label>
                    <Form.Control required type="date" min={props.minDate} id="taskDeadline" value={props.taskDeadline} onChange={(e) => props.setTaskDeadline(e.target.value)} />
                </Form.Group>
                <Button variant="outline-primary" type="submit" style={{width: 200}}>Submit Task</Button>
                <Button variant="outline-dark" onMouseDown={e => handleReset(e)} style={{marginLeft: 20, width: 200}}>Reset</Button>
            </Form>
        </div>
    )
}
