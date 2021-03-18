"use strict";
// console.log("hello World");
// const names: string = "Abdul moiz";
// const lastName: string = "attari";
// const age: number = 23;
// const email: string = "moiza8994@gmail.com";
// const isPresent: boolean = true;
// console.log(names + lastName);
// function firstFunc(name: string) {
//   return name;
// }
// firstFunc("Abdul moiz");
// const obj = {
//   id: 1,
//   roll_NO: 20163,
//   school_Name: "S.M Collage",
// };
// console.log(obj.id);
// const arr: object[] = [
//   {
//     namess: "moiz",
//     ages: 19,
//   },
// ];
// const nub: number = 12;
// const any: any = "Abdul moiz";
// const a: any = 1;
// const s: string = a;
// a.trim();
// function multiply(a: any, b: any) {
//   return a * b;
// }
//unkown  DataType
// console.log(multiply("10", "moiz"));
// function multiply(a: unknown, b: unknown) {
//   if (typeof a === "number" && typeof b === "number") {
//     return a * b;
//   } else {
//     return false;
//   }
// }
// console.log(multiply(10, 10));
// function multiply(a: unknown, b: unknown) {
//   if (typeof a === "string" && typeof b === "string") {
//     return a + " " + b;
//   } else {
//     return false;
//   }
// }
// let a: unknown = 1;
// // a = "moiz";
// let b: unknown = 10;
// // let b: unknown = "moiz";
// if (typeof a === "number" && typeof b === "number") {
//   console.log(a * b);
// } else {
//   alert(false);
// }
// console.log(multiply("10", "Abbdul moiz"));
// function multiply(a: unknown, b: unknown) {
//   if (typeof a === "string" && typeof b === "string") {
//     return a.concat(b);
//   } else {
//     return false;
//   }
// }
// console.log(multiply("100", "100"));
// typeof
// let a=10;
// typeof a === "number";
// const a: string = "hello";
// const b: string = "hii";
// // b=2; //it will show error beacuse "b" is constant
// //Type literals
// //we can only assign hi not other value hi datatype then value is hi
// let c: "hi";
// c = "hi";
// let a: boolean = true;
// a = false;
// // a=1;error gie not nub
// let b: true;
// b = true;
// b=falseThe false can not assign in "true","true" datatype will always assign in "true" if datatype is made "true"
// const a:number=1;
// a=2;//we can not assign another because a is constant
// let b:number=2;
// b=10;
// b=30;
// let c:1.0;
// c=1.000000000000;
// let c:1;
// c=1.0000;//we can only assign 0 afeter point/decimal
// c=1.0
//bigint
//we should add in tsconfig file in "target: es2020"
// let a: bigint = 1n;
// console.log(a);
// a = 2n*3n;
// console.log(a);
// let a: bigint = 1n;
// console.log(a);
// a = 999999999999999999999n;
// let b:4n;
// b=4n
//we can not assign 1n or not upper case 5n only
