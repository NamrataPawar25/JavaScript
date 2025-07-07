const taskname = document.querySelector("#tname");
const taskdescription = document.querySelector("#tdescription");
const addtaskElmt = document.querySelector("#taskTable");

const TEditNameElmt = document.querySelector("#TEditName")
const TEditDescriptionElmt = document.querySelector("#TEditDescription")
const statusTrueRadio = document.querySelector("#statusTrue");
const statusFalseRadio = document.querySelector("#statusFalse");


tasks = []
function localSaveTask(data) {
    localStorage.setItem("task", JSON.stringify(data));
}

function localGetTask() {
    return JSON.parse(localStorage.getItem("task"));
}

function AddNewTask() {
    const newTaskName = taskname.value.trim();
    const newTaskDescription = taskdescription.value.trim();
    if (!newTaskName || !newTaskDescription) {
        alert("Please fill both fields");
        return;
    }

    const newtask = {
        id: Date.now(),
        name: newTaskName,
        description: newTaskDescription,
        isComplete: "false"
    };


    let t_data = localGetTask();
    t_data.push(newtask);
    localSaveTask(t_data);
    renderTasks();
}

let editingIndex = null;

function UpdateTask(index) {
    let tasks = localGetTask();
    const task = tasks[index]

    TEditNameElmt.value = task.name
    TEditDescriptionElmt.value = task.description
    if (task.isComplete === "true") {
        statusTrueRadio.checked = true;
    } else {
        statusFalseRadio.checked = true;
    }

    editingIndex = index
    console.log(editingIndex);
}

document.querySelector("#updateTaskBTN").addEventListener("click", () => {
    const tasks = localGetTask();

    // Update the selected task using the modal inputs
    tasks[editingIndex].name = TEditNameElmt.value.trim();
    tasks[editingIndex].description = TEditDescriptionElmt.value.trim();
    tasks[editingIndex].isComplete = statusTrueRadio.checked ? "true" : "false";

    localSaveTask(tasks);
    renderTasks();
});


function renderTasks() {
    let tasks = localGetTask();
    addtaskElmt.innerHTML = tasks.map((task, index) => `
        <tr>
            <th scope="row">${index + 1}</th>
            <td>${task.name}</td>
            <td>${task.description}</td>
            <td>${task.isComplete}</td>
            <td>
            <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="UpdateTask(${index})">Update Task</button>
            <button class="btn btn-danger" onclick="removeFromTask(${index})">Remove Task</button>
            </td>
        </tr>
    `).join("");
}

function removeFromTask(index) {
    let tasks = localGetTask();
    // index= tasks.findIndex((t, i)=>t.id==index)
    tasks.splice(index, 1);
    localSaveTask(tasks);
    renderTasks();
}

renderTasks();
