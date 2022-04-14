import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from "react-bootstrap";
import Swal from "sweetalert2";
import {Fragment, memo, useState} from "react";
import './TaskTable.css';
import {EditableTask} from "../Task/EditableTask";
import {ReadOnlyTask} from "../Task/ReadOnlyTask";

const TaskTable = (props) => {
    const [idToUpdate, setIdToUpdate] = useState(null);
    const [sortField, setSortField] = useState('ascending');
    const showPopup = (index, name) => {
        Swal.fire({
            title: `Are you sure to delete task "${name.trim()}" ? This action can not be undone`,
            showCancelButton: true,
            confirmButtonText: 'Delete',
            confirmButtonColor: 'Red'
        }).then((result) => {
            if (result.isConfirmed) {
                props.handleDelete(index);
            }
        })
    }

    const handleUpdateClick = (i) => {
        setIdToUpdate(i);
    }


    const handleCancelUpdate = () => {
        setIdToUpdate(null);
    }

    const handleSortLocal = () => {
        if (sortField === 'ascending') {
            setSortField('descending');
        } else {
            setSortField('ascending');
        }
        props.handleSort(sortField);
    }


    return (
        <div>
            <div style={{display: "inline"}}>
                <h1 style={{textAlign: "center"}}>Tasks List</h1>
            </div>

            <form>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Description</th>
                        <th>Deadline <img id="sortCol" onClick={() => handleSortLocal()} src="/sortIcon.png" width={12}
                                          height={12} alt="sort"/></th>
                        <th colSpan={2} style={{textAlign: "center"}}> Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.taskList.map((task, index) => (
                        <Fragment key={index}>
                            {idToUpdate === index ?
                                <EditableTask minDate={props.minDate} index={index} task={task} name={props.newName}
                                              setIdToUpdate={setIdToUpdate} saveUpdateData={props.handleUpdate}
                                              handleCancel={handleCancelUpdate}/> :
                                <ReadOnlyTask index={index} task={task} showPopup={showPopup}
                                              handleUpdateClick={handleUpdateClick}/>}
                        </Fragment>
                    ))}
                    </tbody>
                </Table>
            </form>

        </div>
    )
}

export default memo(TaskTable, (prevProps, nextProps) => {
    return JSON.stringify(prevProps) === JSON.stringify(nextProps);
});
