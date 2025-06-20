str1 = 'Namrata'
str2 = "Dilip"
str3 =  `Pawar`
str4 = str1+" "+str2+ " "+str3
console.log(str4);

str5= str1.concat(" ",str2," ",str3)
console.log(str5);

name1= "Namrata"
console.log(`Hello ${name1}`);

console.log(str5.length);

console.log(str5[3]);
console.log(str5.charAt(3));

strCapitalCase= str4.toUpperCase()
strLowerCase= str4.toLowerCase()

console.log("Uppercase", strCapitalCase, "LowerCase", strLowerCase);
console.log(`Uppercase ${strCapitalCase} Lowercase ${strLowerCase}`);


// indexOf() ,lastIndexOf(), includes(), startsWith(), endsWith()
str6= "Every day is a new chance to do something new !!!"
console.log(str6.indexOf("new"));
console.log(str6.lastIndexOf("new"));

console.log(str6.includes("new"));

console.log(str6.startsWith("Every"));

console.log(str6.endsWith("!"));

console.log(str6[42]);

// slice(), substring(), substr()
console.log(str6.slice(0,5));  //first is a index second is length
console.log(str6.substring(10));

// trim(), trimStart(), trimEnd()

str7= "      Hello    "
console.log(str7.length);
console.log(str7.trim().length);
console.log(str7.trimStart().length);
console.log(str7.trimEnd().length);


// replace(), replaceAll()
console.log(str6.replace("new", "good"));
console.log(str6.replaceAll("new", "good"));
arr= str4.split()
console.log(arr);
arr1= str4.split(" ")
console.log(arr1);
arr2= str4.split("")
console.log(arr2);

text = "a:b:c:d:e:f";
arr4= text.split(":")
console.log(arr4);
