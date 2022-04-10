import React, {useState, useEffect} from "react";
import './App.css';
import AddForm from "../AddForm/AddForm";
import TaskTable from "../TaskTable/TaskTable";
import 'bootstrap/dist/css/bootstrap.min.css';
import SweetAlert2 from 'react-sweetalert2';
import {Button} from "react-bootstrap";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { addToDo, deleteToDo, updateToDo, sortToDo } from "../../redux/todoSlice";
import { useSelector } from "react-redux";

function App() {

    const selectorTaskList = useSelector((state) => {
        return state.todos;
    });
    const [taskList, setTaskList] = useState(selectorTaskList)
    const [taskName, setTaskName] = useState('');
    const [taskDeadline, setTaskDeadline] = useState('')
    const [swalProps, setSwalProps] = useState({});
    const [showAddForm, setShowAddForm] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        setTaskList(selectorTaskList)
        localStorage.setItem("taskList", JSON.stringify(selectorTaskList));
    }, [selectorTaskList])

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
        dispatch(addToDo({
            taskName: taskName,
            taskDeadline: taskDeadline
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addNewTask(taskName, taskDeadline);
        showSuccessAlert();
        setTaskName('');
        setTaskDeadline('');
    }

    const handleDelete = (i) => {
        dispatch(deleteToDo({i}));
        showDeleteAlert();
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

    const showUpdateAlert = () => {
        Swal.fire({
            title: "Successfully Updated",
            icon: "success",
            showConfirmButton: false,
            timer: 1000
        }).then();
    }

    const saveUpdateData = (i, newName, newDate) => {
        const originalName = taskList[i].taskName;
        const originalDate = taskList[i].taskDeadline;
        dispatch(updateToDo({i, newName, newDate}));
        if (newName !== originalName || newDate !== originalDate) {
            showUpdateAlert();
        }
    }


    return (
        <div className="container">
            <div style={{marginTop: 10}}>
                <Button onMouseDown={(e) => {
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
