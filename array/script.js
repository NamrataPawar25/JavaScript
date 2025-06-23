let task= document.querySelector("#task")
let result1 = document.querySelector("#showResult1")
let smark = document.querySelector("#marks");
let result2 = document.querySelector("#showResult2");

let taskArray = [];
function deleteTask(i){
    console.log(i)
    taskArray.splice(i, 1)
    displayTasks();
}
function displayTasks(){
    
    result1.innerHTML = taskArray.map((t, index)=>`
                                    <li class="liClass">
                                    <span>${t}</span>
                                    <button class='btn btn-danger' onclick='deleteTask(${index})'>Delete</button>
                                    </li>
    `).join('')
}

function addTask() {
    let newTask = task.value.trim();

    if (newTask === "") {
        result1.textContent= "Empty task not added"
        return;
    }

    taskArray.push(newTask);
    task.value = ""; 
    console.log("Task list:", taskArray);
    displayTasks()
}

function clearAll(){
    taskArray=[]
    task.value=""
    displayTasks()
}


let markarray = [];

function addMark() {
    let newmark = smark.value.trim();
    if (newmark === "") return;

    markarray.push(newmark);
    smark.value = "";
    console.log(markarray);
    result2.textContent = markarray.join(", ");
}

function calculate() {
    if (markarray.length === 0) {
        result2.innerText = "No marks entered.";
        return;
    }

    let total = 0;
    markarray.forEach((x) => {
        total += Number(x);
    });

    let average = total / markarray.length;

    let highestMark = Number(markarray[0]);
    let lowestMark = Number(markarray[0]);

    for (let i = 1; i < markarray.length; i++) {
        let mark = Number(markarray[i]);
        if (mark > highestMark) highestMark = mark;
        if (mark < lowestMark) lowestMark = mark;
    }

    result2.innerText =
        "Total Marks: " + total +
        "\nHighest Mark: " + highestMark +
        "\nLowest Mark: " + lowestMark +
        "\nAverage Mark: " + average.toFixed(2);
}

function reset() {
    markarray = [];
    smark.value = "";
    result2.innerText = "Marks reset";
    console.log("Marks reset");
}

