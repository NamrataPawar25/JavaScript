arr1 = ["red", "yellow", "pink", "green"]
console.log(arr1);
console.log(typeof (arr1));

// push, pop, unshift, shift
arr1.push("blue")
console.log(arr1);

arr1.unshift("orange")
console.log(arr1);

arr1.pop("")
console.log(arr1);

arr1.shift()
console.log(arr1);

// slice, splice
subarray = arr1.slice(2, 3)
console.log(subarray);

arr1.splice(2, 0, "white")
console.log(arr1);

console.log(arr1[2]);

arr1[4] = "black"
console.log(arr1);

// for of, for in , indexof, include
p = arr1.indexOf("black")
console.log(p);

indarr1 = arr1.indexOf("black")
if (indarr1 !== -1) {
    console.log(indarr1, "you can order");
}
else {
    console.log("product is not available");
}


y = arr1.includes("white")
console.log(y);

for (i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

console.log("End of For");
for (x of arr1) {   //returns value
    console.log(x);
}

for (i in arr1) {
    console.log(i); //returns index
}

for (i in arr1) {
    console.log(i, arr1[i]); //returns index and value
}


marks = [20, 40, 60, 80, 100]
highestmarks = 0
secondhighestmark=0
for (i = 0; i < marks.length; i++) {
    if (highestmarks < marks[i]) {
        highestmarks = marks[i]
    }
}
console.log(highestmarks);

secondhighestmark=0
for (i = 0; i < marks.length; i++) {
    if (highestmarks > marks[i] && secondhighestmark< highestmarks) {
        secondhighestmark = marks[i]
    }
}
console.log(secondhighestmark);

reversearray=[]
l=marks.length
for(i=0;i<l;i++){
    if(marks[i]>marks[i+1]){
        temp=marks[i]
        marks[i]=marks[i+1]
        marks[i+1]= temp
    }
    reversearray.push(marks[i])
}
console.log(reversearray);
console.log(reversearray[l-2]);

// MERN 
// forEach, map, filter, find, some, findIndex, reduce 
student=["namrata", 2045, 9, "CSE", "Final Year"]
student.forEach((element,index)=>{
    console.log("info", element);
})
arr1.forEach((e)=>{
    console.log(e, ": I like this color");
})

sqNumber= marks.map((number)=>{
    return number*number
})
console.log(sqNumber);

sqNumber=marks.map((x)=> x*x)
console.log(sqNumber);

num=[1,2,3,4,5,6,7]
evenArray= num.filter((e)=>{
    if(e%2==0){
        return e
    }
})
console.log(evenArray);

newnum= num.map((p)=>{
    return p+5
})
console.log(newnum);

total=0;
for(i=0;i<num.length;i++){
    total+= num[i]
}
console.log(total);

let index4
for(i=0; i<num.length;i++){
    if(num[i]==4){
        index4=i
    }
}
console.log(index4);

function mergeUniqueArrays(array1, array2) {
    return [...new Set([...array1, ...array2])];
}

let array1 = [1, 2, 3];
let array2 = [2, 3, 4, 5];

let merged = mergeUniqueArrays(array1, array2);
console.log(merged); 

let arr3 = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
function findFrequency(arr) {
    let frequency = {};
    arr.forEach(x => {
        if (frequency[x]) {
            frequency[x] += 1;
        } else {
            frequency[x] = 1;
        }
    });
    return frequency;
}

let result = findFrequency(arr3);
console.log(result);

function manualIncludes(arr3, value) {
  for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] === value) {
      return true;
    }
  }
  return false;
}
result= manualIncludes(arr3, 4)
console.log(result);

array1=[1,2,3,4,5,6]
function shiftLeft(array1) {
  if (array1.length === 0) return array1;

  const first = array1.shift();   
  array1.push(first);             
  return array1;
}
console.log(shiftLeft(array1));

function removeduplicates(arr3){
    return [...new Set(arr3)]
}
console.log(removeduplicates(arr3));

function intersection(arrA, arrB) {
    return arrA.filter(item => arrB.includes(item));
}
let arrA = [1,2,3,4,5];
let arrB = [3,4,5,6,7];
console.log(intersection(arrA, arrB)); 

function generateMultiplicationTable() {
    let table = [];

    for (let i = 1; i <= 10; i++) {
        let row = [];
        for (let j = 1; j <= 10; j++) {
            row.push(i * j);
        }
        table.push(row);
    }
    return table;
}

let multiplicationTable = generateMultiplicationTable();
console.log(multiplicationTable);



function reverseNumber(num) {
    let rev = 0;
    while (num > 0) {
        let digit = num % 10;
        rev = rev * 10 + digit;
        num = (num - (num % 10)) / 10;
    }
    return rev;
}
console.log(reverseNumber(4789) );