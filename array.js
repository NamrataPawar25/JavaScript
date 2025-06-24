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

function mergeUniqueArrays(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}

const result = mergeUniqueArrays([1, 2], [2, 3]);
console.log(result);

