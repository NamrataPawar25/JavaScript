isLogin = true
if (isLogin) {
    console.log("You are Logged in");
}
else {
    console.log("Please Login");
}

age = 18;
isIndian = true;
if (age >= 18 && isIndian) {
    console.log("User can Vote");
}
else {
    console.log("User Can't Vote");
}

marks = 90
if (marks < 35) {
    console.log("Fail");
}
else if (marks >= 35 && marks < 60) {
    console.log("pass");
}
else if (marks >= 60 && marks < 75) {
    console.log("pass with First class");
}
else {
    console.log("pass with Distinction");
}

if (marks < 100 && marks >= 75) {
    console.log("pass with Distinction");
}
else if (marks < 75 && marks >= 60) {
    console.log("pass with First class");
}
else if (marks < 60 && marks >= 35) {
    console.log("pass");
}
else {
    console.log("fail");
}

const date = new Date();
console.log("Month", date.getMonth());

day = date.getDay();
  console.log(day);


Day = "mon";
switch (Day) {
    case "mon":
        console.log("Working Day Monday");
        break;
    case "tue":
        console.log("Working Day Tuesday");
        break;
    case "wed":
        console.log("Working Day Wednesday");
        break;
    case "thu":
        console.log("Working Day Thursday");
        break;
    case "fri":
        console.log("Working Day Friday");
        break;
    case "sat":
        console.log("Holiday....");
        break;
    case "sun":
        console.log("Holiday....");
        break;
    default:
        console.log("Enter Correct Value");
}


// emp
// sal <1l   <5l  25l
// deg SD PM RH
// exp 0-1 1-10  10-20

exp=5
deg= "PM"
if(exp<1){
    if(deg=="PM"){
        console.log("Bonus1 to pm")
    }
    else if(deg=="SD"){
        console.log("Bonus1 to SD");
    }
}
else if(exp>=1){
    if(deg=="PM"){
        console.log("Bonus2 to PM");
    }
    else if(deg=="SD"){
        console.log("Bonus2 to SD");
    }
}

