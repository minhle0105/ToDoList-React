import React, {useState} from "react";
import './App.css';
import {AddForm} from "../AddForm/AddForm";
import {TaskTable} from "../TaskTable/TaskTable";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    const [taskList, setTaskList] = useState([]);
    const [taskName, setTaskName] = useState('');
    const [taskDeadline, setTaskDeadline] = useState('')

    const addNewTask = (taskName, taskDeadline) => {
        setTaskList([
            ...taskList,
            {
                taskName: taskName,
                taskDeadline: taskDeadline,
            },
        ]);
    }

    const handleSubmit = (e) => {
        console.log("submit")
        e.preventDefault();
        addNewTask(taskName, taskDeadline);
        setTaskName('');
        setTaskDeadline('');
    }


    return (
        <div className="container">
            <div className="addForm">
                <AddForm taskName={taskName} taskDeadline={taskDeadline} setTaskName={setTaskName} setTaskDeadline={setTaskDeadline} handleSubmit={handleSubmit}/>
            </div>
            <div className="taskTable">
                <TaskTable taskList={taskList} setTaskList={setTaskList} />
            </div>
        </div>
    );
}

export default App;
