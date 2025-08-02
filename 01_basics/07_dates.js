//  dates

let myDate = new Date()
//console.log(myDate.toString());     //  Sat Aug 02 2025 06:46:48 GMT+0000 (Coordinated Universal Time)
//console.log(myDate.toDateString());   //   Sat Aug 02 2025
//console.log(myDate.toLocaleString());   //   8/2/2025, 6:46:48 AM

//console.log(typeof myDate);      //  object

let myCreatedDate = new Date(2023, 0, 23)   // months start from 0 in js
console.log(myCreatedDate);

let myCreatedDate1 = new Date(2023, 0, 23, 5, 3)   //   1/23/2023, 5:03:00 AM   //(year,month,date,hr,min,sec) both date and timme separated by comma
console.log(myCreatedDate1.toLocaleString());


// Also be written as:
let myCreatedDate2 = new Date("2023-01-14")  


// yy-mm-dd  in this case, month starts with 1 not 0
// also   mm-dd-yy




//       ****************      time stamps      ******************
//used for making polls or comparison of dates or different time period



//                   **********************   Time Stamp  *********************

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate1.getTime());   //in dono ke liye output mei total 2 values aai hn unko compare krskte hn
console.log(Date.now());   //gives values in milisec (compare always in milisec)

//to convert in seconds :::  Date.now()/1000    it gives decimal values too
//  so using math.floor(Date.now()/1000)

let newDate = new Date()
console.log(newDate);     // gives current date
console.log(newDate.getMonth());     //starting from 0 therefore print 7 for august




