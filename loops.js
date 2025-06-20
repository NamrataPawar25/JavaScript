const prompt = require(`prompt-sync`)();
const n3 = Number(prompt("Enter Number: "));
for (i = 1; i <= 10; i++) {
    console.log("3 *", i, "=", n3 * i);
}

for (i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

let num= Number(prompt("Enter a number: "))
let sum=0;
console.log(num%10);
console.log(parseInt(num/10));
while(num>0){
    let rem= num%10;
    sum= sum+rem;
    num= parseInt(num/10);
}
console.log(sum);

const n4 = Number(prompt("Enter Number: "));
if (n4 <= 1) {
    console.log(`${n4} is not prime number`);
} else {
    for (i = 2; i < n4; i++) {
        if (n4 % i == 0) {
            var res= `${n4} is not a prime number`;
            break;
        }
        else {
            var res= `${n4} is a prime number`;
        }
    }
    console.log(res);
}