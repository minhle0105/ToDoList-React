import React, {useState, useEffect} from "react";
import './App.css';
import {AddForm} from "../AddForm/AddForm";
import {TaskTable} from "../TaskTable/TaskTable";
import 'bootstrap/dist/css/bootstrap.min.css';
import SweetAlert2 from 'react-sweetalert2';
import {Button} from "react-bootstrap";

function App() {

    const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem("taskList")) ? JSON.parse(localStorage.getItem("taskList")) : []);
    const [taskName, setTaskName] = useState('');
    const [taskDeadline, setTaskDeadline] = useState('')
    const [swalProps, setSwalProps] = useState({});
    const [showAddForm, setShowAddForm] = useState(false);

    useEffect(() => {
        localStorage.setItem("taskList", JSON.stringify(taskList));
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
        let newTaskList = [...taskList];
        newTaskList.splice(i, 1);
        showDeleteAlert();
        setTaskList(newTaskList);
    }

    const handleSort = (type) => {
        if (type === 'ascending') {
            taskList.sort(ascendingComparator);
        } else if (type === 'descending') {
            taskList.sort(descendingComparator);
        }

        setTaskList(taskList);
    }

    const ascendingComparator = (a, b) => {
        if (a.taskDeadline > b.taskDeadline) {
            return -1;
        }
        if (a.taskDeadline < b.taskDeadline) {
            return 1;
        }
        return 0
    }

    const descendingComparator = (a, b) => {
        if (a.taskDeadline > b.taskDeadline) {
            return 1;
        }
        if (a.taskDeadline < b.taskDeadline) {
            return -1;
        }
        return 0
    }

    const getTodayString = () => {
        const [month, day, year] = new Date()
            .toLocaleDateString("en-US")
            .split("/");
        return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    };

    const saveUpdateData = (i, newName, newDate) => {

        let newTaskList = [...taskList];
        newTaskList[i] = {
            taskName: newName,
            taskDeadline: newDate
        }
        setTaskList(newTaskList);
    }


    return (
        <div className="container">
            <div style={{marginTop: 10}}>
                <Button onMouseDown={(e) => {
                    e.preventDefault();
                    setShowAddForm(!showAddForm)
                }}>{showAddForm ? 'Hide Add Form' : 'Show Add Form'}</Button>
            </div>
            <div className="addForm">
                {showAddForm ? <AddForm minDate={getTodayString()} taskName={taskName} taskDeadline={taskDeadline}
                                        setTaskName={setTaskName}
                                        setTaskDeadline={setTaskDeadline} handleSubmit={handleSubmit}/> : null}

            </div>
            <div className="taskTable">
                <TaskTable handleSort={handleSort} taskList={taskList} minDate={getTodayString()}
                           setTaskList={setTaskList}
                           handleUpdate={saveUpdateData} handleDelete={handleDelete}/>
            </div>
            <SweetAlert2 title={swalProps.title} show={swalProps.show} icon={swalProps.icon}
                         showConfirmButton={swalProps.showConfirmButton}/>
        </div>
    );
}

export default App;
