let username = document.querySelector("#username")
let password = document.querySelector("#password");
let result = document.querySelector("#result");

function checkPassword() {
    let newPassword = password.value;
    let newUsername= username.value
    if(newUsername===""){
        result.textContent = "Username required";
    }
    else if (newPassword === "") {
        result.textContent = "Password cannot be empty";
    } else if (newPassword.length < 6) {
        result.textContent = "Password is too short";
    } else if (!/[A-Z]/.test(newPassword)) {
        result.textContent = "Password must contain at least one capital letter";
    } else if (/[0-9]/.test(newPassword)){
        result.textContent = "Password must not contain any number";
    }
    else {
        result.textContent = "Password is valid";
    }
     username.value=""
    password.value=""
    result.value=""
}
