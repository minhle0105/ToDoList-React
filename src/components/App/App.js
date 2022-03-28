import React, {useState, useEffect} from "react";
import './App.css';
import {AddForm} from "../AddForm/AddForm";
import {TaskTable} from "../TaskTable/TaskTable";
import 'bootstrap/dist/css/bootstrap.min.css';
import SweetAlert2 from 'react-sweetalert2';

function App() {

    const [taskList, setTaskList] = useState(JSON.parse(sessionStorage.getItem("taskList")) ? JSON.parse(sessionStorage.getItem("taskList")) : []);
    const [taskName, setTaskName] = useState('');
    const [taskDeadline, setTaskDeadline] = useState('')
    const [swalProps, setSwalProps] = useState({});

    useEffect(() => {
        sessionStorage.setItem("taskList", JSON.stringify(taskList))
    }, [taskList])

    const showSuccessAlert = () => {
        setSwalProps({
            show: true,
            title: `Successfully added new task`,
            icon: 'success',
            showConfirmButton: false,
        });
        setTimeout(() => setSwalProps({
            show: false,
            title: `Successfully added new task`,
            icon: 'success',
            showConfirmButton: false,
        }), 1000);
    }

    const showDeleteAlert = () => {
        setSwalProps({
            show: true,
            title: `Successfully deleted`,
            icon: 'success',
            showConfirmButton: false,
        });
        setTimeout(() => setSwalProps({
            show: false,
            title: `Successfully deleted`,
            icon: 'success',
            showConfirmButton: false,
        }), 1000);
    }

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
        e.preventDefault();
        addNewTask(taskName, taskDeadline);
        showSuccessAlert();
        setTaskName('');
        setTaskDeadline('');
    }

    const handleDelete = (i) => {
        if (window.confirm("Are you sure to delete?")) {
            let newTaskList = [...taskList];
            newTaskList.splice(i, 1);
            showDeleteAlert();
            setTaskList(newTaskList);
        }
    }


    return (
        <div className="container">
            <div className="addForm">
                <AddForm taskName={taskName} taskDeadline={taskDeadline} setTaskName={setTaskName} setTaskDeadline={setTaskDeadline} handleSubmit={handleSubmit}/>
            </div>
            <div className="taskTable">
                <TaskTable taskList={taskList} setTaskList={setTaskList} handleDelete={handleDelete} />
            </div>
            <SweetAlert2 title={swalProps.title} show={swalProps.show} icon={swalProps.icon} showConfirmButton={swalProps.showConfirmButton} />
        </div>
    );
}

export default App;
