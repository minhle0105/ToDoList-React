import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form} from "react-bootstrap";
import {memo} from "react";


const AddForm = (props) => {

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
                    <Form.Control style={{backgroundColor: "#ACDDDE", border: "1px solid black"}} autoComplete="off" required id="taskName" type="text" value={props.taskName}
                                  onChange={(e) => props.setTaskName(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="taskDeadline">Deadline</Form.Label>
                    <Form.Control style={{backgroundColor: "#ACDDDE", border: "1px solid black"}} required type="date" min={props.minDate} id="taskDeadline" value={props.taskDeadline}
                                  onChange={(e) => props.setTaskDeadline(e.target.value)}/>
                </Form.Group>
                <div style={{width: "100%", display: "flex"}}>
                    <div style={{textAlign: "center", display: "inline"}}>
                        <Button type="submit">Submit</Button>
                    </div>
                    <div style={{textAlign: "center", display: "inline"}}>
                        <Button variant="dark" onMouseDown={e => handleReset(e)}>Reset</Button>
                    </div>
                </div>
            </Form>
        </div>
    )
}

export default memo(AddForm);
