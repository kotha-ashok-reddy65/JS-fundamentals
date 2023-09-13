//values and variable

// let a = 10;
// console.log(a); //10
// console.log(typeof a);
// //
// const b = 11;
// console.log(a); //10
// /console.log(typeof a);

// var c = 12;
// console.log(c);
// console.log(typeof c);

//accessing variable before its declaration

// console.log(a); // error  referenec error
// let a = 10;
// ////
// console.log(b); // error  referenec
// const b = 10;
//
// console.log(c); // undefined //placeholder or data type
// var c = 10;

// const a = 10;
// a = 11;
// console.log(a);

//data types
//int,string,char,boolean,undefied,null,bigint, etc
// let a = null;
// console.log(typeof a);
//strings and templates

// let firstName = "ashok";
// let lastName = "reddy";
// console.log(`${firstName} ${lastName} kotha`);

//if e statemets

//const a = 18;
// let a = prompt("Enter your age?");

// // if (a >= 18) {
// //   console.log(`You can cast vote beacuse you are ${a}!`);
// // } else {
// //   console.log(`you can not cast the vote!`);
// // }
// const vote = a >= 18 ? "you can cast vote" : "you can't cat vote!";
// console.log(vote);

//type conversion and type coersion

// aN);
// let a = String(10);
// console.log(typeof a);
// console.log(typeof N

//falsy values....undefied,null,'',0,false

// let a = undefined;
// if (a) console.log("true if prints ");
// else console.log("false else prints");

//== and === operators

// console.log("loose equality check!");
// let a = 10;
// if (a === "10") console.log(true);
// else console.log(false);

//sitch statement
// let day = prompt("enter a day?");

// switch (day) {
//   case "monday":
//     console.log("tired on monday");
//     break;
//   case "tuesday":
//     console.log("devoutional");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("read nothing!");
//     break;
//   default:
//     console.log("enjoy everyday");
// }
// let a = (a, b) => console.log(a + b);
// a(10, 12);

// function expression vs declaration

// function greet(firstName) {
//   return `Hello  ${firstName} ✌️`;
// }
// //const res = greet("ashok");
// //console.log(res);

// const greetE = function (firstName) {
//   //return `John ${greetW}`;
//   let gree = greet(firstName);
//   return `${gree},you are awesome`;
// };
// console.log(greetE("happy birthday!"));

//array methods

// let arr = [1, 2, 3, "a", "b", null, undefined, true, 4];
// //console.log(arr.unshift(0));
// //console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//   console.log(`${typeof arr[i]}:${arr[i]}`);
// }

// let arr = [1, 2, 3, 4, 5, "error", 7, 8, 9];
// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] !== "number") break;
//   else console.log(`${arr[i]}`);
// }

// const cleCoverted = function () {
//   const measure = {
//     type: "degrees",
//     value: prompt("enter a temerature value"),
//   };
//   console.log(measure.value); //11
//   // console.log(typeof measure.value);
//   let celCovert = Number(measure.value) + 273;

//   return celCovert;
// };

// const finalCovert = cleCoverted();
// console.log(finalCovert); //11273

// const getAge = (birthDate) =>
//   Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e10);

// // today is 2018-06-13
// console.log(getAge("2001-05-25"));
// getAge("1994-06-13"); // 24

// function _calculateAge(birthday) {
//   // birthday is a date
//   var ageDifMs = Date.now() - birthday.getTime();
//   var ageDate = new Date(ageDifMs); // miliseconds from epoch
//   return Math.abs(ageDate.getUTCFullYear() - 1970);
// }
// _calculateAge("07-02-1999");

// function calcAge(dateString) {
//   var birthday = +new Date(dateString);
//   return ~~((Date.now() - birthday) / 31557600000);
// }
// console.log(calcAge(12 - 5 - 1999));

// function age(birthdate) {
//   console.log(birthdate);
//   const today = new Date(); //
//   console.log(today);
//   const age =
//     today.getFullYear() -
//     birthdate.getFullYear() -
//     (today.getMonth() < birthdate.getMonth() ||
//       (today.getMonth() === birthdate.getMonth() &&
//         today.getDate() < birthdate.getDate()));
//   return age;
// }

// const birthdate = new Date(2000, 2, 5);
// const ageValue = age(birthdate);
// console.log(ageValue);

//to get present date and month

// let curYear = new Date().getFullYear();
// console.log(curYear);
// let birYear = new Date("2002-07-02").getFullYear();
// console.log(birYear);

// console.log(curYear - birYear);

// let a = new Date();
// let months = ("0" + (a.getMonth() + 1)).slice(-2);
// console.log(months); //8
//let inputDate = document.querySelector("input");
//console.log(inputDate.target.value);
const a = function getbirth() {
  let inputDate = document.querySelector("input").value;
  ///console.log(inputDate);
  //inputDate.toString(value)="";
  let curYear = new Date().getFullYear();
  let birYear = new Date(inputDate).getFullYear();
  let Year = curYear - birYear;
  //console.log(typeof curYear);

  //return inputDate;
  document.getElementById("dis").textContent = `You are ${Year} years old`;
  document.querySelector("input").value = "";
};
//inputDate.textContent = "";
//const res = getbirth();
//console.log(res);
var subButton = document.getElementById("subButton");

subButton.addEventListener("click", a);
// console.log(inputDate);
//let birYear = new Date(a).getFullYear();
//let b = new Date(res); //year-mon-date
//let month = ("0" + (b.getMonth() + 1)).slice(-2);
//console.log(month); //9
//let month = months.slice(-2);
//console.log(typeof month);//
//let date = ("0" + a.getDate()).slice(-2);
//console.log(date);
//let curMon = new Date().getMonth();
//console.log(`Your ${curYear - birYear}  years old`);
// console.log(new Date().getMonth());
// //let d = new Date("2002-07-02");
// let a = new Date("2002-07-02").getFullYear();
// let b = new Date("2002-07-02").getMonth();
// let c = new Date("2002-07-02").getDay();
// console.log(a, b, c);
//const bd = "2002-07-02";

//let f = new Date(bd).getMonth();
//console.log(new Date().getMonth());
//console.log(new Date().getMonth() - new Date(bd).getMonth());//
