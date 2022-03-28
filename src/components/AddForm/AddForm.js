import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form} from "react-bootstrap";


export const AddForm = (props) => {
    return (
        <div>
            <Form onSubmit={props.handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label htmlFor="taskName">Description</Form.Label>
                    <Form.Control id="taskName" type="text" onChange={(e) => props.setTaskName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label htmlFor="taskDeadline">Deadline</Form.Label>
                    <Form.Control type="date" id="taskDeadline" onChange={(e) => props.setTaskDeadline(e.target.value)} />
                </Form.Group>
                <Button variant="outline-primary" type="submit" style={{width: 200}}>Submit Task</Button>
                <Button variant="outline-dark" type="reset" style={{marginLeft: 20, width: 200}}>Reset</Button>
            </Form>
        </div>
    )
}
