"use strict";
// console.log("Abdul moiz");
//Type Assestion
// let myName;
// myName = "Abdul moiz khanzada";
// <string>myName;
// console.log(myName);
// let school;
// school = true;
// school as boolean;
// //union
// let add = 10;
// function myFirst(es: | string | string) {
//   if (typeof addValu
//     es === "string") {
//     as =(addValues);
//   }
//   console.log(add + addValues);
// }
// myFirst(10);
// const arr: (boolean | string | number)[] = [true, 1, "Abdul moiz"];
// console.log(arr);
// const arr: [number, string?, ...object[]] = [
//   1,
//   "Abdul moiz",
//   { names: "Abul Rafay", myFriend: "Tabish" },
// ];
// console.log(arr);
//This is Alias we used this multiple times in any files of in same files
//This could use in anothe rfile
// Alias 1
// export type myNames = {
//   names: "Abdul Moiz Attari";
// };
// //Alias 2
// type secondNames = {
//   father: "zafar Ali";
// };
//This is Also Alias
// type Res = myNames & secondNames;
// enum Role {
//   Teacher = "Teachers",
//   Student = "Students",
//   Director = "Directors",
// }
// type ForFunc = Role.Teacher | Role.Student | "Director";
// // function MyComplex(result: ForFunc){}
// // console.log(("Director"));
// console.log(Role.Director);
// function firstNull(i1,i2):null {
//     let x=null;
//     // ak process chla
//     //then koi error a gaya tou nahi chalee ga or null hi retruun karee ga
//     x= i1 + i2;
//     //ya hum value ko  value execrue ki then uska bad null karn  cha rahee ha tou wo bat alag ha or ho jayee ga
//     return null
// }
//This is undefined
// function FirstUndefined(i1:number,i2:number):undefined {
//     let x;
//     return x
// }
// //Void types means never retrun anything
// function FirstVoid(i1:number,i2:number):void {
//    let sum=i1+i2;
// }
//this is never type and it never end due to cond is true
// function FirstNever() {
//   while (true) {
//     let x = 1;
//   }
// }
// console.log(typeof FirstNever());
function FirstNever() {
    throw new Error("SSSSs");
}
console.log(typeof FirstNever());
