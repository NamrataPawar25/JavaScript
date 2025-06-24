let num1 = document.querySelector("#num1")
let num2 = document.querySelector("#num2")
let result = document.querySelector("#result")
let addition = document.querySelector("#addition")
let substraction = document.querySelector("#substraction")
let multiplication = document.querySelector("#multiplication")
let division = document.querySelector("#division")

const calculator = {
    // n1,
    // n2,
    addition: function (n1, n2) {
        console.log(n1, n2)
        return n1 + n2
    },
    substraction: function () {
        return this.n1 - this.n2
    },
    multiplication: function () {
        return this.n1 * this.n2
    },
    division: function () {
        if (this.n2 == 0) {
            return "not divided by 0"
        } else {
            return this.n1 / this.n2
        }
    }
}

addition.addEventListener('click', () => {
    console.log("*******")
    n1 = Number(num1.value)
    n2 = Number(num2.value)
    res = calculator.addition(n1, n2)
    result.innerHTML = res
})

substraction.addEventListener('click', () => {

    calculator.n1 = Number(num1.value);
    calculator.n2 = Number(num2.value);

    res = calculator.substraction();
    result.innerHTML = res;
})

multiplication.addEventListener("click", ()=>{
    n1= Number(num1.value)
    n2= Number(num2.value)
    res= calculator.multiplication(n1,n2)
    result.textContent= res
})
division.addEventListener("click", ()=>{
    calculator.n1= Number(num1.value)
    calculator.n2= Number(num2.value)
    res=calculator.division()
    result.textContent= res
})