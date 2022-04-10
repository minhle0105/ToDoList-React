export const ascendingComparator = (a, b) => {
    if (a.taskDeadline > b.taskDeadline) {
        return -1;
    }
    if (a.taskDeadline < b.taskDeadline) {
        return 1;
    }
    return 0
}

export const descendingComparator = (a, b) => {
    if (a.taskDeadline > b.taskDeadline) {
        return 1;
    }
    if (a.taskDeadline < b.taskDeadline) {
        return -1;
    }
    return 0
}
