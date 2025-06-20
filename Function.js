const prompt = require(`prompt-sync`)();

function fact(){
let n1= Number(prompt("Enter a Number: "))
let factorial=1
if(n1==0 || n1==1){
    console.log("Factorial is 1");
}
else{
for(let i=1; i<=n1; i++){
    factorial= factorial*i;
}
console.log("Factorial is ",factorial);
}
}
fact()

function evenodd(num){
    if(num%2==0){
        console.log(`${num} is even number`);
    }
    else{
        console.log(`${num} is odd number`);
    }
}
evenodd(5)


