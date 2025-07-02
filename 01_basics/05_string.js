const name = "Rabbi"
const repocount = 50

//  console.log(name + repocount +"Value");

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);  //it is not single quotes.... it's symbol given below esc key//


const gameName = new String('moonhj')  //assessing key value pairs from this string

console.log(gameName[0]);
console.log(gameName.__proto__);    //it tells that it is a string therefore prints {} as output

console.log(gameName.length);
console.log(gameName.toUpperCase());  // converts all alphanumeric characters into uppercase
console.log(gameName.charAt(4));     // returns character at the specified index

console.log(gameName.indexOf('n'));


const newString = gameName.substring(0,4)   // can't give negative values
console.log(newString);

const anotherstring = gameName.slice(-8,4)   // we can pass negative values and it results in reversed values
console.log(anotherstring);


const newStringone = "     rabbi   " 
console.log(newStringone);
console.log(newStringone.trim());  //removes spaces


const url = "https://rabbi.com/moom%40hnm"
console.log(url.replace('%40', '-'));

console.log(url.includes('gh'));  //check value is present or not

console.log(gameName.split('o'));  //splits from the left & right of the given character




