import Swal from "sweetalert2";

export const showSweetAlertModalPopup = (actionType) => {
    switch (actionType) {
        case "delete":
            showDeleteAlert();
            break;
        case "update":
            showUpdateAlert();
            break;
        case "add":
            showSuccessAlert();
            break;
        default:
    }
}

const showSuccessAlert = () => {
    Swal.fire({
        title: "Successfully Added New Task",
        icon: "success",
        showConfirmButton: false,
        timer: 1000
    }).then();
}

const showDeleteAlert = () => {
    Swal.fire({
        title: "Successfully Deleted",
        icon: "success",
        showConfirmButton: false,
        timer: 1000
    }).then();
}

const showUpdateAlert = () => {
    Swal.fire({
        title: "Successfully Updated",
        icon: "success",
        showConfirmButton: false,
        timer: 1000
    }).then();
}
