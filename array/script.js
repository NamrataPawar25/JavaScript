let task = document.querySelector("#task")
let result1 = document.querySelector("#showResult1")
let smark = document.querySelector("#marks");
let result2 = document.querySelector("#showResult2");
let text = document.querySelector("#arrayText")
let result3 = document.querySelector("#showResult3")
let number = document.querySelector("#number")
let result4 = document.querySelector("#showResult4")
let name1 = document.querySelector("#name1")
let result5 = document.querySelector("#showResult5")
let CreateRowField = document.querySelector("#CreateRow")



let taskArray = [];
function deleteTask(i) {
    console.log(i)
    taskArray.splice(i, 1)
    displayTasks();
}
function displayTasks() {

    result1.innerHTML = taskArray.map((t, index) => `
                                    <li class="liClass">
                                    <span>${t}</span>
                                    <button class='btn btn-danger' onclick='deleteTask(${index})'>Delete</button>
                                    </li>
    `).join('')
}

function addTask() {
    let newTask = task.value.trim();

    if (newTask === "") {
        result1.textContent = "Empty task not added"
        return;
    }

    taskArray.push(newTask);
    task.value = "";
    console.log("Task list:", taskArray);
    displayTasks()
}

function clearAll() {
    taskArray = []
    task.value = ""
    displayTasks()
}


let markarray = [];

function addMark() {
    let newmark = smark.value.trim();
    if (newmark === "") {
        result2.textContent = "Enter Mark"
        return;
    };

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

let array = ["Audi", "Tata", "Fortuner", "Thar", "Scorpio"]
function search() {
    let newText = text.value.trim();
    let match = array.find(item => item.toLowerCase() === newText.toLowerCase());

    if (newText === "") {
        result3.textContent = "Empty Array not found"
        return;
    }

    if (match) {
        result3.textContent = match;
    } else {
        result3.textContent = "No matches Found";
    }
}

numberArray = []
function addNumber() {
    let newnumber = number.value.trim()
    if (newnumber === "") {
        result4.textContent = "Empty Number not added"
        return;
    }

    numberArray.push(newnumber);
    number.value = "";
    console.log(numberArray);
    result4.textContent = numberArray.join(", ");
}
function showEven() {
    if (numberArray.length === 0) {
        result4.innerText = "No number entered.";
        return;
    }
    let evenNumbers = numberArray.filter(num => num % 2 === 0);

    if (evenNumbers.length > 0) {
        result4.innerText = "Even numbers: " + evenNumbers.join(", ");
    } else {
        result4.innerText = "No even numbers found.";
    }
}

function showOdd() {
    if (numberArray.length === 0) {
        result4.innerText = "No number entered.";
        return;
    }


    let oddNumbers = numberArray.filter(num => num % 2 !== 0);

    if (oddNumbers.length > 0) {
        result4.innerText = "Odd numbers: " + oddNumbers.join(", ");
    } else {
        result4.innerText = "No odd numbers found.";
    }
}

function EVclear() {
    numberArray = [];
    number.value = "";
    result4.textContent = ""
}

nameArray = []
function addName() {
    newName = name1.value
    if (newName === "") {
        result5.textContent = "Empty Names not added"
        return;
    }


    nameArray.push(newName);
    name1.value = "";
    console.log(nameArray);
    result5.textContent = nameArray.join(", ");
}
function sort() {
    nameArray.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
    result5.textContent = nameArray.join(", ");
}

function NameTaskreset() {
    nameArray = []
    name1.value = ""
    result5.textContent = ""
}
numArray=[2,3,4,5,6,7,8,9,10]
function createTables() {
    CreateRowField.innerHTML = numArray.map((x, i) => `
                                <tr>
                                <td>${x * 1}</td>
                                <td>${x * 2}</td>
                                <td>${x * 3}</td>
                                <td>${x * 4}</td>
                                <td>${x * 5}</td>
                                <td>${x * 6}</td>
                                <td>${x * 7}</td>
                                <td>${x * 8}</td>
                                <td>${x * 9}</td>
                                <td>${x * 10}</td>
                                </tr>
    `).join("")
}
createTables()