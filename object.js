student = {
    name: "Namrata",
    age: 20,
    grade: 9.0,
    subject: "Math",
    grade: 9.5
};
console.log(student);
delete student.age
console.log(student.name);
console.log(student.age);
console.log(student.grade)
console.log(student);

book = {
    title: "Programming in C",
    author: "Dennis richhie",
    details: {
        pages: 100,
        genre: "2nd"
    }
}
console.log(book.details.pages);
console.log(book.details.genre);

product = {
    Product_name: "parle",
    price: 50,
    stock: "True"
}
for (let key in product) {
    if (key === "Product_name" && product[key] === "parle") {
        console.log(product.Product_name, ":",product.stock);
        break;
    }
}
cal={
    addition_function(a,b){
        return a+b;
    },
    substraction_function(a,b){
        return a-b;
    },
    multiplication_function(a,b){
        return a*b
    },
    division_function(a,b){
        return a/b
    }
}
console.log("Addition:" ,cal.addition_function(2,3));
console.log("Substraction:",cal.substraction_function(10,5));
console.log("Multiplication:",cal.multiplication_function(10,2));
console.log("Division", cal.division_function(25,5));

calculator = {
    num1: 20,
    num2: 60
}
console.log("Addition: ", calculator.num1 + calculator.num2);
console.log(`Addition: ${calculator.num1} + ${calculator.num2} = ${calculator.num1 + calculator.num2}`);
console.log(`Substraction: ${calculator.num1} - ${calculator.num2} = ${calculator.num1 - calculator.num2}`);
console.log(`Multiplication: ${calculator.num1} * ${calculator.num2} = ${calculator.num1 * calculator.num2}`);
console.log(`Division: ${calculator.num1} / ${calculator.num2} = ${calculator.num1 / calculator.num2}`);

const person1 = {
    name: "Sita",
    age: 20
};
const person2 = {
    name: "Sita",
    age: 20
};

if (person1.name === person2.name) {
    console.log("Names are same");
} else {
    console.log("Names are different");
}

if (person1.age === person2.age) {
    console.log("Age is same");
} else {
    console.log("Age is not same");
}
// eval