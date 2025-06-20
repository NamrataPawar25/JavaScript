const inputString = document.querySelector("#inputPara")
const result1 = document.querySelector("#result")

function countCharacter() {
    inputSTR = inputString.value
    console.log(inputSTR.length);
    result1.textContent = inputSTR.length
    result1.style.fontSize = "30px"
}
function countWords() {
    inputSTR = inputString.value
    result1.textContent = inputSTR.split(" ").length
}
function countVowels() {
    inputSTR = inputString.value
    const allVowels = "aeiouAEIOU"
    let count = 0
    for (i = 0; i < inputSTR.length; i++) {
        if (allVowels.includes(inputSTR[i])) {
            count++;
        }
    }
    result1.textContent = count
}
function getFirstWord() {
    inputSTR = inputString.value
    res = inputSTR.split(" ")
    result1.textContent = res[0]
}
function checkPalindrome() {
    const str = inputString.value.trim();
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    const result = str === reversed;
    result1.textContent = result ? "It is a palindrome" : "It is not a palindrome";
}

function splitIntoWord() {
    const inputSTR = inputString.value;
    const arr = inputSTR.split(" ");
    result1.textContent = JSON.stringify(arr);
}
function capitalizeWord() {
    const inputSTR = inputString.value
    words = inputSTR.split(" ")
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    result1.textContent = words.join(" ");
}

function reverseCharacter() {
    const str = inputString.value.trim();
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    result1.textContent = reversed;
}

function replacePlaces() {
    inputSTR = inputString.value
    res = inputSTR.replaceAll(" ", "-")
    result1.textContent = res
}

function countCharacterOccurrence() {
    const str = inputString.value;
    const char = prompt("Enter a character to count:");

    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }

    result1.textContent = (`'${char}' appears ${count} times`);
}

function removeNonAlphanumeric() {
    const str = inputString.value;
    const result = str.replace(/[^a-zA-Z0-9]/g, '');
    result1.textContent = result;
}

function checkStartEndSame() {
    const str = inputString.value.trim(); // Get input from textarea

    if (str.length === 0) {
        result1.textContent = "Please enter a string.";
        return;
    }

    const firstChar = str[0];
    const lastChar = str[str.length - 1];

    if (firstChar === lastChar) {
        result1.textContent = "Yes, the string starts and ends with the same character.";
    } else {
        result1.textContent = "No, the string does not start and end with the same character.";
    }
}






