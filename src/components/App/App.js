import React, {useEffect, useState} from "react";
import './App.css';
import AddForm from "../AddForm/AddForm";
import TaskTable from "../TaskTable/TaskTable";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import {showSweetAlertModalPopup} from "../../SweetAlertModalPopup";
import {useDispatch, useSelector} from "react-redux";
import {addToDo, deleteToDo, sortToDo, updateToDo, selectAllTask} from "../../redux/todoSlice";

function App() {

    const selectorTaskList = useSelector(selectAllTask);
    const [taskList, setTaskList] = useState(selectorTaskList)
    const [taskName, setTaskName] = useState('');
    const [taskDeadline, setTaskDeadline] = useState('')
    const [showAddForm, setShowAddForm] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        setTaskList(selectorTaskList)
        localStorage.setItem("taskList", JSON.stringify(selectorTaskList));
    }, [selectorTaskList])

    const addNewTask = (taskName, taskDeadline) => {
        dispatch(addToDo({
            taskName: taskName,
            taskDeadline: taskDeadline
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addNewTask(taskName, taskDeadline);
        showSweetAlertModalPopup("add")
        setTaskName('');
        setTaskDeadline('');
    }

    const handleDelete = (i) => {
        dispatch(deleteToDo({i}));
        showSweetAlertModalPopup("delete")
    }

    const handleSort = (type) => {
        dispatch(sortToDo({type}))
    }

    const getTodayString = () => {
        const [month, day, year] = new Date()
            .toLocaleDateString("en-US")
            .split("/");
        return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    };

    const saveUpdateData = (i, newName, newDate) => {
        const originalName = taskList[i].taskName;
        const originalDate = taskList[i].taskDeadline;
        dispatch(updateToDo({i, newName, newDate}));
        if (newName !== originalName || newDate !== originalDate) {
            showSweetAlertModalPopup("update")
        }
    }


    return (
        <div className="container">
            <div style={{marginTop: 10}}>
                <Button variant={showAddForm ? 'danger' : 'primary'} style={{width: 100, maxWidth: "100%"}} onMouseDown={(e) => {
                    setShowAddForm(!showAddForm)
                }}>{showAddForm ? 'Close' : 'Add Task'}</Button>
            </div>
            <div className="addForm">
                {showAddForm ? <AddForm minDate={getTodayString()} taskName={taskName} taskDeadline={taskDeadline}
                                        setTaskName={setTaskName}
                                        setTaskDeadline={setTaskDeadline} handleSubmit={handleSubmit}/> : null}

            </div>
            <div className="taskTable" >
                <TaskTable handleSort={handleSort} taskList={taskList} minDate={getTodayString()}
                           setTaskList={setTaskList}
                           handleUpdate={saveUpdateData} handleDelete={handleDelete}/>
            </div>
        </div>
    );
}

export default App;
