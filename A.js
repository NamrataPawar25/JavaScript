let arr1 = [4, 7, 34, 76, 3];
let largestnum = 0;
let secondlargestnum = 0;

for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > largestnum) {
        secondlargestnum = largestnum;
        largestnum = arr1[i];
    }
}
console.log("Second highest number is:", secondlargestnum);
console.log(largestnum);

// let x=5
// {
//     let x=10;
// }
// console.log(x);   //value of x is 5 let is block scoped

// var y=20
// {
//     var y=30
// }
// console.log(y);   //value of y is 30 var is function scoped


marks = [20, 40, 60, 80, 100]
highestmarks = 0
secondhighestmark = 0
for (i = 0; i < marks.length; i++) {
    if (highestmarks < marks[i]) {
        highestmarks = marks[i]
    }
}
console.log(highestmarks);

secondhighestmark = 0
for (i = 0; i < marks.length; i++) {
    if (marks[i] < highestmarks && marks[i] > secondhighestmark) {
        secondhighestmark = marks[i]
    }
}
console.log(secondhighestmark);


str1 = "Namrata"
reverse = ""
for (let i = str1.length - 1; i >= 0; i--) {
    reverse += str1[i]
}
console.log("output is: ", reverse)

str2 = "namu"
reverse = ""
for (let i = str2.length - 1; i >= 0; i--) {
    reverse += str2[i]
}
if (str2 == reverse) {
    console.log("The string is palindrome: ", reverse)
} else {
    console.log("String is not palindrome")
}

str1= "Namrata Dilip pawar"
vowels= "aeiouAEIOU"
count=0
for(i=0; i< str1.length; i++){
    if(vowels.includes(str1[i])){
        count++
    }
}
console.log(count);

str2= str1.split(" ").length
console.log(str2);