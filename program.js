const prompt= require(`prompt-sync`)();
function showList(){
    // document.querySelector("#list").textContent="Batch 51"
     document.querySelector("#list").innerHTML=`
                                               <li>Chhava</li>
                                               <li>Khaki</li>`
}
// n1= prompt("Enter your name here")
// console.log(n1)

function myName(){
    myName = document.querySelector("#name1").value;
    console.log(myName)
}

// create a variable which tells your college name
cname = "Yashoda";
console.log(cname);

// create a variable which tells your age
age= 20;
console.log("My age is:"+age);

// create a let variable show your favourite color and then change it and show both
let color= "Orange";
console.log("My Favourite color is:" +color);
color="Pink";
console.log(color);

// Declare a variable inside if block and see if you can print it outside the block
{
    var b="namrata";
}
console.log(b);

// create a const array of three fruits .add another fruit to it and print the result 
const arr1=["mango", "Watermelon", "apple"];
console.log(arr1);
arr1.push("pineapple")
console.log(arr1)
arr1.pop("apple")
console.log(arr1)

// try to reassign the array the array by using const variable
let arr=[10,20,30]
console.log(arr)
arr=[30,40,50]
console.log(arr);


// Arithmatic Operators
const num1= Number(prompt("Enter Number 1:"))
const num2= Number(prompt("Enter Number 2:"))
const sum=num1+num2;
console.log("Addition: "+sum)

const sub=num1-num2;
console.log("Substraction:"+sub)

const mul=num1*num2;
console.log("Multiplication:"+mul)

const div=num1/num2;
console.log("division:"+div)

const mod=num1%num2;
console.log("Modulus:"+mod);

// Comparision OPerators

let x= 10, y=20;
console.log(x>y);
console.log(x<y);
console.log(x===y);
console.log(x!==y);

// Combine Logical Operator

let isAdult= true;
let hasLicense=false;
console.log(isAdult && hasLicense)
console.log(isAdult || hasLicense)
console.log(!isAdult);

// Demonstate operator precedence
let result = 10 + 2 * 5 - 8 / 4
console.log(result)

// Using Assignment Operator
let p=10;
p+=5
console.log(p)

p*=2;
console.log(p)


// Assignment 1: Arithmatic Operator
const n1= Number(prompt("Enter Number 1: "));
const n2= Number(prompt("Enter Number 2: "));

const addition = n1+n2;
console.log("Addition of n1 + n2 :" +addition)

const substraction = n1-n2;
console.log("Substraction of n1 - n2 :" +substraction)

const multiplication = n1*n2;
console.log("Multiplication of n1 * n2 :" +multiplication)

const division = n1/n2;
console.log("Division of n1 / n2 :" +division)

const modulus = n1%n2;
console.log("Modulus of n1 % n2 :" +modulus)


// Assignment 2: Comparision Operator

const e = (n1>n2)
console.log("Is first number greater than second number?"+e)

const f=(n1<n2)
console.log("Is first number less than second number?"+f)

const g=(n1==n2)
console.log("Is first number less than second number?"+g)


// Assignment 3: Logical Operator
const math= Number(prompt("Enter Math Score: "))
const sci= Number(prompt("Enter Science Score: "))
if((math>=90)&&(sci>=85)){
console.log("Scholarship Eligibility: true")
}
else{
    console.log("Scholarship Eligibility: false")
}

// Assignment 4: Assignment Operator

let h=10;
console.log("Initial value of x: "+h)

h+=5
console.log("After adding 5: "+h)
h*=3
console.log("After Multiply by 3: "+h)
h-=10
console.log("After Substracting 10: "+h)
h/=2
console.log("After Dividing by 2: "+h)
h%=3
console.log("MOdulus With 3: "+h)

// Assignment 5: Operator Precedence

let i= 10+3*5
console.log(i)
i=(10+3)*5
console.log(i)
i=20/2+3
console.log(i)
i=20/(2+3)
console.log(i)
console.log("- In expression 1, multiplication (*) has higher precedence than addition (+), so 3 * 5 = 15 is evaluated first, then 10 + 15 = 25.");
console.log("- In expression 2, parentheses force addition first (10 + 3 = 13), then multiplied by 5 to get 65.");
console.log("- In expression 3, division (/) is done before addition, so 20 / 2 = 10, then 10 + 3 = 13.");
console.log("- In expression 4, parentheses force 2 + 3 = 5 first, then 20 / 5 = 4.");

// Assignment 6: Combined Example
const Length = Number(prompt("Enter Length: "))
const Width = Number(prompt("Enter Width: "))
const area=Length*Width
console.log("Area: "+area)
const perimeter=2*(Length+Width)
console.log("Perimeter: "+perimeter)
J= (perimeter>area)
console.log("Is perimeter greater than area? "+J)

// Assignment 7: Complex logical and Comparision Operator

const a1 = Number(prompt("Enter age: "))
const iscitizen = String(prompt("Are you citizen(true/false?)"))
eligible = ((a1>=18)&&(iscitizen=="true"))
    console.log("Eligible to vote: " + eligible)

// Assignment 8: BMI Calculator
const weight = Number(prompt("Enter weight (kg):"));
const height = Number(prompt("Enter height (m):"));

const BMI = weight / (height * height);
if (BMI < 18.5) {
    console.log("Underweight");
} else if (BMI >= 18.5 && BMI < 24.9) {
    console.log("Normal weight");
} else if (BMI >= 25 && BMI < 29.9) {
    console.log("Overweight");
} else if (BMI >= 30) {
    console.log("Obesity");
}

// Assignment 9: Even Or Odd

const n= Number(prompt("Enter Number: "))
if(n%2==0){
    console.log("Number is even")
}
else{
    console.log("Number is odd")
}

// Assignment 10: Shopping Discount

const amount = Number(prompt("Enter total amount: "));
let total = amount;

if (amount > 100) {
    total = amount - (amount * 10 / 100); // Apply 10% discount
    console.log("Discount Total: " + total);
}
else{
    console.log("You doesn't get discount")
}

