const score = 500

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));  //after decimal prints only two more numbers

const num2 = 45.8766

console.log(num2.toPrecision(3)); //  returns string value // and in total gives 3 digits after rounding off



const hun = 1000000
console.log(hun.toLocaleString('en-IN'));    //output = 10,00,000


//////////   ++++++++++++++++++ Maths ++++++++++++++++ library

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4));     // thoda bhi 4 se jyada hui value to rounds off
console.log(Math.floor(4.9));  // 4

// max min ...... math.max(2,4,7,2)

console.log(Math.random());  // always gives value btw 0 and 1
console.log((Math.random()*10) + 1);      //shifts one value towards right and +1 will change .04 into .14 after shifting wo 0 na aae starting mei fir that


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);


